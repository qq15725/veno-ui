// Styles
import './styles/button-group.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { useGroup } from '../../composables/group'

// Symbols
export const ButtonGroupSymbol = Symbol.for('veno-ui:button-group')

export const ButtonGroup = defineComponent({
  name: 'ButtonGroup',

  props: {
    //
  },

  setup (props, { slots }) {
    useGroup({}, ButtonGroupSymbol)

    return () => {
      return (
        <div class="ve-button-group">
          { slots.default?.() }
        </div>
      )
    }
  }
})