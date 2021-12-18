// Styles
import './styles/input.scss'

// Utils
import { ref, computed } from 'vue'
import { genericComponent, filterInputAttrs, useRender, getUid, propsFactory, pick } from '../../utils'

// Components
import { FormControl } from '../form-control'
import { makeFormControlProps, filterFormControlProps } from '../form-control/form-control'
import { InputControl } from '../input-control'
import { makeInputControlProps, filterInputControlProps } from '../input-control/input-control'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { FormControlSlot } from '../form-control/form-control'
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
  ...makeFormControlProps(),
  ...makeInputControlProps(),
}, 'input')

export function filterInputProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(Input.props))
}

export type Input = InstanceType<typeof Input>

export const Input = genericComponent<new () => {
  $slots: MakeSlots<{
    default: [InputControlSlot],
    prepend: [FormControlSlot],
    prependInner: [InputControlSlot],
    prefix: [InputControlSlot],
    suffix: [InputControlSlot],
    appendInner: [InputControlSlot],
    clear: [InputControlSlot],
    append: [FormControlSlot],
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
      const [formControlAttrs, restAttrs] = filterInputAttrs(attrs)
      const [formControlProps] = filterFormControlProps(props)
      const [inputControlProps] = filterInputControlProps(props)

      return (
        <FormControl
          class="ve-input"
          label-id={ id.value }
          { ...formControlProps }
          { ...formControlAttrs }
          v-slots={ {
            prepend: slots.prepend,
            default: ({ isDisabled, isReadonly, props: formControlProps }) => (
              <InputControl
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
                { ...formControlProps }
                { ...inputControlProps }
                v-slots={ {
                  prependInner: slots.prependInner,
                  prefix: slots.prefix,
                  default: ({ inputRef, focus, blur, props: nativeControlProps }) => (
                    <input
                      ref={ inputRef }
                      v-model={ model.value }
                      id={ id.value }
                      type={ props.type }
                      placeholder={ props.placeholder }
                      readonly={ isReadonly.value }
                      disabled={ isDisabled.value }
                      onFocus={ focus }
                      onBlur={ blur }
                      { ...nativeControlProps }
                      { ...restAttrs }
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