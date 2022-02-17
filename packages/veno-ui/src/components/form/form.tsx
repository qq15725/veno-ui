// Styles
import './styles/form.scss'

// Utils
import { toRef } from 'vue'
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeDensityProps } from '../../composables/density'
import { makeFormProps, provideForm } from '../../composables/form'
import { makeFormControlDirectionProps, useFormControlDirectionProps } from '../../composables/form-control-direction'
import { makeVariantProps } from '../../composables/variant'
import { provideDefaults } from '../../composables/defaults'

// Types
import type { PropType } from 'vue'

export const Form = defineComponent({
  name: 'VeForm',

  props: {
    labelWidth: [Number, String],
    hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
    ...makeDensityProps(),
    ...makeFormProps(),
    ...makeFormControlDirectionProps(),
    ...makeVariantProps(),
  },

  emits: {
    'update:modelValue': (val: boolean | null) => true,
    resetValidation: () => true,
    reset: (e: Event) => true,
    submit: (e: Event) => true,
  },

  setup (props, { slots }) {
    const form = provideForm(props)

    const { formControlDirectionClasses } = useFormControlDirectionProps(props)

    const defaults = {
      variant: toRef(props, 'variant'),
      density: toRef(props, 'density'),
      direction: toRef(props, 'direction'),
      labelWidth: toRef(props, 'labelWidth'),
      hideDetails: toRef(props, 'hideDetails'),
      readonly: toRef(props, 'readonly'),
      disabled: toRef(props, 'disabled'),
    }

    provideDefaults({
      // input control
      VeInput: defaults,
      VeSelect: defaults,
      // select control
      VeRadioGroup: defaults,
      VeCheckboxGroup: defaults,
      VeSwitch: defaults,
      // form control
      VeFormControl: defaults,
      // button
      VeButton: {
        density: defaults.density,
        disabled: defaults.disabled,
      },
    })

    useRender(() => {
      return (
        <form
          class={ [
            've-form',
            formControlDirectionClasses.value,
          ] }
          novalidate
          onReset={ form.reset }
          onSubmit={ form.submit }
        >
          { slots.default?.(form) }
        </form>
      )
    })

    return form
  }
})

export type Form = InstanceType<typeof Form>