// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeIconSetProps } from '../../composables/icon/make-icon-props'

export const IconClass = defineComponent({
  name: 'VeIconClass',

  props: makeIconSetProps(),

  setup(props) {
    return () => {
      return <props.tag class={ props.icon as string | Object } />
    }
  },
})
