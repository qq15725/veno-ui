// Styles
import './styles/ve-container.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

export const VeContainer = genericComponent()({
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

export type VeContainer = InstanceType<typeof VeContainer>
