// Utils
import { genericComponent } from '../../utils'

// Components
import { Input } from '../input'

// Composables
import { InputEmits, makeInputProps } from '../input/input'

// Types
import type { InputSlots } from '../input/input'

export const Textarea = genericComponent<new () => {
  $slots: InputSlots
}>()({
  name: 'Textarea',

  props: makeInputProps({
    type: 'textarea',
  }),

  emit: InputEmits,

  setup(props) {
    return () => {
      return (
        <Input { ...props } />
      )
    }
  },
})
