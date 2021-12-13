// Styles
import './styles/input-control.scss'

// Utils
import { ref, computed, watchEffect } from 'vue'
import { genericComponent, propsFactory, pick, useRender } from '../../utils'

// Components
import { FadeTransition } from '../transition'
import { Icon } from '../icon'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export interface InputControlSlot
{
  isActive: boolean
  isFocused: boolean
  inputRef: Ref<HTMLInputElement | undefined>
  controlRef: Ref<HTMLElement | undefined>
  blur: () => void
  focus: () => void
}

export type InputControlSlots = MakeSlots<{
  prependInner: [InputControlSlot],
  appendInner: [InputControlSlot],
  clear: [InputControlSlot],
  default: [InputControlSlot],
}>

export type InputControl = InstanceType<typeof InputControl>

export function filterInputControlProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(InputControl.props))
}

export const makeInputControlProps = propsFactory({
  active: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: String,
    default: 'veno-ui:$clear',
  },
}, 'input-control')

export const InputControl = genericComponent<new () => {
  $slots: InputControlSlots
}>()({
  name: 'InputControl',

  props: makeInputControlProps(),

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
    const isFocused = ref(false)
    const controlRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()

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
      controlRef,
      inputRef,
      focus,
      blur,
    }))

    function onClick (e: MouseEvent) {
      if (e.target !== document.activeElement) {
        e.preventDefault()
      }

      emit('click:control', e)
    }

    useRender(() => {
      const hasPrependInner = (slots.prependInner)
      const hasClear = !!(props.clearable || slots.clear)
      const hasAppendInner = !!(slots.appendInner || hasClear)

      return (
        <div
          class={ [
            've-input-control',
            {
              've-input-control--active': isActive.value,
              've-input-control--focused': isFocused.value,
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
              { slots.prependInner?.(slotProps.value) }
            </div>
          ) }

          <div class="ve-input-control__input">
            { slots.default?.(slotProps.value) }
          </div>

          { hasClear && (
            <FadeTransition>
              <div
                class="ve-input-control__clearable"
                onClick={ (e: Event) => emit('click:clear', e) }
                v-show={ isActive.value }
              >
                { slots.clear
                  ? slots.clear(slotProps.value)
                  : <Icon icon={ props.clearIcon } />
                }
              </div>
            </FadeTransition>
          ) }

          { hasAppendInner && (
            <div
              class="ve-input-control__append-inner"
              onClick={ e => emit('click:append-inner', e) }
            >
              { slots.appendInner?.(slotProps.value) }
            </div>
          ) }
        </div>
      )
    })

    return {
      inputRef,
      controlRef,
    }
  }
})