// Utils
import { genericComponent } from '../../utils'

// Components
import { VeButton } from '../../components/ve-button'

export const VeAppBarNavIcon = genericComponent()({
  name: 'VeAppBarNavIcon',

  props: {
    icon: {
      type: String,
      default: 'veno-ui:$menu',
    },
    size: {
      type: String,
      default: 'xl',
    }
  },

  setup (props, { attrs, slots }) {
    return () => (
      <VeButton
        class="ve-app-bar-nav-icon"
        icon={ props.icon }
        size={ props.size }
        slots={ slots }
        { ...attrs }
      />
    )
  },
})
