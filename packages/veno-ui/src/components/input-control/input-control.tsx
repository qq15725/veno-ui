// Styles
import './styles/input-control.scss'

// Utils
import { computed, ref, watchEffect } from 'vue'
import { genericComponent, pick, propsFactory, useRender } from '../../utils'

// Components
import { Icon } from '../icon'
import { Button } from '../button'

// Composables
import { genOverlays, makeVariantProps, useVariant } from '../../composables/variant'
import { makeShapeProps, useShape } from '../../composables/shape'
import { useProxiedModel } from '../../composables/proxied-model'

// Types
import type { Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export interface InputControlSlot {
  isActive: boolean
  isDirty: boolean
  isFocused: boolean
  inputRef: Ref<HTMLInputElement | undefined>
  controlRef: Ref<HTMLElement | undefined>
  blur: () => void
  focus: () => void
}

export type InputControlDefaultSlot = InputControlSlot & { props: Record<string, unknown> }

export type InputControlSlots = MakeSlots<{
  'prepend-inner': [InputControlSlot]
  prefix: [InputControlSlot]
  default: [InputControlDefaultSlot]
  suffix: [InputControlSlot]
  'append-inner': [InputControlSlot]
  clear: [InputControlSlot]
}>

export const makeInputControlProps = propsFactory({
  /**
   * @zh 后置内联图标
   */
  appendInnerIcon: [String, Object],

  /**
   * @zh 是否可清除
   */
  clearable: Boolean,

  /**
   * @zh 清除图标
   */
  clearIcon: {
    type: [String, Object],
    default: '$clear',
  },

  /**
   * @zh 是否禁用
   */
  disabled: Boolean,

  /**
   * @zh 前置内联图标
   */
  prependInnerIcon: [String, Object],

  /**
   * @zh 前缀
   */
  prefix: String,

  /**
   * @zh 前缀图标
   */
  prefixIcon: [String, Object],

  /**
   * @zh 后缀
   */
  suffix: String,

  /**
   * @zh 后缀图标
   */
  suffixIcon: [String, Object],
  ...makeVariantProps({
    variant: 'contained',
  } as const),
  ...makeShapeProps({
    shape: 'rounded-sm',
  } as const),
}, 'input-control')

export function filterInputControlProps(attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(InputControl.props))
}

export function filterInputControlSlots(slots: Record<string, unknown>) {
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
  'clear',
]

export const InputControl = genericComponent<new () => {
  $slots: InputControlSlots
}>()({
  name: 'VeInputControl',

  props: {
    active: Boolean,
    dirty: Boolean,
    ...makeInputControlProps(),
  },

  emits: InputControlEmits,

  setup(props, { slots, emit }) {
    const isActive = useProxiedModel(props, 'active')
    const isFocused = ref(false)
    const controlRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()
    const { variantClasses, colorClasses, colorStyles } = useVariant(props)
    const { shapeClasses } = useShape(props)

    watchEffect(() => isActive.value = isFocused.value || props.dirty)

    function focus() {
      isFocused.value = true
    }

    function blur() {
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

    function onClick(e: MouseEvent) {
      if (e.target !== document.activeElement) {
        e.preventDefault()
      }

      emit('click:control', e)
    }

    useRender(() => {
      const hasPrependInner = !!(props.prependInnerIcon || slots['prepend-inner'])
      const hasPrefix = !!(props.prefix || props.prefixIcon || slots.prefix)
      const hasSuffix = !!(props.suffix || props.suffixIcon || slots.suffix)
      const hasClear = !!(props.clearable || slots.clear)
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
              've-input-control--suffixed': hasSuffix,
              've-input-control--appended': hasClear || hasAppendInner,
            },
            colorClasses.value,
            variantClasses.value,
            shapeClasses.value,
          ] }
          style={ colorStyles.value }
          onClick={ onClick }
        >
          { genOverlays(false, 've-input-control') }

          { hasPrependInner && (
            <div class="ve-input-control__prepend-inner">
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
              <span class="ve-input-control__prefix">
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
              },
            }) }

            { hasSuffix && (
              <span class="ve-input-control__suffix">
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

          { hasClear && (
            <div
              class={ [
                've-input-control__clearable',
                { 've-input-control__clearable--has-append-inner': hasAppendInner },
              ] }
            >
              { slots.clear?.(slotProps.value) ?? (
                <Button
                  icon={ props.clearIcon }
                  ripple={ false }
                  shape="circle"
                  size="1em"
                  onClick={ (e: MouseEvent) => emit('click:clear', e) }
                  variant="text"
                />
              ) }
            </div>
          ) }

          { hasAppendInner && (
            <div class="ve-input-control__append-inner">
              { props.appendInnerIcon && (
                <Icon
                  icon={ props.appendInnerIcon }
                  onClick={ (e: MouseEvent) => emit('click:append-inner', e) }
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
  },
})

export type InputControl = InstanceType<typeof InputControl>
