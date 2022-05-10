// Utils
import { defineComponent } from '../../utils'

// Components
import { SelectionControl } from '../selection-control'

// Composables
import { makeSelectionControlProps } from '../selection-control/selection-control'

export const Radio = defineComponent({
  name: 'VeRadio',

  props: makeSelectionControlProps({
    type: 'radio',
    falseIcon: '$radioOff',
    trueIcon: '$radioOn',
    color: 'primary',
  } as const),

  emits: {
    'update:modelValue': (val: any) => true,
  },

  setup(props, { emit, slots }) {
    return () => {
      return (
        <SelectionControl
          class="ve-radio"
          { ...props }
          onUpdate:modelValue={ val => emit('update:modelValue', val) }
        >
          { slots }
        </SelectionControl>
      )
    }
  },
})

export type Radio = InstanceType<typeof Radio>
