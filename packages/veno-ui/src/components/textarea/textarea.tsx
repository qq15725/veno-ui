// Styles
import './styles/textarea.scss'

// Utils
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { convertToUnit, defineComponent, filterInputAttrs, useRender } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { InputControl } from '../input-control'
import { makeInputControlProps, filterInputControlProps } from '../input-control/input-control'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Directives
import Intersect from '../../directives/intersect'

// Types
import type { PropType } from 'vue'

export type Textarea = InstanceType<typeof Textarea>

export const Textarea = defineComponent({
  name: 'VeTextarea',

  directives: { Intersect },

  inheritAttrs: false,

  props: {
    autoGrow: Boolean,
    autofocus: Boolean,
    counter: [Boolean, Number, String] as PropType<true | number | string>,
    counterValue: Function as PropType<(value: any) => number>,
    placeholder: String,
    persistentCounter: Boolean,
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
  },

  emits: {
    'update:modelValue': (val: string) => true,
  },

  setup (props, { attrs, slots }) {
    const model = useProxiedModel(props, 'modelValue')

    const controlHeight = ref('auto')
    const internalDirty = ref(false)
    const isDirty = computed(() => {
      return internalDirty.value || !!model.value
    })

    const counterValue = computed(() => {
      return typeof props.counterValue === 'function'
        ? props.counterValue(model.value)
        : (model.value || '').toString().length
    })
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength as undefined

      if (
        !props.counter ||
        (typeof props.counter !== 'number' &&
          typeof props.counter !== 'string')
      ) return undefined

      return props.counter
    })

    function onIntersect (
      isIntersecting: boolean,
      entries: IntersectionObserverEntry[]
    ) {
      if (!props.autofocus || !isIntersecting) return

      (entries[0].target as HTMLInputElement)?.focus?.()
    }

    const fieldRef = ref<InputControl>()

    function focus () {
      fieldRef.value?.inputRef?.focus()
    }

    function blur () {
      fieldRef.value?.inputRef?.blur()
    }

    const sizerRef = ref<HTMLTextAreaElement>()

    function calculateInputHeight () {
      if (!props.autoGrow) return

      nextTick(() => {
        if (!sizerRef.value) return

        const style = getComputedStyle(sizerRef.value)

        const padding = parseFloat(style.getPropertyValue('--ve-native-control-padding-top')) +
          parseFloat(style.getPropertyValue('--ve-native-control-padding-bottom'))

        const height = sizerRef.value.scrollHeight
        const lineHeight = parseFloat(style.lineHeight)
        const minHeight = parseFloat(String(props.rows)) * lineHeight + padding
        const maxHeight = parseFloat(String(props.maxRows!)) * lineHeight + padding || Infinity

        controlHeight.value = convertToUnit(Math.min(maxHeight, Math.max(minHeight, height ?? 0)))
      })
    }

    onMounted(calculateInputHeight)
    watch(model, calculateInputHeight)
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
      const hasCounter = !!(slots.counter || props.counter || props.counterValue)
      const [formControlAttrs, inputAttrs] = filterInputAttrs(attrs)
      const [formControlProps] = filterFormControlProps(props)
      const [inputControlProps] = filterInputControlProps(props)

      return (
        <FormControl
          class={ [
            've-textarea',
            {
              've-textarea--auto-grow': props.autoGrow,
              've-textarea--no-resize': props.noResize || props.autoGrow,
            },
            attrs.class,
          ] }
          style={ {
            '--ve-form-control-height': controlHeight.value,
          } }
          role="textbox"
          { ...formControlAttrs }
          { ...formControlProps }
          v-slots={ {
            prepend: slots.prepend,
            default: ({ isDisabled, isReadonly, props: formControlProps }) => {
              return (
                <InputControl
                  ref={ fieldRef }
                  dirty={ !!model.value }
                  active={ isDirty.value }
                  onUpdate:active={ val => internalDirty.value = val }
                  onClick:control={ focus }
                  onClick:clear={ e => {
                    e.stopPropagation()
                    model.value = ''
                  } }
                  { ...inputControlProps }
                  { ...formControlProps }
                  v-slots={ {
                    prependInner: slots.prependInner,
                    prefix: slots.prefix,
                    default: ({ inputRef, focus, blur, props: nativeControlProps }) => {
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
                            placeholder={ props.placeholder }
                            rows={ props.rows }
                            onFocus={ focus }
                            onBlur={ blur }
                            { ...nativeControlProps }
                            { ...inputAttrs }
                          />

                          { props.autoGrow && (
                            <textarea
                              class={ [
                                've-textarea__sizer',
                              ] }
                              v-model={ model.value }
                              ref={ sizerRef }
                              readonly
                              aria-hidden="true"
                              { ...nativeControlProps }
                            />
                          ) }
                        </>
                      )
                    },
                    suffix: slots.suffix,
                    appendInner: slots.appendInner,
                    clear: slots.clear,
                  } }
                />
              )
            },
            append: slots.append,
          } }
        />
      )
    })

    return {
      fieldRef,
      focus,
      blur,
    }
  }
})