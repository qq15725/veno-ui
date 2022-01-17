// Utils
import { defineComponent } from '../../utils'

// Components
import { Button } from '../../components/button'

export const HeaderNavIcon = defineComponent({
  name: 'VeHeaderNavIcon',

  props: {
    icon: {
      type: String,
      default: 'veno-ui:$menu',
    },
    size: {
      type: String,
      default: 'md',
    }
  },

  setup (props, { slots }) {
    return () => (
      <Button
        class="ve-header-nav-icon"
        icon={ props.icon }
        size={ props.size }
        v-slots={ slots }
      />
    )
  },
})
