// Styles
import './styles/input.scss'

// Utils
import { genericComponent, filterInputAttrs, MakeSlots } from '../../utils'

// Components
import {
  FormItem,
  makeFormItemProps,
  filterFormItemProps,
} from '../form/form-item'
import {
  InputControl,
  makeInputControlProps,
  filterInputControlProps,
} from '../input-control/input-control'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import { InputControlSlot } from '../input-control/input-control'

export type Input = InstanceType<typeof Input>

export const Input = genericComponent<new () => {
  $slots: MakeSlots<{
    default: [InputControlSlot],
    prependInner: [],
    appendInner: [],
    clear: [],
    prepend: [],
    append: [],
  }>
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
    ...makeFormItemProps(),
    ...makeInputControlProps(),
  },

  emits: {
    'update:modelValue': (val: string) => true,
    'click:control': (e: MouseEvent) => true,
  },

  setup (props, { attrs, slots, emit }) {
    const model = useProxiedModel(props, 'modelValue')

    return () => {
      const [formItemProps] = filterFormItemProps(props)
      const [inputProps, restAttrs] = filterInputAttrs(attrs)
      const [inputControlProps] = filterInputControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: () => {
              return (
                <InputControl
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
                          class={ [
                            've-input',
                            {
                              've-input--readonly': props.readonly,
                            },
                          ] }
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
          } }
        />
      )
    }
  }
})