// Utils
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'

// Composables
import { makeSelectionControlProps } from '../selection-control/selection-control'

export const Checkbox = defineComponent({
  name: 'VeCheckbox',

  props: makeSelectionControlProps({
    type: 'checkbox',
    falseIcon: '$checkboxOff',
    trueIcon: '$checkboxOn',
    color: 'primary',
  }),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup (props, { emit, slots }) {
    return () => {
      return (
        <SelectionControl
          class="ve-checkbox"
          { ...props }
          onUpdate:modelValue={ val => emit('update:modelValue', val) }
        >
          { slots }
        </SelectionControl>
      )
    }
  }
})