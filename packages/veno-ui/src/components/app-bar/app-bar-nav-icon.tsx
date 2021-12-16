// Utils
import { genericComponent } from '../../utils'

// Components
import { Button } from '../../components/button'

export const AppBarNavIcon = genericComponent()({
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
      <Button
        class="ve-app-bar-nav-icon"
        icon={ props.icon }
        size={ props.size }
        slots={ slots }
        { ...attrs }
      />
    )
  },
})
