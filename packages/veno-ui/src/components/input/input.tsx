// Styles
import './styles/input.scss'

// Utils
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Teleport } from 'vue'
import type { PropType } from 'vue'
import {
  IN_BROWSER,
  convertToUnit,
  filterInputAttrs,
  genericComponent,
  getUid,
  propsFactory,
  useRender,
} from '../../utils'

// Components
import { FormControl } from '../form-control'
import { InputControl } from '../input-control'
import { Counter } from '../counter'

// Emits
import { FormControlEmits } from '../form-control/form-control'
import { InputControlEmits } from '../input-control/input-control'

// Composables
import {
  filterInputControlProps,
  filterInputControlSlots,
  makeInputControlProps,
} from '../input-control/input-control'
import {
  filterFormControlSlots,
} from '../form-control/form-control'
import { useProxiedModel } from '../../composables/proxied-model'

// Directives
import Intersect from '../../directives/intersect'

// Types
import type { FormControlSlots } from '../form-control/form-control'
import type { InputControlDefaultSlot, InputControlSlots } from '../input-control/input-control'
import type { CounterSlot } from '../counter/counter'
import type { MakeSlots } from '../../utils'

const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month']

export type InputSlots = FormControlSlots & InputControlSlots & MakeSlots<{
  counter: [CounterSlot]
  default: [InputControlDefaultSlot]
}>

export const makeInputProps = propsFactory({
  /**
   * @zh 自动聚焦
   */
  autofocus: Boolean,

  /**
   * @zh 自动调整大小
   */
  autoResize: Boolean,

  /**
   * @zh 计数器
   */
  counter: [Boolean, Number, String] as PropType<true | number | string>,

  /**
   * @zh 计数器值
   */
  counterValue: Function as PropType<(value: any) => number>,

  /**
   * @zh ID
   */
  id: String,

  /**
   * @zh 输入框需要传送到那个 DOM
   */
  inputAttach: [Boolean, String, Object] as PropType<boolean | string | Element>,

  /**
   * @zh textarea 独有最大行数
   */
  maxRows: {
    type: [Number, String],
    validator: (v: any) => !isNaN(parseFloat(v)),
  },

  /**
   * @zh 输入框的值
   */
  modelValue: null,

  /**
   * @zh 输入框 name
   */
  name: String,

  /**
   * @zh textarea 独有不允许重置大小
   */
  noResize: Boolean,

  /**
   * @zh 持续显示的计数器
   */
  persistentCounter: Boolean,

  /**
   * @zh 占位符内容
   */
  placeholder: String,

  /**
   * @zh textarea 独有最小行数
   */
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v: any) => !isNaN(parseFloat(v)),
  },

  /**
   * @zh 输入框类型
   */
  type: {
    type: String,
    default: 'text',
  },

  /**
   * @zh 宽度值
   */
  width: [String, Number],

  ...makeInputControlProps(),
})

export const InputEmits = {
  ...FormControlEmits,
  ...InputControlEmits,
  'update:modelValue': (_: string) => true,
}

