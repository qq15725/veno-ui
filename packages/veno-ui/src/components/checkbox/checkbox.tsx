// Styles
import './styles/checkbox.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'
import { makeSelectionControlProps } from '../selection-control/selection-control'

export const Checkbox = defineComponent({
  name: 'VeCheckbox',

  props: {
    ...makeSelectionControlProps({
      type: 'checkbox',
      falseIcon: 'veno-ui:$checkboxOff',
      trueIcon: 'veno-ui:$checkboxOn',
      color: 'primary',
    }),
  },

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots }) {
    return () => {
      return (
        <SelectionControl
          class="ve-checkbox"
          { ...props }
        >
          { { ...slots } }
        </SelectionControl>
      )
    }
  }
})