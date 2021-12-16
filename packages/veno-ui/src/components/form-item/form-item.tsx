// Styles
import './styles/form-item.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, propsFactory, pick, convertToUnit } from '../../utils'

// Components
import { Label } from '../label'
import { Icon } from '../icon'

// Composables
import { makeDensityProps, useDensity } from '../../composables/density'
import { makeValidationProps, useValidation } from '../../composables/validation'
import { makeFormItemLayoutProps, useFormItemLayoutProps } from '../../composables/form-item-layout'
import { useForm } from '../../composables/form'

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
  label: String,
  labelId: String,
  labelWidth: [String, Number],
  hideDetails: Boolean,
  ...makeFormItemLayoutProps(),
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
    'click:label': (e: MouseEvent) => true,
    'click:prepend-inner': (e: MouseEvent) => true,
    'click:control': (e: MouseEvent) => true,
    'click:append-inner': (e: MouseEvent) => true,
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
    const { formItemLayoutClasses } = useFormItemLayoutProps(computedProps, 've-form-item')
    const { densityClasses } = useDensity(computedProps, 've-form-item')
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
      const hasPrepend = !!(slots.prepend || props.prependIcon)
      const hasLabel = !!(slots.label || props.label)
      const hasControl = !!slots.control
      const hasPrependInner = !!slots.prependInner
      const hasDefault = !!slots.default
      const hasAppendInner = !!slots.appendInner
      const hasDefaultControl = !hasControl && (hasPrependInner || hasDefault || hasAppendInner)
      const hasAppend = !!(slots.append || props.appendIcon)
      const hasDetails = !props.hideDetails

      return (
        <div
          class={ [
            've-form-item',
            formItemLayoutClasses.value,
            densityClasses.value,
            validationClasses.value,
          ] }
        >
          { hasPrepend && (
            <div
              class="ve-form-item__prepend"
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
              class="ve-form-item__label"
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
              { props.appendIcon && (
                <Icon icon={ props.appendIcon } />
              ) }

              { slots?.append?.(slotProps.value) }
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