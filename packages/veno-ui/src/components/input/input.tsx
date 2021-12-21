// Styles
import './styles/input.scss'

// Utils
import { ref, nextTick, onBeforeUnmount, onMounted, watch, computed } from 'vue'
import { genericComponent, filterInputAttrs, useRender, getUid, propsFactory, pick, convertToUnit } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { InputControl } from '../input-control'
import { makeInputControlProps, filterInputControlProps } from '../input-control/input-control'
import { Counter } from '../counter'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Directives
import intersect from '../../directives/intersect'

// Types
import type { PropType } from 'vue'
import type { FormControlSlot } from '../form-control/form-control'
import type { InputControlSlot } from '../input-control/input-control'
import type { MakeSlots } from '../../utils'

const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month']

export const makeInputProps = propsFactory({
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

  ...makeFormControlProps(),
  ...makeInputControlProps(),
}, 'input')

export function filterInputProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(Input.props))
}

export type InputSlots = MakeSlots<{
  prepend: [FormControlSlot],
  label: [FormControlSlot],
  prependInner: [InputControlSlot],
  prefix: [InputControlSlot],
  default: [InputControlSlot],
  suffix: [InputControlSlot],
  appendInner: [InputControlSlot],
  clear: [InputControlSlot],
  append: [FormControlSlot],
  counter: [],
}>

export type Input = InstanceType<typeof Input>

export const Input = genericComponent<new () => {
  $slots: InputSlots
}>()({
  name: 'VeInput',

  inheritAttrs: false,

  directives: { intersect },

  props: makeInputProps(),

  emits: {
    'update:modelValue': (val: string) => true,
  },

  setup (props, { attrs, slots }) {
    const inputControlRef = ref<InputControl>()
    const formControlRef = ref<FormControl>()
    const controlHeight = ref('auto')
    const model = useProxiedModel(props, 'modelValue')
    const uid = getUid()
    const id = computed(() => props.id || `ve-input-${ uid }`)
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

    function onIntersect (
      isIntersecting: boolean,
      entries: IntersectionObserverEntry[]
    ) {
      if (!props.autofocus || !isIntersecting) return
      (entries[0].target as HTMLInputElement)?.focus?.()
    }

    const sizerRef = ref<HTMLTextAreaElement>()

    function calculateInputHeight () {
      if (!props.autoGrow) return
      nextTick(() => {
        if (!sizerRef.value) return
        const style = getComputedStyle(sizerRef.value)
        const padding = parseFloat(style.getPropertyValue('--ve-native-control-padding-top'))
          + parseFloat(style.getPropertyValue('--ve-native-control-padding-bottom'))
        const height = sizerRef.value.scrollHeight
        const lineHeight = parseFloat(style.lineHeight)
        const minHeight = parseFloat(String(props.rows)) * lineHeight + padding
        const maxHeight = parseFloat(String(props.maxRows!)) * lineHeight + padding || Infinity
        controlHeight.value = convertToUnit(Math.min(maxHeight, Math.max(minHeight, height ?? 0)))
      })
    }

    onMounted(calculateInputHeight)
    watch(model, calculateInputHeight)
    watch(() => props.density, calculateInputHeight)
    watch(() => props.rows, calculateInputHeight)
    watch(() => props.maxRows, calculateInputHeight)

    let observer: ResizeObserver | undefined
    watch(sizerRef, val => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight)
        observer.observe(sizerRef.value!)
      } else {
        observer?.disconnect()
      }
    })
    onBeforeUnmount(() => {
      observer?.disconnect()
    })

    useRender(() => {
      const isTextarea = props.type === 'textarea'
      const hasCounter = !!(slots.counter || props.counter || props.counterValue)
      const [formControlAttrs, restAttrs] = filterInputAttrs(attrs)
      const [formControlProps] = filterFormControlProps(props)
      const [inputControlProps] = filterInputControlProps(props)
      const styles = isTextarea
        ? { '--ve-form-control-height': controlHeight.value }
        : {}

      return (
        <FormControl
          { ...formControlProps }
          ref={ formControlRef }
          class={ [
            've-input',
            {
              've-input--textarea': isTextarea,
              've-input--auto-grow': props.autoGrow,
              've-input--no-resize': props.noResize || props.autoGrow,
            },
            attrs.class,
          ] }
          label-id={ id.value }
          style={ styles }
          role="textbox"
          { ...formControlAttrs }
          v-slots={ {
            prepend: slots.prepend,
            label: slots.label,
            default: ({ isDisabled, isReadonly, props: formControlProps }) => {
              return (
                <InputControl
                  { ...inputControlProps }
                  ref={ inputControlRef }
                  dirty={ !!model.value }
                  active={ isDirty.value }
                  onUpdate:active={ val => {
                    internalDirty.value = val
                  } }
                  onClick:clear={ e => {
                    e.stopPropagation()
                    model.value = ''
                  } }
                  onClick:control={ focus }
                  { ...formControlProps }
                  v-slots={ {
                    prependInner: slots.prependInner,
                    prefix: slots.prefix,
                    default: ({ inputRef, focus, blur, props: nativeControlProps }) => {
                      if (isTextarea) {
                        return (
                          <>
                          <textarea
                            v-model={ model.value }
                            v-intersect={ [{
                              handler: onIntersect,
                            }, null, ['once']] }
                            ref={ inputRef }
                            autofocus={ props.autofocus }
                            readonly={ isReadonly.value }
                            disabled={ isDisabled.value }
                            id={ id.value }
                            placeholder={ props.placeholder }
                            rows={ props.rows }
                            onFocus={ focus }
                            onBlur={ blur }
                            { ...nativeControlProps }
                            { ...restAttrs }
                          />

                            {
                              props.autoGrow && (
                                <textarea
                                  class={ [
                                    've-input__sizer',
                                  ] }
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
                          <input
                            v-intersect={ [{
                              handler: onIntersect,
                            }, null, ['once']] }
                            v-model={ model.value }
                            ref={ inputRef }
                            autofocus={ props.autofocus }
                            readonly={ isReadonly.value }
                            disabled={ isDisabled.value }
                            id={ id.value }
                            type={ props.type }
                            placeholder={ props.placeholder }
                            onFocus={ focus }
                            onBlur={ blur }
                            { ...nativeControlProps }
                            { ...restAttrs }
                          />
                        )
                      }
                    },
                    suffix: slots.suffix,
                    appendInner: slots.appendInner,
                    clear: slots.clear,
                  } }
                />
              )
            },
            append: slots.append,
            details: hasCounter ? () => {
              return (
                <>
                  <span />

                  <Counter
                    active={ props.persistentCounter || isDirty.value }
                    value={ counterValue.value }
                    max={ max.value }
                    v-slots={ slots.counter }
                  />
                </>
              )
            } : undefined,
          } }
        />
      )
    })

    return {
      inputControlRef,
      blur,
      focus,
    }
  }
})