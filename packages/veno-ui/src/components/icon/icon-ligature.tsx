// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeIconSetProps } from '../../composables/icon/make-icon-props'

export const IconLigature = defineComponent({
  name: 'VeIconLigature',

  props: makeIconSetProps(),

  setup(props) {
    return () => {
      return <props.tag>{ props.icon as string }</props.tag>
    }
  },
})
