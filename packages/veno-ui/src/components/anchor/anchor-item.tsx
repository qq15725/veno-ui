// Styles
import './styles/anchor-item.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { Link } from '../link'

// Composables
import { makeNamedAnchorItem, useNamedAnchorItem } from '../../composables/named-anchor'

export const AnchorItem = defineComponent({
  name: 'VeAnchorItem',

  props: {
    /**
     * @zh 激活时的颜色
     */
    activeColor: {
      type: String,
      default: 'primary',
    },

    ...makeNamedAnchorItem(),
  },

  setup (props, { slots }) {
    const { to, activate, isActive } = useNamedAnchorItem(props)

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
            color={ isActive.value ? props.activeColor : undefined }
            onClick={ (e: MouseEvent) => {
              e.preventDefault()
              e.stopPropagation()
              activate(props.name)
            } }
          >
            { slots }
          </Link>
        </li>
      )
    }
  }
})

export type AnchorItem = InstanceType<typeof AnchorItem>