// Utils
import { reactive, computed } from 'vue'
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeFormProps, createForm } from '../../composables/form'
import { makeFormControlDirectionProps } from '../../composables/form-control-direction'
import { provideDefaults } from '../../composables/defaults'
import { makeDensityProps } from '../../composables/density'

// Types
import type { PropType } from 'vue'

export type Form = InstanceType<typeof Form>

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
    const form = createForm(props)

    const DefaultProps = reactive({
      density: computed(() => props.density),
      direction: computed(() => props.direction),
      labelWidth: computed(() => props.labelWidth),
      hideDetails: computed(() => props.hideDetails),
      readonly: computed(() => props.readonly),
      disabled: computed(() => props.disabled),
    })

    provideDefaults(reactive({
      defaults: {
        VeInput: DefaultProps,
        VeSelect: DefaultProps,
        VeRadioGroup: DefaultProps,
        VeCheckboxGroup: DefaultProps,
        VeSwitch: DefaultProps,
        VeFormControl: DefaultProps,
      }
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