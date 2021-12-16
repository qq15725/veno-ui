// Styles
import './styles/input.scss'

// Utils
import { ref, computed } from 'vue'
import { genericComponent, filterInputAttrs, useRender, getUid, propsFactory, pick } from '../../utils'

// Components
import {
  FormItem,
  makeFormItemProps,
  filterFormItemProps,
} from '../form-item/form-item'
import {
  InputControl,
  makeInputControlProps,
  filterInputControlProps,
} from '../input-control/input-control'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { FormItemSlot } from '../form-item/form-item'
import type { InputControlSlot } from '../input-control/input-control'
import type { MakeSlots } from '../../utils'

const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month']

export const makeInputProps = propsFactory({
  id: String,
  autosize: Boolean,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  ...makeFormItemProps(),
  ...makeInputControlProps(),
}, 'input')

export function filterInputProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(Input.props))
}

export type Input = InstanceType<typeof Input>

export const Input = genericComponent<new () => {
  $slots: MakeSlots<{
    default: [InputControlSlot],
    prepend: [FormItemSlot],
    prependInner: [InputControlSlot],
    prefix: [InputControlSlot],
    suffix: [InputControlSlot],
    appendInner: [InputControlSlot],
    clear: [InputControlSlot],
    append: [FormItemSlot],
  }>
}>()({
  name: 'VeInput',

  inheritAttrs: false,

  props: makeInputProps(),

  emits: {
    'update:modelValue': (val: string) => true,
  },

  setup (props, { attrs, slots }) {
    const inputControlRef = ref<InputControl>()
    const model = useProxiedModel(props, 'modelValue')
    const uid = getUid()
    const id = computed(() => props.id || `ve-input-${ uid }`)
    const internalDirty = ref(false)
    const isDirty = computed(() => {
      return internalDirty.value || !!model.value || dirtyTypes.includes(props.type)
    })

    useRender(() => {
      const [formItemProps] = filterFormItemProps(props)
      const [formItemAttrs, restAttrs] = filterInputAttrs(attrs)
      const [inputControlProps] = filterInputControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          { ...formItemAttrs }
          class="ve-input"
          label-id={ id.value }
          v-slots={ {
            prepend: slots.prepend,
            control: () => (
              <InputControl
                { ...inputControlProps }
                ref={ inputControlRef }
                dirty={ !!model.value }
                active={ isDirty.value }
                onUpdate:active={ val => {
                  internalDirty.value = val
                } }
                onClick:clear={ e => {
                  e.stopPropagation()
                  model.value = ''
                } }
                onClick:control={ e => {
                  inputControlRef.value?.inputRef?.focus()
                } }
                v-slots={ {
                  prependInner: slots.prependInner,
                  prefix: slots.prefix,
                  default: ({ inputRef, focus, blur }) => (
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
                  ),
                  suffix: slots.suffix,
                  appendInner: slots.appendInner,
                  clear: slots.clear,
                } }
              />
            ),
            append: slots.append,
          } }
        />
      )
    })

    return {
      inputControlRef,
    }
  }
})