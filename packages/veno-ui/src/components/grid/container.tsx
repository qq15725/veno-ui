// Styles
import './styles/container.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

export type Container = InstanceType<typeof Container>

export const Container = genericComponent()({
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
        class={ [
          've-container',
          { 've-container--fluid': props.fluid },
        ] }
        v-slots={ slots }
      />
    )
  },
})
