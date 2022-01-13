// Utils
import { defineComponent } from '../../utils'

// Components
import { ListItem } from '../../components/list'

// Composables
import { makeNamedAnchorItem, useNamedAnchorItem } from '../../composables/named-anchor'

export const AnchorItem = defineComponent({
  name: 'VeAnchorItem',

  props: {
    ...makeNamedAnchorItem(),
  },

  setup (props, { slots }) {
    const { setCurrent, isActive } = useNamedAnchorItem(props)

    return () => {
      return (
        <ListItem
          class={ [
            've-anchor-item',
          ] }
          active={ isActive.value }
          onClick={ () => props.name && setCurrent(props.name) }
          v-slots={ slots }
        />
      )
    }
  }
})