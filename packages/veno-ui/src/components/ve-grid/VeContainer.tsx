// Styles
import './styles/ve-container.scss'

// Composables
import { makeTagProps } from '../../composables/tag'

// Utilities
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VeContainer',

  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    return () => (
      <props.tag
        class={[
          've-container',
          { 've-container--fluid': props.fluid },
        ]}
        v-slots={ slots }
      />
    )
  },
})
