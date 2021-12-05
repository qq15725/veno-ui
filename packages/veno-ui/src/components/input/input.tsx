// Styles
import './styles/input.scss'

// Utils
import { genericComponent, filterInputAttrs } from '../../utils'

// Components
import { InputControl, makeInputControlProps, filterInputControlProps } from '../input-control/input-control'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import { InputControlSlots } from '../input-control/input-control'

export type Input = InstanceType<typeof Input>

export const Input = genericComponent<new () => {
  $slots: InputControlSlots
}>()({
  name: 'Input',

  inheritAttrs: false,

  props: {
    modelValue: [String, Number],
    textarea: Boolean,
    autosize: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    readonly: Boolean,
    ...makeInputControlProps(),
  },

  emits: {
    'update:modelValue': (val: string) => true,
    'click:control': (e: MouseEvent) => true,
  },

  setup (props, { attrs, slots, emit }) {
    const model = useProxiedModel(props, 'modelValue')
    const [inputProps, restAttrs] = filterInputAttrs(attrs)
    const [inputControlProps] = filterInputControlProps(props)

    return () => {
      return (
        <InputControl
          class={ [
            've-input',
            {
              've-input--readonly': props.readonly,
            },
          ] }
          onClick:clear={ e => {
            e.stopPropagation()
            model.value = ''
          } }
          onClick:control={ (e: MouseEvent) => {
            emit('click:control', e)
          } }
          { ...inputProps }
          { ...inputControlProps }
          v-slots={ {
            ...slots,
            default: ({ inputRef, focus, blur }) => {
              return (
                <input
                  ref={ inputRef }
                  class="ve-input__el"
                  v-model={ model.value }
                  type={ props.type }
                  placeholder={ props.placeholder }
                  readonly={ props.readonly }
                  disabled={ props.disabled }
                  onFocus={ focus }
                  onBlur={ blur }
                  { ...restAttrs }
                />
              )
            }
          } }
        />
      )
    }
  }
})