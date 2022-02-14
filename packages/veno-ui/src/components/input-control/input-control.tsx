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
  isDirty: boolean
  isFocused: boolean
  inputRef: Ref<HTMLInputElement | undefined>
  controlRef: Ref<HTMLElement | undefined>
  blur: () => void
  focus: () => void
}

export type InputControlSlots = MakeSlots<{
  'prepend-inner': [InputControlSlot],
  prefix: [InputControlSlot],
  default: [InputControlSlot & { props: Record<string, unknown> }],
  suffix: [InputControlSlot],
  'append-inner': [InputControlSlot],
  clear: [InputControlSlot],
}>

export const makeInputControlProps = propsFactory({
  prependInnerIcon: String,
  prefix: String,
  prefixIcon: String,
  suffix: String,
  suffixIcon: String,
  clearable: Boolean,
  clearIcon: {
    type: String,
    default: '$clear',
  },
  appendInnerIcon: String,
  disabled: Boolean,
}, 'input-control')

export function filterInputControlProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(InputControl.props))
}

export function filterInputControlSlots (slots: Record<string, unknown>) {
  return pick(slots, InputControlSlots)
}

export const InputControlEmits = {
  'click:clear': (e: MouseEvent) => true,
  'click:prepend-inner': (e: MouseEvent) => true,
  'click:prefix': (e: MouseEvent) => true,
  'click:suffix': (e: MouseEvent) => true,
  'click:append-inner': (e: MouseEvent) => true,
  'click:control': (e: MouseEvent) => true,
  'update:active': (val: boolean) => true,
  'update:modelValue': (val: any) => true,
}

export const InputControlSlots = [
  'prepend-inner',
  'prefix',
  'default',
  'suffix',
  'append-inner',
  'clear'
]

export const InputControl = genericComponent<new () => {
  $slots: InputControlSlots
}>()({
  name: 'VeInputControl',

  props: {
    active: Boolean,
    dirty: Boolean,
    ...makeInputControlProps()
  },

  emits: InputControlEmits,

  setup (props, { slots, emit }) {
    const isActive = useProxiedModel(props, 'active')
    const isFocused = ref(false)
    const controlRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()

    watchEffect(() => isActive.value = isFocused.value || props.dirty)

    function focus () {
      isFocused.value = true
    }

    function blur () {
      isFocused.value = false
    }

    const slotProps = computed<InputControlSlot>(() => ({
      isActive: isActive.value,
      isDirty: props.dirty,
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
      const hasPrependInner = !!(props.prependInnerIcon || slots['prepend-inner'])
      const hasPrefix = !!(props.prefix || props.prefixIcon || slots.prefix)
      const hasClear = !!(props.clearable || slots.clear)
      const hasSuffix = !!(props.suffix || props.suffixIcon || slots.suffix)
      const hasAppendInner = !!(props.appendInnerIcon || slots['append-inner'])

      return (
        <div
          class={ [
            've-input-control',
            {
              've-input-control--active': isActive.value,
              've-input-control--disabled': props.disabled,
              've-input-control--dirty': props.dirty,
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
            >
              { slots['prepend-inner']?.(slotProps.value) }

              { props.prependInnerIcon && (
                <Icon
                  onClick={ (e: MouseEvent) => emit('click:prepend-inner', e) }
                  icon={ props.prependInnerIcon }
                />
              ) }
            </div>
          ) }

          <div class="ve-input-control__input">
            { hasPrefix && (
              <span
                class="ve-input-control__prefix"
              >
                { slots.prefix?.(slotProps.value) ?? props.prefix }

                { props.prefixIcon && (
                  <Icon
                    onClick={ (e: MouseEvent) => emit('click:prefix', e) }
                    icon={ props.prefixIcon }
                  />
                ) }
              </span>
            ) }

            { slots.default?.({
              ...slotProps.value,
              props: {
                class: 've-native-control',
              }
            }) }

            { hasClear && (
              <FadeTransition>
                <div
                  class="ve-input-control__clearable"
                  v-show={ props.dirty }
                >
                  { slots.clear?.(slotProps.value) ?? (
                    <Button
                      icon={ props.clearIcon }
                      onClick={ (e: MouseEvent) => emit('click:clear', e) }
                      variant="text"
                      shape="circle"
                      ripple={ false }
                    />
                  ) }
                </div>
              </FadeTransition>
            ) }

            { hasSuffix && (
              <span
                class="ve-input-control__suffix"
              >
                { props.suffixIcon && (
                  <Icon
                    onClick={ (e: MouseEvent) => emit('click:suffix', e) }
                    icon={ props.suffixIcon }
                  />
                ) }

                { slots.suffix?.(slotProps.value) ?? props.suffix }
              </span>
            ) }
          </div>

          { hasAppendInner && (
            <div
              class="ve-input-control__append-inner"
            >
              { props.appendInnerIcon && (
                <Icon
                  onClick={ (e: MouseEvent) => emit('click:append-inner', e) }
                  icon={ props.appendInnerIcon }
                />
              ) }

              { slots['append-inner']?.(slotProps.value) }
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

export type InputControl = InstanceType<typeof InputControl>