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

const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month']

export type Input = InstanceType<typeof Input>

export const Input = genericComponent<new () => {
  $slots: MakeSlots<{
    default: [InputControlSlot],
    prepend: [],
    prependInner: [],
    prefix: [],
    suffix: [],
    appendInner: [],
    clear: [],
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
    ...makeInputControlProps(),
  },

  emits: {
    'update:modelValue': (val: string) => true,
  },

  setup (props, { attrs, slots, emit }) {
    const inputControlRef = ref<InputControl>()
    const model = useProxiedModel(props, 'modelValue')
    const uid = getUid()
    const id = computed(() => props.id || `input-${ uid }`)
    const internalDirty = ref(false)
    const isDirty = computed(() => {
      return internalDirty.value || !!model.value || dirtyTypes.includes(props.type)
    })

    useRender(() => {
      const [formItemProps] = filterFormItemProps(props)
      const [inputProps, restAttrs] = filterInputAttrs(attrs)
      const [inputControlProps] = filterInputControlProps(props)

      return (
        <FormItem
          { ...formItemProps }
          { ...inputProps }
          class="ve-input"
          labelId={ id.value }
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            control: () => {
              return (
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
                    suffix: slots.suffix,
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