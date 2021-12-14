// Styles
import './styles/input-control.scss'

// Utils
import { ref, computed, watchEffect } from 'vue'
import { genericComponent, propsFactory, pick, useRender } from '../../utils'

// Components
import { FadeTransition } from '../transition'
import { Icon } from '../icon'
import { Button } from '../button'

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
  prefix: [InputControlSlot],
  suffix: [InputControlSlot],
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
  prefix: String,
  prefixIcon: String,
  suffix: String,
  suffixIcon: String,
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
    'click:prefix': (e: MouseEvent) => true,
    'click:suffix': (e: MouseEvent) => true,
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
      const hasPrependInner = !!slots.prependInner
      const hasPrefix = slots.prefix || props.prefix || props.prefixIcon
      const hasClear = !!(props.clearable || slots.clear)
      const hasSuffix = slots.suffix || props.suffix || props.suffixIcon
      const hasAppendInner = !!slots.appendInner

      return (
        <div
          class={ [
            've-input-control',
            {
              've-input-control--active': isActive.value,
              've-input-control--focused': isFocused.value,
              've-input-control--prepended': hasPrependInner,
              've-input-control--prefixed': hasPrefix,
              've-input-control--suffixed': hasClear || hasSuffix,
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
            { hasPrefix && (
              <div
                class="ve-input-control__prefix"
                onClick={ e => emit('click:prefix', e) }
              >
                { slots.prefix?.(slotProps.value) ?? props.prefix ?? (
                  <Icon icon={ props.prefixIcon } />
                ) }
              </div>
            ) }

            { slots.default?.(slotProps.value) }

            { hasClear && (
              <FadeTransition>
                <div
                  class="ve-input-control__clearable"
                  onClick={ (e: Event) => emit('click:clear', e) }
                >
                  {/*v-show={ isActive.value }*/}
                  { slots.clear?.(slotProps.value) ?? (
                    <Button
                      icon={ props.clearIcon }
                      color="transparent"
                    />
                  ) }
                </div>
              </FadeTransition>
            ) }

            { hasSuffix && (
              <div
                class="ve-input-control__suffix"
                onClick={ e => emit('click:suffix', e) }
              >
                { slots.suffix?.(slotProps.value) ?? props.suffix ?? (
                  <Icon icon={ props.suffixIcon } />
                ) }
              </div>
            ) }
          </div>

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