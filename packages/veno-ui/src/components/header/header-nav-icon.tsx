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
    }
  },

  setup (props, { slots }) {
    return () => (
      <Button
        class="ve-header-nav-icon"
        icon={ props.icon }
        v-slots={ slots }
      />
    )
  },
})
