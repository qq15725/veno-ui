// Styles
import './styles/form-control.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, propsFactory, pick, convertToUnit, useRender } from '../../utils'

// Components
import { Label } from '../label'
import { Messages } from '../messages'
import { Icon } from '../icon'

// Composables
import { makeDensityProps, useDensity } from '../../composables/density'
import { makeValidationProps, useValidation } from '../../composables/validation'
import { makeFormControlLayoutProps, useFormControlLayoutProps } from '../../composables/form-control-layout'
import { useForm } from '../../composables/form'

// Types
import type { ExtractPropTypes, ComputedRef, PropType, Ref } from 'vue'
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

export type FormControl = InstanceType<typeof FormControl>

export function filterFormControlProps (props: ExtractPropTypes<ReturnType<typeof makeFormControlProps>>) {
  return pick(props, Object.keys(FormControl.props) as any)
}

export const makeFormControlProps = propsFactory({
  appendIcon: String,
  prependIcon: String,
  label: String,
  labelId: String,
  labelWidth: [String, Number],
  hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
  hint: String,
  messages: {
    type: [Array, String],
    default: () => ([]),
  },
  persistentHint: Boolean,
  ...makeFormControlLayoutProps(),
  ...makeDensityProps(),
  ...makeValidationProps(),
}, 'form-control')

export const FormControl = genericComponent<new () => {
  $slots: FormControlSlots
}>()({
  name: 'VeFormControl',

  props: {
    focused: Boolean,
    ...makeFormControlProps(),
  },

  emits: {
    'click:prepend': (e: MouseEvent) => true,
    'click:label': (e: MouseEvent) => true,
    'click:append': (e: MouseEvent) => true,
  },

  setup (props, { slots, emit }) {
    const form = useForm()
    const computedProps = computed(() => {
      return {
        ...props,
        layout: form?.layout.value ?? props.layout,
        density: form?.density.value ?? props.density,
        labelWidth: form?.labelWidth.value ?? props.labelWidth,
      }
    })
    const { formControlLayoutClasses } = useFormControlLayoutProps(computedProps)
    const { densityClasses } = useDensity(computedProps)
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
            formControlLayoutClasses.value,
            densityClasses.value,
            validationClasses.value,
          ] }
        >
          { hasPrepend && (
            <div
              class="ve-form-control__prepend"
              onClick={ e => emit('click:prepend', e) }
            >
              { props.prependIcon && (
                <Icon icon={ props.prependIcon } />
              ) }

              { slots.prepend?.(slotProps.value) }
            </div>
          ) }

          { hasLabel && (
            <Label
              class="ve-form-control__label"
              disabled={ isDisabled.value }
              error={ isValid.value === false }
              onClick={ (e: any) => emit('click:label', e) }
              for={ props.labelId }
              style={ {
                width: convertToUnit(computedProps.value.labelWidth),
              } }
            >
              { props.label }

              { slots.label?.(slotProps.value) }
            </Label>
          ) }

          { slots.default?.({
            ...slotProps.value,
            props: {
              class: 've-form-control__control',
            }
          }) }

          { hasAppend && (
            <div
              class="ve-form-control__append"
              onClick={ e => emit('click:append', e) }
            >
              { props.appendIcon && (
                <Icon icon={ props.appendIcon } />
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
      computedProps
    }
  }
})