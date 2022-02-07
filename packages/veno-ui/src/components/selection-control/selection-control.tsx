// Styles
import './styles/selection-control.scss'

// Utils
import { computed, ref } from 'vue'
import {
  genericComponent,
  getUid,
  pick,
  SUPPORT_FOCUS_VISIBLE,
  useRender,
  filterInputAttrs
} from '../../utils'

// Components
import { Icon } from '../icon'
import { Label } from '../label'

// Composables
import { makeSelectionControlProps, useSelectionControl } from '../../composables/selection-control'

export { makeSelectionControlProps } from '../../composables/selection-control'

// Types
import type { ComputedRef, ExtractPropTypes, Ref, WritableComputedRef } from 'vue'
import type { MakeSlots } from '../../utils'

export type SelectionControlSlot = {
  label: string | undefined
  model: WritableComputedRef<any>
  isReadonly: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  textColorClasses: Ref<string[]>
  textColorStyles: Ref<string[]>
  props: {
    onBlur: (e: Event) => void
    onFocus: (e: FocusEvent) => void
    id: string
  }
}

export function filterSelectionControlProps (props: ExtractPropTypes<ReturnType<typeof makeSelectionControlProps>>) {
  return pick(props, Object.keys(SelectionControl.props) as any)
}

export type SelectionControl = InstanceType<typeof SelectionControl>

export const SelectionControl = genericComponent<new <T>() => {
  $props: {
    modelValue?: T
    'onUpdate:modelValue'?: (val: T) => any
  }
  $slots: MakeSlots<{
    label: [SelectionControlSlot]
    input: [SelectionControlSlot]
    default: [SelectionControlSlot]
  }>
}>()({
  name: 'VeSelectionControl',

  inheritAttrs: false,

  props: makeSelectionControlProps(),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { attrs, slots }) {
    const {
      densityClasses,
      group,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      trueValue,
    } = useSelectionControl(props)
    const uid = getUid()
    const id = computed(() => props.id || `input-${ uid }`)
    const isFocused = ref(false)
    const isFocusVisible = ref(false)
    const inputRef = ref<HTMLInputElement>()

    function onFocus (e: FocusEvent) {
      isFocused.value = true
      if (
        !SUPPORT_FOCUS_VISIBLE ||
        (SUPPORT_FOCUS_VISIBLE && (e.target as HTMLElement).matches(':focus-visible'))
      ) {
        isFocusVisible.value = true
      }
    }

    function onBlur () {
      isFocused.value = false
      isFocusVisible.value = false
    }

    useRender(() => {
      const slotProps = {
        label: props.label,
        model,
        textColorClasses,
        textColorStyles,
        props: {
          onFocus,
          onBlur,
          id: id.value,
        },
      }
      const type = group?.type.value ?? props.type
      const hasLabel = !!(slots.label || props.label || props.value)
      const [selectionControlAttrs, restAttrs] = filterInputAttrs(attrs)

      return (
        <div
          { ...selectionControlAttrs }
          class={ [
            've-selection-control',
            {
              've-selection-control--dirty': model.value,
              've-selection-control--disabled': props.disabled,
              've-selection-control--error': props.error,
              've-selection-control--focused': isFocused.value,
              've-selection-control--focus-visible': isFocusVisible.value,
              've-selection-control--inline': group?.inline.value || props.inline,
            },
            densityClasses.value,
            textColorClasses.value,
          ] }
        >
          <div class="ve-selection-control__wrapper">
            { slots.default?.(slotProps) }

            <div
              class="ve-selection-control__input"
              style={ textColorStyles.value }
            >
              { icon.value && <Icon icon={ icon.value } /> }

              { slots.input?.(slotProps) }

              <input
                class="ve-native-control"
                ref={ inputRef }
                v-model={ model.value }
                disabled={ props.disabled }
                id={ id.value }
                onBlur={ onBlur }
                onFocus={ onFocus }
                readonly={ props.readonly }
                type={ type }
                value={ trueValue.value }
                name={ group?.name.value ?? props.name }
                aria-checked={ type === 'checkbox' ? model.value : undefined }
                { ...restAttrs }
              />
            </div>
          </div>

          { hasLabel && (
            <Label for={ id.value }>
              { slots.label?.(slotProps) ?? props.label ?? props.value }
            </Label>
          ) }
        </div>
      )
    })

    return {
      isFocused,
      inputRef,
    }
  },
})
