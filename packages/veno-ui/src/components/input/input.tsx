// Styles
import './styles/input.scss'

// Utils
import { ref, computed } from 'vue'
import { genericComponent, filterInputAttrs, useRender, getUid } from '../../utils'

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
import type { InputControlSlot } from '../input-control/input-control'
import type { MakeSlots } from '../../utils'

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
    id: String,
    autosize: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    ...makeFormItemProps(),
    ...makeInputControlProps({
      active: undefined
    } as const),
  },

  emits: {
    'click:control': (e: MouseEvent) => true,
    'update:active': (active: boolean) => true,
    'update:modelValue': (val: string) => true,
  },

  setup (props, { attrs, slots, emit }) {
    const inputControlRef = ref<InputControl>()
    const model = useProxiedModel(props, 'modelValue')
    const uid = getUid()
    const id = computed(() => props.id || `input-${ uid }`)

    useRender(() => {
      const [formItemProps] = filterFormItemProps(props)
      const [inputProps, restAttrs] = filterInputAttrs(attrs)
      const [inputControlProps] = filterInputControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          class="ve-input"
          labelId={ id.value }
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: () => {
              return (
                <InputControl
                  { ...inputProps }
                  { ...inputControlProps }
                  ref={ inputControlRef }
                  onClick:clear={ e => {
                    e.stopPropagation()
                    model.value = ''
                  } }
                  onClick:control={ (e: MouseEvent) => emit('click:control', e) }
                  onUpdate:active={ (active: boolean) => emit('update:active', active) }
                  v-slots={ {
                    prependInner: slots.prependInner,
                    appendInner: slots.appendInner,
                    clear: slots.clear,
                    default: ({ inputRef, focus, blur }) => {
                      return (
                        <input
                          { ...restAttrs }
                          ref={ inputRef }
                          v-model={ model.value }
                          id={ id.value }
                          type={ props.type }
                          placeholder={ props.placeholder }
                          readonly={ props.readonly }
                          disabled={ props.disabled }
                          onFocus={ focus }
                          onBlur={ blur }
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
    })

    return {
      inputControlRef,
    }
  }
})