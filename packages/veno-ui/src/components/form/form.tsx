// Utils
import { reactive, toRef } from 'vue'
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeFormProps, provideForm } from '../../composables/form'
import { makeFormControlDirectionProps } from '../../composables/form-control-direction'
import { provideDefaults } from '../../composables/defaults'
import { makeDensityProps } from '../../composables/density'

// Types
import type { PropType } from 'vue'

export const Form = defineComponent({
  name: 'VeForm',

  props: {
    labelWidth: [Number, String],
    hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
    ...makeFormControlDirectionProps(),
    ...makeDensityProps(),
    ...makeFormProps()
  },

  emits: {
    'update:modelValue': (val: boolean | null) => true,
    resetValidation: () => true,
    reset: (e: Event) => true,
    submit: (e: Event) => true,
  },

  setup (props, { slots }) {
    const form = provideForm(props)

    const defaults = reactive({
      density: toRef(props, 'density'),
      direction: toRef(props, 'direction'),
      labelWidth: toRef(props, 'labelWidth'),
      hideDetails: toRef(props, 'hideDetails'),
      readonly: toRef(props, 'readonly'),
      disabled: toRef(props, 'disabled'),
    })

    provideDefaults(reactive({
      VeInput: defaults,
      VeSelect: defaults,
      VeRadioGroup: defaults,
      VeCheckboxGroup: defaults,
      VeSwitch: defaults,
      VeFormControl: defaults,
    }))

    useRender(() => {
      return (
        <form
          class="ve-form"
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