export const Input = genericComponent<new () => {
  $slots: InputSlots
}>()({
  name: 'VeInput',

  directives: { Intersect },

  props: makeInputProps(),

  emits: InputEmits,

  setup(props, { attrs, slots, emit }) {
    const inputControlRef = ref<InputControl>()
    const formControlRef = ref<FormControl>()
    const controlHeight = ref()
    const controlWidth = ref(props.width)
    const model = useProxiedModel(props, 'modelValue')
    const id = computed(() => props.id || `ve-input-${ getUid() }`)
    const internalDirty = ref(false)
    const isDirty = computed(() => {
      return internalDirty.value || !!model.value || dirtyTypes.includes(props.type)
    })
    const counterValue = computed(() => {
      return typeof props.counterValue === 'function'
        ? props.counterValue(model.value)
        : (model.value || '').toString().length
    })
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength as undefined
      if (
        !props.counter
        || (
          typeof props.counter !== 'number'
          && typeof props.counter !== 'string'
        )
      ) return undefined
      return props.counter
    })

    function focus() {
      inputControlRef.value?.inputRef?.focus()
    }

    function blur() {
      inputControlRef.value?.inputRef?.blur()
    }

    function onIntersect(isIntersecting: boolean, entries: IntersectionObserverEntry[]) {
      if (!props.autofocus || !isIntersecting) return
      (entries[0].target as HTMLInputElement)?.focus?.()
    }

    const mirrorRef = ref<HTMLTextAreaElement | HTMLInputElement>()

    function resize() {
      if (!props.autoResize) return
      nextTick(() => {
        if (!mirrorRef.value) return
        if (props.type === 'textarea') {
          const style = getComputedStyle(mirrorRef.value)
          const padding = (parseFloat(style.getPropertyValue('--ve-native-control---padding-top')) || 0)
            + (parseFloat(style.getPropertyValue('--ve-native-control---padding-bottom')) || 0)
          const lineHeight = parseFloat(style.lineHeight)
          const minHeight = parseFloat(props.rows) * lineHeight + padding
          const maxHeight = parseFloat(props.maxRows!) * lineHeight + padding || Infinity
          controlHeight.value = Math.min(maxHeight, Math.max(minHeight, mirrorRef.value.scrollHeight))
        } else {
          controlWidth.value = Math.max(
            parseFloat(props.width ?? 100),
            mirrorRef.value.scrollWidth,
          )
        }
      })
    }

    onMounted(resize)
    watch(model, resize)
    watch(() => props.rows, resize)
    watch(() => props.maxRows, resize)
    let observer: ResizeObserver | undefined
    watch(mirrorRef, val => {
      if (val) {
        observer = new ResizeObserver(resize)
        observer.observe(mirrorRef.value!)
      } else {
        observer?.disconnect()
      }
    })
    onBeforeUnmount(() => {
      observer?.disconnect()
    })

    function onControlClick(e: MouseEvent) {
      focus()
      emit('click:control', e)
    }

    function onClear(e: MouseEvent) {
      e.stopPropagation()
      focus()
      nextTick(() => {
        model.value = ''
        emit('click:clear', e)
      })
    }

    useRender(() => {
      const isTextarea = props.type === 'textarea'
      const hasCounter = !!(slots.counter || props.counter || props.counterValue)
      const [inputControlProps] = filterInputControlProps(props)
      const [, nativeControlAttrs] = filterInputAttrs(attrs)
      const [formControlSlots] = filterFormControlSlots(slots)
      const [inputControlSlots] = filterInputControlSlots(slots)

      return (
        <FormControl
          ref={ formControlRef }
          class={ [
            've-input',
            {
              've-input--textarea': isTextarea,
              've-input--auto-resize': props.autoResize,
              've-input--no-resize': props.noResize || props.autoResize,
            },
          ] }
          labelId={ id.value }
          style={
            controlHeight.value
              ? { '--ve-form-control---height': convertToUnit(controlHeight.value) }
              : null
          }
          name={ props.name }
          onClick:prepend={ (e: MouseEvent) => emit('click:prepend', e) }
          onClick:label={ (e: MouseEvent) => emit('click:label', e) }
          onClick:append={ (e: MouseEvent) => emit('click:append', e) }
          v-model={ model.value }
          width={ controlWidth.value }
        >
          { {
            ...formControlSlots,
            default: ({ isDisabled, isReadonly }) => {
              return (
                <InputControl
                  { ...inputControlProps }
                  ref={ inputControlRef }
                  onMousedown={ (e: MouseEvent) => {
                    if (e.target === inputControlRef.value?.inputRef) return
                    e.preventDefault()
                  } }
                  dirty={ !!model.value }
                  active={ isDirty.value }
                  onClick:clear={ onClear }
                  onClick:prependInner={ (e: MouseEvent) => emit('click:prepend-inner', e) }
                  onClick:prefix={ (e: MouseEvent) => emit('click:prefix', e) }
                  onClick:suffix={ (e: MouseEvent) => emit('click:suffix', e) }
                  onClick:appendInner={ (e: MouseEvent) => emit('click:append-inner', e) }
                  onClick:control={ onControlClick }
                  onUpdate:active={ val => internalDirty.value = val }
                  role="textbox"
                >
                  { {
                    ...inputControlSlots,
                    default: (slotProps) => {
                      const { inputRef, focus, blur, props: nativeControlProps } = slotProps

                      if (isTextarea) {
                        return (
                          <>
                            { slots.default?.(slotProps) }

                            { IN_BROWSER && (
                              <Teleport
                                disabled={ !props.inputAttach }
                                to={ typeof props.inputAttach === 'boolean' ? null : props.inputAttach }
                              >
                               <textarea
                                 v-model={ model.value }
                                 v-intersect={ [{
                                   handler: onIntersect,
                                 }, null, ['once']] }
                                 autoFocus={ props.autofocus }
                                 disabled={ isDisabled.value }
                                 id={ id.value }
                                 name={ props.name }
                                 onFocus={ focus }
                                 onBlur={ blur }
                                 placeholder={ props.placeholder }
                                 readOnly={ isReadonly.value }
                                 ref={ inputRef }
                                 rows={ props.rows }
                                 { ...nativeControlProps }
                                 { ...nativeControlAttrs }
                               />

                                { props.autoResize && (
                                  <textarea
                                    className="ve-input__textarea-mirror"
                                    v-model={ model.value }
                                    ref={ mirrorRef }
                                    readOnly
                                    aria-hidden="true"
                                    { ...nativeControlProps }
                                  />
                                ) }
                              </Teleport>
                            ) }
                          </>
                        )
                      } else {
                        return (
                          <>
                            { slots.default?.(slotProps) }

                            { IN_BROWSER && (
                              <Teleport
                                disabled={ !props.inputAttach }
                                to={ typeof props.inputAttach === 'boolean' ? null : props.inputAttach }
                              >
                                <input
                                  v-intersect={ [{
                                    handler: onIntersect,
                                  }, null, ['once']] }
                                  v-model={ model.value }
                                  onInput={ ((e: InputEvent) => {
                                    if (mirrorRef.value) {
                                      mirrorRef.value.textContent = (e.target as any).value
                                      resize()
                                    }
                                  }) as any }
                                  autoFocus={ props.autofocus }
                                  disabled={ isDisabled.value }
                                  id={ id.value }
                                  name={ props.name }
                                  onFocus={ focus }
                                  onBlur={ blur }
                                  placeholder={ props.placeholder }
                                  readOnly={ isReadonly.value }
                                  ref={ inputRef }
                                  type={ props.type }
                                  { ...nativeControlProps }
                                  { ...nativeControlAttrs }
                                />

                                { props.autoResize && (
                                  <span
                                    className="ve-input__input-mirror"
                                    ref={ mirrorRef }
                                    aria-hidden="true"
                                    { ...nativeControlProps }
                                  >{ model.value }</span>
                                ) }
                              </Teleport>
                            ) }
                          </>
                        )
                      }
                    },
                  } }
                </InputControl>
              )
            },
            details: hasCounter
              ? () => {
                  return (
                  <>
                    <span />

                    <Counter
                      active={ props.persistentCounter || isDirty.value }
                      value={ counterValue.value }
                      max={ max.value }
                    >
                      { { default: slots.counter } }
                    </Counter>
                  </>
                  )
                }
              : formControlSlots?.details as any,
          } }
        </FormControl>
      )
    })

    return {
      formControlRef,
      inputControlRef,
      blur,
      focus,
    }
  },
})

export type Input = InstanceType<typeof Input>
