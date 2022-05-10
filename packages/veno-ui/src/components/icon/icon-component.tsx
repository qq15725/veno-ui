// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeIconSetProps } from '../../composables/icon/make-icon-props'

export const IconComponent = defineComponent({
  name: 'VeIconComponent',

  props: makeIconSetProps(),

  setup (props) {
    return () => {
      return (
        <props.tag>
          <props.icon
            role="img"
            aria-hidden="true"
          />
        </props.tag>
      )
    }
  },
})