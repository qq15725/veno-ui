// Styles
import './styles/overlay.scss'

// Utils
import { mergeProps, ref, toHandlers, computed, watch } from 'vue'
import {
  IN_BROWSER,
  convertToUnit,
  genericComponent,
  getScrollParent,
  standardEasing,
  useRender,
  keyValues
} from '../../utils'

// Components
import { Teleport } from 'vue'
import { FadeTransition } from '../transition'
import { Scrim } from '../scrim'

// Composables
import { makeActivatorProps, useActivator } from '../../composables/activator'
import { makePositionStrategyProps, usePositionStrategy } from '../../composables/position-strategy'
import { makeScrollStrategyProps, useScrollStrategy } from '../../composables/scroll-strategy'
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useBackButton } from '../../composables/router'
import { useProxiedModel } from '../../composables/proxied-model'
import { useTeleport } from '../../composables/teleport'
import { makeDimensionProps, useDimension } from '../../composables/dimension'
import { makeLazyProps, useLazy } from '../../composables/lazy'
import { useStack } from '../../composables/stack'
import { useOverlay } from '../../composables/layout'

// Directives
import { ClickOutside } from '../../directives/click-outside'

// Types
import type { PropType, Ref } from 'vue'
import type { MakeSlots } from '../../utils'

export type OverlaySlots = MakeSlots<{
  default: [{ isActive: Ref<boolean> }]
  activator: [{ isActive: boolean, props: Record<string, any> }]
}>

export const Overlay = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeOverlay',

  inheritAttrs: false,

  directives: { ClickOutside },

  props: {
    modelValue: Boolean,
    absolute: Boolean,
    attach: [Boolean, String, Object] as PropType<boolean | string | Element>,
    contained: Boolean,
    contentClass: null,

    /**
     * @zh 没有点击动画
     */
    noClickAnimation: Boolean,

    /**
     * @zh 持续显示（额外关闭行为不受控）
     */
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
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    } as const),
    ...makeLazyProps(),
  },

  emits: {
    'click:outside': (e: MouseEvent) => true,
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots, attrs, emit }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const { teleportTarget } = useTeleport(computed(() => props.attach || props.contained))
    const { themeClasses } = provideTheme(props)
    const { hasContent, onAfterLeave } = useLazy(props, isActive)
    const { dimensionStyles } = useDimension(props)
    const { isTop } = useStack(isActive)
    const root = ref<HTMLElement>()
    const contentEl = ref<HTMLElement>()
    const { overlayZIndex } = useOverlay(isActive)
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
    } = useActivator(props, {
      isActive,
    })
    const {
      contentStyles,
      anchorClasses,
      updatePosition,
    } = usePositionStrategy(props, {
      contentEl,
      activatorEl,
      isActive,
    })
    useScrollStrategy(props, {
      root,
      contentEl,
      activatorEl,
      isActive,
      updatePosition,
    })

    function onClickOutside (e: MouseEvent) {
      emit('click:outside', e)

      if (!props.persistent) {
        isActive.value = false
      } else {
        animateClick()
      }
    }

    function closeConditional () {
      return isActive.value && isTop.value
    }

    IN_BROWSER && watch(isActive, val => {
      if (val) {
        window.addEventListener('keydown', onKeydown)
      } else {
        window.removeEventListener('keydown', onKeydown)
      }
    }, { immediate: true })

    function onKeydown ({ key }: KeyboardEvent) {
      if (key === keyValues.esc && isTop.value) {
        if (!props.persistent) {
          isActive.value = false
        } else {
          animateClick()
        }
      }
    }

    useBackButton(next => {
      if (isTop.value && isActive.value) {
        next(false)
        if (!props.persistent) {
          isActive.value = false
        } else {
          animateClick()
        }
      } else {
        next()
      }
    })

    const top = ref<number>()
    watch(() => {
      return isActive.value
        && (props.absolute || props.contained)
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

    useRender(() => {
      return (
        <>
          { slots.activator?.({
            isActive: isActive.value,
            props: mergeProps(
              { ref: activatorRef },
              toHandlers(activatorEvents.value),
              props.activatorProps,
            ),
          }) }

          { IN_BROWSER && (
            <Teleport
              disabled={ !teleportTarget.value }
              to={ teleportTarget.value }
            >
              { hasContent.value && (
                <div
                  class={ [
                    've-overlay',
                    {
                      've-overlay--absolute': props.absolute || props.contained,
                      've-overlay--active': isActive.value,
                      've-overlay--contained': props.contained,
                    },
                    anchorClasses.value,
                    themeClasses.value,
                  ] }
                  ref={ root }
                  style={{
                    top: convertToUnit(top.value),
                    zIndex: overlayZIndex.value,
                  }}
                  { ...attrs }
                >
                  <Scrim
                    color={ typeof props.scrim === 'string' ? props.scrim : undefined }
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
                        've-overlay__wrapper',
                        props.contentClass,
                      ] }
                      style={ [
                        dimensionStyles.value,
                        contentStyles.value,
                      ] }
                      { ...toHandlers(contentEvents.value) }
                    >
                      { slots.default?.({ isActive }) }
                    </div>
                  </MaybeTransition>
                </div>
              ) }
            </Teleport>
          ) }
        </>
      )
    })

    return {
      animateClick,
      contentEl,
      activatorEl,
    }
  }
})

export type Overlay = InstanceType<typeof Overlay>