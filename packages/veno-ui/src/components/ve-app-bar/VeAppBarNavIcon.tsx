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
  },

  setup (props, { slots }) {
    return () => (
      <VeButton
        class="ve-app-bar-nav-icon"
        icon={ props.icon }
      >
        { slots.default?.() }
      </VeButton>
    )
  },
})
