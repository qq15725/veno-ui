// Utils
import { genericComponent } from '../../utils'

// Components
import { Input } from '../input'

// Composables
import { makeInputProps, InputEmits } from '../input/input'

// Types
import { InputSlots } from '../input/input'

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
  }
})