// Styles
import './styles/overlay.scss'

// Utils
import { computed, mergeProps, ref, toHandlers, toRef, watch, Teleport, Transition } from 'vue'
import { convertToUnit, genericComponent, getScrollParent, standardEasing, useRender } from '../../utils'

// Composables
import { makeActivatorProps, useActivator } from '../../composables/activator'
import { makePositionStrategyProps, usePositionStrategy } from '../../composables/position-strategy'
import { makeScrollStrategyProps, useScrollStrategy } from '../../composables/scroll-strategy'
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useBackButton } from '../../composables/router'
import { useBackgroundColor } from '../../composables/color'
import { useProxiedModel } from '../../composables/proxied-model'
import { useTeleport } from '../../composables/teleport'
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeLazyProps, useLazy } from '../../composables/lazy'
import { useStack } from '../../composables/stack'

// Directives
import { ClickOutside } from '../../directives/click-outside'

// Types
import type { PropType, Ref, ComponentPublicInstance } from 'vue'
import type { MakeSlots } from '../../utils'
import type { BackgroundColorData } from '../../composables/color'

interface ScrimProps
{
  [key: string]: unknown

  modelValue: boolean
  color: BackgroundColorData
}

function Scrim (props: ScrimProps) {
  const { modelValue, color, ...rest } = props
  return (
    <Transition name="ve-fade-transition" appear>
      { props.modelValue && (
        <div
          class={ [
            've-overlay__scrim',
            props.color.backgroundColorClasses.value,
          ] }
          style={ props.color.backgroundColorStyles.value }
          { ...rest }
        />
      ) }
    </Transition>
  )
}

export interface OverlaySlot
{
  isActive: boolean
  activatorRef: (ref: Element | ComponentPublicInstance | null) => void
  props: Dictionary<any>
}

export type OverlaySlots = MakeSlots<{
  default: [OverlaySlot]
  activator: [OverlaySlot]
}>

export type Overlay = InstanceType<typeof Overlay>

export const Overlay = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'Overlay',

  directives: { ClickOutside },

  inheritAttrs: false,

  props: {
    modelValue: Boolean,
    absolute: Boolean,
    attach: {
      type: [Boolean, String, Object] as PropType<boolean | string | Element>,
      default: 'body',
    },
    contentClass: null,
    noClickAnimation: Boolean,
    persistent: Boolean,
    scrim: {
      type: [String, Boolean],
      default: true,
    },

    ...makeActivatorProps(),
    ...makeDimensionProps(),
    ...makePositionStrategyProps(),
    ...makeScrollStrategyProps(),
    ...makeThemeProps(),
    ...makeTransitionProps(),
    ...makeLazyProps(),
  },

  emits: {
    'click:outside': (e: MouseEvent) => true,
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots, attrs, emit }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const { teleportTarget } = useTeleport(toRef(props, 'attach'))
    const { themeClasses } = useTheme(props)
    const { hasContent, onAfterLeave } = useLazy(props, isActive)
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === 'string' ? props.scrim : null
    }))
    const { activatorEl, activatorEvents, runOpenDelay, runCloseDelay } = useActivator(props, isActive)
    const { dimensionStyles } = useDimension(props)
    const { isTop } = useStack(isActive)

    const contentEl = ref<HTMLElement>()
    const { contentStyles, anchorClasses, updatePosition } = usePositionStrategy(props, {
      contentEl,
      activatorEl,
      isActive,
    })

    useScrollStrategy(props, {
      contentEl,
      activatorEl,
      isActive,
      updatePosition,
    })

    function onClickOutside (e: MouseEvent) {
      emit('click:outside', e)

      if (!props.persistent) isActive.value = false
      else animateClick()
    }

    function closeConditional () {
      return isActive.value && isTop.value
    }

    watch(isActive, val => {
      if (val) {
        window.addEventListener('keydown', onKeydown)
      } else {
        window.removeEventListener('keydown', onKeydown)
      }
    }, { immediate: true })

    function onKeydown (e: KeyboardEvent) {
      if (e.key === 'Escape' && isTop.value) {
        if (!props.persistent) {
          isActive.value = false
        } else animateClick()
      }
    }

    useBackButton(next => {
      if (isTop.value && isActive.value) {
        next(false)
        if (!props.persistent) isActive.value = false
        else animateClick()
      } else {
        next()
      }
    })

    const root = ref()
    const top = ref<number>()
    watch(() => {
      return isActive.value
        && props.absolute
        && teleportTarget.value == null
    }, val => {
      if (val) {
        const scrollParent = getScrollParent(root.value)
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop
        }
      }
    })

    // Add a quick "bounce" animation to the content
    function animateClick () {
      if (props.noClickAnimation) return

      contentEl.value?.animate([
        { transformOrigin: 'center' },
        { transform: 'scale(1.03)' },
        { transformOrigin: 'center' },
      ], {
        duration: 150,
        easing: standardEasing,
      })
    }

    const slotProps: OverlaySlot = {
      isActive: isActive.value,
      activatorRef: selector => {
        if (!selector) return
        let activator
        if ('$el' in selector) {
          // Component (ref)
          activator = selector.$el
        } else {
          // HTMLElement | Element
          activator = selector
        }
        if (activator?.nodeType === Node.ELEMENT_NODE) {
          activatorEl.value = activator
        }
      },
      props: mergeProps(
        {
          modelValue: isActive.value,
          'onUpdate:modelValue': (val: boolean) => isActive.value = val,
        },
        toHandlers(activatorEvents.value),
        props.activatorProps
      ),
    }

    useRender(() => (
      <>
        { slots.activator?.(slotProps) }

        <Teleport
          disabled={ !teleportTarget.value }
          ref={ root }
          to={ teleportTarget.value }
        >
          { hasContent.value && (
            <div
              class={ [
                've-overlay',
                {
                  've-overlay--absolute': props.absolute,
                  've-overlay--active': isActive.value,
                },
                anchorClasses.value,
                themeClasses.value,
              ] }
              style={ top.value != null ? `top: ${ convertToUnit(top.value) }` : undefined }
              { ...attrs }
            >
              <Scrim
                color={ scrimColor }
                modelValue={ isActive.value && !!props.scrim }
              />

              <MaybeTransition
                appear
                onAfterLeave={ onAfterLeave }
                persisted
                transition={ props.transition }
                target={ activatorEl.value }
              >
                <div
                  ref={ contentEl }
                  v-show={ isActive.value }
                  v-click-outside={ {
                    handler: onClickOutside,
                    closeConditional,
                    include: () => [activatorEl.value]
                  } }
                  class={ [
                    've-overlay__content',
                    props.contentClass,
                  ] }
                  style={ [
                    dimensionStyles.value,
                    contentStyles.value,
                  ] }
                  onMouseenter={ () => {
                    props.openOnHover && runOpenDelay()
                  } }
                  onMouseleave={ () => {
                    props.openOnHover && runCloseDelay()
                  } }
                >
                  { slots.default?.(slotProps) }
                </div>
              </MaybeTransition>
            </div>
          ) }
        </Teleport>
      </>
    ))

    return {
      animateClick,
      contentEl,
      activatorEl,
    }
  }
})