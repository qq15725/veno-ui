// Styles
import './styles/anchor-item.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { Link } from '../link'

// Composables
import { makeNamedAnchorItem, useNamedAnchorItem } from '../../composables/named-anchor'

// Types
export type AnchorItem = InstanceType<typeof AnchorItem>

export const AnchorItem = defineComponent({
  name: 'VeAnchorItem',

  props: {
    ...makeNamedAnchorItem(),
  },

  setup (props, { slots }) {
    const { to, setCurrent, isActive, activeColor } = useNamedAnchorItem(props)

    return () => {
      return (
        <li
          class={ [
            've-anchor-item',
            {
              've-anchor-item--active': isActive.value,
            }
          ] }
        >
          <Link
            to={ to.value }
            underline={ false }
            color={ isActive.value ? activeColor.value : undefined }
            onClick={ () => props.name && setCurrent(props.name) }
            v-slots={ slots }
          />
        </li>
      )
    }
  }
})