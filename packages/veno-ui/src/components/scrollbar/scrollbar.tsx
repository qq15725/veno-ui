// Styles
import './styles/scrollbar.scss'

// Utils
import { defineComponent } from 'vue'

export const Scrollbar = defineComponent({
  name: 'VeScrollbar',

  setup (props, { slots }) {
    return () => {
      return (
        <div class="ve-scrollbar">{ slots.default?.() }</div>
      )
    }
  }
})