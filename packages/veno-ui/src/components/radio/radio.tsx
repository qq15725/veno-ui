// Styles
import './styles/radio.scss'

// Utils
import { defineComponent } from 'vue'

// Components
import {
  SelectionControl,
  makeSelectionControlProps
} from '../selection-control/selection-control'

export type Radio = InstanceType<typeof Radio>

export const Radio = defineComponent({
  name: 'Radio',

  inheritAttrs: false,

  props: {
    ...makeSelectionControlProps({
      falseIcon: 'veno-ui:$radioOff',
      trueIcon: 'veno-ui:$radioOn',
    }),
  },

  setup (props, { slots }) {
    return () => {
      return (
        <SelectionControl
          { ...props }
          class="ve-radio"
          type="radio"
          v-slots={ slots }
        />
      )
    }
  }
})