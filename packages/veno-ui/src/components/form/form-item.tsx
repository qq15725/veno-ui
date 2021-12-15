// Styles
import './styles/form-item.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, propsFactory, pick, convertToUnit } from '../../utils'

// Components
import { Icon } from '../icon'

// Composables
import { makeDensityProps, useDensity } from '../../composables/density'
import { makeValidationProps, useValidation } from '../../composables/validation'

// Types
import type { ExtractPropTypes, ComputedRef, Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export type FormItemSlot = {
  isDisabled: ComputedRef<boolean>
  isReadonly: ComputedRef<boolean>
  isPristine: Ref<boolean | null>
  isValid: ComputedRef<boolean | null>
  isValidating: Ref<boolean>
  reset: () => void
  resetValidation: () => void
  validate: () => void
}

export type FormItemSlots = MakeSlots<{
  prepend: [FormItemSlot],
  control: [FormItemSlot],
  prependInner: [FormItemSlot],
  default: [FormItemSlot],
  appendInner: [FormItemSlot],
  append: [FormItemSlot],
}>

export type FormItem = InstanceType<typeof FormItem>

export function filterFormItemProps (props: ExtractPropTypes<ReturnType<typeof makeFormItemProps>>) {
  return pick(props, Object.keys(FormItem.props) as any)
}

export const makeFormItemProps = propsFactory({
  appendIcon: String,
  prependIcon: String,
  hideDetails: Boolean,
  label: String,
  labelId: String,
  labelWidth: [String, Number],
  ...makeDensityProps(),
  ...makeValidationProps(),
}, 'form-item')

export const FormItem = genericComponent<new () => {
  $slots: FormItemSlots
}>()({
  name: 'FormItem',

  props: makeFormItemProps(),

  emits: {
    'click:prepend': (e: MouseEvent) => true,
    'click:prepend-inner': (e: MouseEvent) => true,
    'click:control': (e: MouseEvent) => true,
    'click:append-inner': (e: MouseEvent) => true,
    'click:append': (e: MouseEvent) => true,
  },

  setup (props, { slots, emit }) {
    const { densityClasses } = useDensity(props, 've-form-item')
    const {
      errorMessages,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses,
    } = useValidation(props, 've-form-item')

    const slotProps = computed<FormItemSlot>(() => ({
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
    }))

    function onClick (e: MouseEvent) {
      if (e.target !== document.activeElement) {
        e.preventDefault()
      }

      emit('click:control', e)
    }

    return () => {
      const hasLabel = props.label || props.labelWidth
      const hasPrepend = (slots.prepend || props.prependIcon || hasLabel)
      const hasControl = !!slots.control
      const hasPrependInner = !!slots.prependInner
      const hasDefault = !!slots.default
      const hasAppendInner = !!slots.appendInner
      const hasDefaultControl = !hasControl && (hasPrependInner || hasDefault || hasAppendInner)
      const hasAppend = (slots.append || props.appendIcon)
      const hasDetails = !props.hideDetails

      return (
        <div
          class={ [
            've-form-item',
            densityClasses.value,
            validationClasses.value,
          ] }
        >
          { hasPrepend && (
            <div
              class="ve-form-item__prepend"
              onClick={ e => emit('click:prepend', e) }
            >
              { slots.prepend?.(slotProps.value) }

              { props.prependIcon && (
                <Icon icon={ props.prependIcon } />
              ) }

              { hasLabel && (
                <label
                  class="ve-form-item__label"
                  for={ props.labelId }
                  style={ {
                    width: convertToUnit(props.labelWidth),
                  } }
                >
                  { props.label }
                </label>
              ) }
            </div>
          ) }

          { hasControl && slots.control?.(slotProps.value) }

          { hasDefaultControl && (
            <div
              class="ve-form-item__control"
              onClick={ onClick }
            >
              { hasPrependInner && (
                <div
                  class="ve-form-item__prepend-inner"
                  onClick={ e => emit('click:prepend-inner', e) }
                >
                  { slots.prependInner?.(slotProps.value) }
                </div>
              ) }

              { hasDefault && slots.default?.(slotProps.value) }

              { hasAppendInner && (
                <div
                  class="ve-form-item__append-inner"
                  onClick={ e => emit('click:append-inner', e) }
                >
                  { slots.appendInner?.(slotProps.value) }
                </div>
              ) }
            </div>
          ) }

          { hasAppend && (
            <div
              class="ve-form-item__append"
              onClick={ e => emit('click:append', e) }
            >
              { slots?.append?.(slotProps.value) }

              { props.appendIcon && (
                <Icon icon={ props.appendIcon } />
              ) }
            </div>
          ) }

          { hasDetails && (
            <div class="ve-form-item__details">
              { slots.details?.(slotProps.value) }
            </div>
          ) }
        </div>
      )
    }
  }
})