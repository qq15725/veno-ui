// Styles
import './styles/label.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeThemeProps } from '../../composables/theme'

// Types
export type Label = InstanceType<typeof Label>

export const Label = defineComponent({
  name: 'VeLabel',

  props: {
    disabled: Boolean,
    error: Boolean,
    text: String,
    ...makeThemeProps(),
  },

  setup(props, { slots }) {
    return () => (
      <label
        className={ [
          've-label',
          {
            've-label--disabled': props.disabled,
            've-label--error': props.error,
          },
        ] }
      >
        { slots.default?.() ?? props.text }
      </label>
    )
  },
})
