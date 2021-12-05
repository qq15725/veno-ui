// Styles
import './styles/input-control.scss'

// Utils
import { ref, computed, watchEffect } from 'vue'
import { genericComponent, propsFactory, pick } from '../../utils'

// Components
import { InputWrapper, makeInputWrapperProps } from '../input-wrapper/input-wrapper'
import { ScaleTransition } from '../transition'
import { Icon } from '../icon'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
export const makeInputControlProps = propsFactory({
  clearable: Boolean,
  clearIcon: {
    type: String,
    default: 'veno-ui:$clear',
  },
  ...makeInputWrapperProps(),
}, 'input-control')

// Types
import type { Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export interface InputControlSlot {
  isActive: boolean
  isFocused: boolean
  inputRef: Ref<HTMLInputElement | undefined>
  controlRef: Ref<HTMLElement | undefined>
  blur: () => void
  focus: () => void
}

export type InputControlSlots = MakeSlots<{
  prepend: [],
  prependInner: [],
  append: [],
  appendInner: [],
  clear: [],
  default: [InputControlSlot],
}>

export type InputControl = InstanceType<typeof InputControl>

export function filterInputControlProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(InputControl.props))
}

export const InputControl = genericComponent<new () => {
  $slots: InputControlSlots
}>()({
  name: 'InputControl',

  props: {
    active: Boolean,
    ...makeInputControlProps(),
  },

  emits: {
    'click:clear': (e: Event) => true,
    'click:prepend-inner': (e: MouseEvent) => true,
    'click:append-inner': (e: MouseEvent) => true,
    'click:control': (e: MouseEvent) => true,
    'update:active': (active: boolean) => true,
    'update:modelValue': (val: any) => true,
  },

  setup (props, { slots, emit }) {
    const isActive = useProxiedModel(props, 'active')
    const controlRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()
    const isFocused = ref(false)

    watchEffect(() => isActive.value = isFocused.value)

    function focus () {
      isFocused.value = true
    }

    function blur () {
      isFocused.value = false
    }

    const slotProps = computed<InputControlSlot>(() => ({
      isActive: isActive.value,
      isFocused: isFocused.value,
      inputRef,
      controlRef,
      blur,
      focus,
    }))

    function onClick (e: MouseEvent) {
      if (e.target !== document.activeElement) {
        e.preventDefault()
      }

      emit('click:control', e)
    }

    return () => {
      const hasPrependInner = (slots.prependInner)
      const hasClear = !!(props.clearable || slots.clear)
      const hasAppendInner = !!(slots.appendInner || hasClear)

      return (
        <InputWrapper
          v-slots={ {
            prepend: slots.prepend,
            append: slots.append,
            default: () => {
              return (
                <div
                  class={ [
                    've-input-control',
                    {
                      've-input-control--active': isActive.value,
                      've-input-control--prepended': hasPrependInner,
                      've-input-control--appended': hasAppendInner,
                    },
                  ] }
                  onClick={ onClick }
                >
                  { hasPrependInner && (
                    <div
                      class="ve-input-control__prepend-inner"
                      onClick={ e => emit('click:prepend-inner', e) }
                    >
                      { slots.prependInner?.() }
                    </div>
                  ) }

                  <div class="ve-input-control__input">
                    { slots.default?.({
                      ...slotProps.value,
                    }) }
                  </div>

                  { hasClear && (
                    <ScaleTransition>
                      <div
                        class="ve-input-control__clearable"
                        onClick={ (e: Event) => emit('click:clear', e) }
                        v-show={ isActive.value }
                      >
                        { slots.clear
                          ? slots.clear()
                          : <Icon icon={ props.clearIcon } />
                        }
                      </div>
                    </ScaleTransition>
                  ) }

                  { hasAppendInner && (
                    <div
                      class="ve-input-control__append-inner"
                      onClick={ e => emit('click:append-inner', e) }
                    >
                      { slots.appendInner?.() }
                    </div>
                  ) }
                </div>
              )
            }
          } }
        />
      )
    }
  }
})