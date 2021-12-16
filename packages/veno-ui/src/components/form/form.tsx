// Utils
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeFormProps, createForm } from '../../composables/form'

// Types
export type Form = InstanceType<typeof Form>

export const Form = defineComponent({
  name: 'VeForm',

  props: {
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