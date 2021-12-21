// Utils
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'
import { makeSelectionControlProps } from '../selection-control/selection-control'

export type Radio = InstanceType<typeof Radio>

export const Radio = defineComponent({
  name: 'VeRadio',

  inheritAttrs: false,

  props: {
    ...makeSelectionControlProps({
      type: 'radio',
      falseIcon: 'veno-ui:$radioOff',
      trueIcon: 'veno-ui:$radioOn',
      color: 'primary',
    } as const),
  },

  setup (props, { slots }) {
    return () => {
      return (
        <SelectionControl
          class="ve-radio"
          { ...props }
        >
          { slots }
        </SelectionControl>
      )
    }
  }
})