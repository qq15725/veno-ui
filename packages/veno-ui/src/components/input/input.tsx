// Styles
import './styles/input.scss'

// Utils
import { ref, nextTick, onBeforeUnmount, onMounted, watch, computed } from 'vue'
import { genericComponent, useRender, getUid, convertToUnit, filterInputAttrs } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { InputControl } from '../input-control'
import { Counter } from '../counter'

// Emits
import { FormControlEmits } from '../form-control/form-control'
import { InputControlEmits } from '../input-control/input-control'

// Composables
import {
  makeInputControlProps,
  filterInputControlProps,
  filterInputControlSlots,
} from '../input-control/input-control'
import {
  filterFormControlSlots,
} from '../form-control/form-control'
import { useProxiedModel } from '../../composables/proxied-model'

// Directives
import Intersect from '../../directives/intersect'

// Types
import type { PropType } from 'vue'
import type { FormControlSlots } from '../form-control/form-control'
import type { InputControlSlots, InputControlDefaultSlot } from '../input-control/input-control'
import type { CounterSlot } from '../counter/counter'
import type { MakeSlots } from '../../utils'

const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month']

export type InputSlots = FormControlSlots & InputControlSlots & MakeSlots<{
  counter: [CounterSlot]
  default: [InputControlDefaultSlot]
}>

export const Input = genericComponent<new () => {
  $slots: InputSlots
}>()({
  name: 'VeInput',

  directives: { Intersect },

  props: {
    id: String,
    autofocus: Boolean,
    counter: [Boolean, Number, String] as PropType<true | number | string>,
    counterValue: Function as PropType<(value: any) => number>,
    persistentCounter: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    // Textarea Type
    autoGrow: Boolean,
    noResize: Boolean,
    rows: {
      type: [Number, String],
      default: 5,
      validator: (v: any) => !isNaN(parseFloat(v)),
    },
    maxRows: {
      type: [Number, String],
      validator: (v: any) => !isNaN(parseFloat(v)),
    },
    name: String,
    modelValue: null,

    ...makeInputControlProps(),
  },

  emits: {
    ...FormControlEmits,
    ...InputControlEmits,
    'update:modelValue': (val: string) => true,
  },

  setup (props, { attrs, slots, emit }) {
    const inputControlRef = ref<InputControl>()
    const formControlRef = ref<FormControl>()
    const controlHeight = ref('auto')
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

    function focus () {
      inputControlRef.value?.inputRef?.focus()
    }

    function blur () {
      inputControlRef.value?.inputRef?.blur()
    }

    function onIntersect (isIntersecting: boolean, entries: IntersectionObserverEntry[]) {
      if (!props.autofocus || !isIntersecting) return
      (entries[0].target as HTMLInputElement)?.focus?.()
    }

    const sizerRef = ref<HTMLTextAreaElement>()

    function calculateHeight () {
      if (!props.autoGrow) return
      nextTick(() => {
        if (!sizerRef.value) return
        const style = getComputedStyle(sizerRef.value)
        const padding = (parseFloat(style.getPropertyValue('--ve-native-control---padding-top')) || 0)
          + (parseFloat(style.getPropertyValue('--ve-native-control---padding-bottom')) || 0)
        const height = sizerRef.value.scrollHeight
        const lineHeight = parseFloat(style.lineHeight)
        const minHeight = parseFloat(String(props.rows)) * lineHeight + padding
        const maxHeight = parseFloat(String(props.maxRows!)) * lineHeight + padding || Infinity
        controlHeight.value = convertToUnit(Math.min(maxHeight, Math.max(minHeight, height ?? 0)))
      })
    }

    onMounted(calculateHeight)
    watch(model, calculateHeight)
    watch(() => props.rows, calculateHeight)
    watch(() => props.maxRows, calculateHeight)

    let observer: ResizeObserver | undefined
    watch(sizerRef, val => {
      if (val) {
        observer = new ResizeObserver(calculateHeight)
        observer.observe(sizerRef.value!)
      } else {
        observer?.disconnect()
      }
    })
    onBeforeUnmount(() => {
      observer?.disconnect()
    })

    function onControlClick (e: MouseEvent) {
      focus()
      emit('click:control', e)
    }

    function onClear (e: MouseEvent) {
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
      const styles = isTextarea && controlHeight.value
        ? { '--ve-form-control__control---height': controlHeight.value }
        : {}
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
              've-input--auto-grow': props.autoGrow,
              've-input--no-resize': props.noResize || props.autoGrow,
            },
          ] }
          label-id={ id.value }
          style={ styles }
          name={ props.name }
          onClick:prepend={ (e: MouseEvent) => emit('click:prepend', e) }
          onClick:label={ (e: MouseEvent) => emit('click:label', e) }
          onClick:append={ (e: MouseEvent) => emit('click:append', e) }
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

                            <textarea
                              v-model={ model.value }
                              v-intersect={ [{
                                handler: onIntersect,
                              }, null, ['once']] }
                              autofocus={ props.autofocus }
                              disabled={ isDisabled.value }
                              id={ id.value }
                              name={ props.name }
                              onFocus={ focus }
                              onBlur={ blur }
                              placeholder={ props.placeholder }
                              readonly={ isReadonly.value }
                              ref={ inputRef }
                              rows={ props.rows }
                              { ...nativeControlProps }
                              { ...nativeControlAttrs }
                            />

                            {
                              props.autoGrow && (
                                <textarea
                                  class="ve-input__sizer"
                                  v-model={ model.value }
                                  ref={ sizerRef }
                                  readonly
                                  aria-hidden="true"
                                  { ...nativeControlProps }
                                />
                              )
                            }
                          </>
                        )
                      } else {
                        return (
                          <>
                            { slots.default?.(slotProps) }

                            <input
                              v-intersect={ [{
                                handler: onIntersect,
                              }, null, ['once']] }
                              v-model={ model.value }
                              autofocus={ props.autofocus }
                              disabled={ isDisabled.value }
                              id={ id.value }
                              name={ props.name }
                              onFocus={ focus }
                              onBlur={ blur }
                              placeholder={ props.placeholder }
                              readonly={ isReadonly.value }
                              ref={ inputRef }
                              type={ props.type }
                              { ...nativeControlProps }
                              { ...nativeControlAttrs }
                            />
                          </>
                        )
                      }
                    }
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
  }
})

export type Input = InstanceType<typeof Input>