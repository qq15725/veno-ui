// Styles
import './styles/form-control.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, convertToUnit, useRender, pick } from '../../utils'

// Components
import { Label } from '../label'
import { Messages } from '../messages'
import { Icon } from '../icon'

// Composables
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeDensityProps, useDensity } from '../../composables/density'
import { makeValidationProps, useValidation } from '../../composables/validation'
import { makeFormControlDirectionProps, useFormControlDirectionProps } from '../../composables/form-control-direction'

// Types
import type { ComputedRef, PropType, Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export type FormControlSlot = {
  isDisabled: ComputedRef<boolean>
  isReadonly: ComputedRef<boolean>
  isPristine: Ref<boolean | null>
  isValid: ComputedRef<boolean | null>
  isValidating: Ref<boolean>
  reset: () => void
  resetValidation: () => void
  validate: () => void
}

export type FormControlSlots = MakeSlots<{
  prepend: [FormControlSlot],
  label: [FormControlSlot],
  default: [FormControlSlot & { props: Record<string, unknown> }],
  append: [FormControlSlot],
  details: [FormControlSlot],
}>

export function filterFormControlSlots (slots: Record<string, unknown>) {
  return pick(slots, FormControlSlots)
}

export const FormControlEmits = {
  'click:prepend': (e: MouseEvent) => true,
  'click:label': (e: MouseEvent) => true,
  'click:append': (e: MouseEvent) => true,
}

export const FormControlSlots = [
  'prepend',
  'label',
  'default',
  'append',
  'details',
]

export const FormControl = genericComponent<new () => {
  $slots: FormControlSlots
}>()({
  name: 'VeFormControl',

  props: {
    focused: Boolean,
    appendIcon: String,
    prependIcon: String,
    label: [Boolean, String],
    labelId: String,
    labelWidth: [String, Number],
    hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
    hint: String,
    messages: {
      type: [Array, String],
      default: () => ([]),
    },
    persistentHint: Boolean,
    ...makeDimensionProps(),
    ...makeFormControlDirectionProps(),
    ...makeDensityProps(),
    ...makeValidationProps(),
  },

  emits: FormControlEmits,

  setup (props, { slots, emit }) {
    const { formControlDirectionClasses } = useFormControlDirectionProps(props)
    const { dimensionStyles } = useDimension(props)
    const { densityClasses } = useDensity(props)
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
    } = useValidation(props)

    const slotProps = computed<FormControlSlot>(() => ({
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
    }))

    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.prependIcon)
      const hasLabel = !!(slots.label || props.label)
      const hasAppend = !!(slots.append || props.appendIcon)
      const hasHint = !!(slots.hint || props.hint)
      const hasMessages = !!(
        slots.messages ||
        props.messages?.length ||
        errorMessages.value.length
      )
      const hasDetails = !props.hideDetails || (
        props.hideDetails === 'auto' &&
        (hasMessages || hasHint)
      )
      const showMessages = hasMessages || (
        hasHint &&
        (props.persistentHint || props.focused)
      )

      return (
        <div
          class={ [
            've-form-control',
            {
              've-form-control--hide-details': props.hideDetails,
            },
            formControlDirectionClasses.value,
            densityClasses.value,
            validationClasses.value,
          ] }
          style={ [
            dimensionStyles.value,
          ] }
        >
          { hasPrepend && (
            <div class="ve-form-control__prepend">
              { slots.prepend?.(slotProps.value) }

              { props.prependIcon && (
                <Icon
                  onClick={ (e: MouseEvent) => emit('click:prepend', e) }
                  icon={ props.prependIcon }
                />
              ) }
            </div>
          ) }

          { hasLabel && (
            <Label
              class="ve-form-control__label"
              disabled={ isDisabled.value }
              error={ isValid.value === false }
              onClick={ (e: MouseEvent) => emit('click:label', e) }
              for={ props.labelId }
              style={ {
                width: convertToUnit(props.labelWidth),
              } }
            >
              { slots.label?.(slotProps.value) ?? props.label }
            </Label>
          ) }

          { slots.default && (
            <div class="ve-form-control__control">
              { slots.default(slotProps.value) }
            </div>
          ) }

          { hasAppend && (
            <div class="ve-form-control__append">
              { props.appendIcon && (
                <Icon
                  onClick={ (e: MouseEvent) => emit('click:append', e) }
                  icon={ props.appendIcon }
                />
              ) }

              { slots?.append?.(slotProps.value) }
            </div>
          ) }

          { hasDetails && (
            <div class="ve-form-control__details">
              <Messages
                active={ showMessages }
                value={ hasMessages ? props.messages : [props.hint] }
                v-slots={ { default: slots.messages } }
              />

              { slots.details?.(slotProps.value) }
            </div>
          ) }
        </div>
      )
    })

    return {
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
    }
  }
})

export type FormControl = InstanceType<typeof FormControl>