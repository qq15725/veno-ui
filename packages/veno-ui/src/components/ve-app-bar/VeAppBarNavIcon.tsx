// Utils
import { defineComponent } from 'vue'

// Components
import { VeButton } from '../../components/ve-button'

export default defineComponent({
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
