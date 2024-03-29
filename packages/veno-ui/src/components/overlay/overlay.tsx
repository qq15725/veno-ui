// Styles
import './styles/overlay.scss'

// Utils
import { Teleport, computed, mergeProps, ref, toHandlers, watch } from 'vue'
import {
  IN_BROWSER,
  convertToUnit,
  getScrollParent,
  keyValues,
  propsFactory,
  standardEasing,
  useRender,
} from '@veno-ui/utils'
import { genericComponent } from '../../utils'

// Components
import { FadeTransition } from '../transition'
import { Scrim } from '../scrim'

// Composables
import { makeActivatorProps, useActivator } from '../../composables/activator'
import { makePositionStrategyProps, usePositionStrategy } from '../../composables/position-strategy'
import { makeScrollStrategyProps, useScrollStrategy } from '../../composables/scroll-strategy'
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { MaybeTransition, makeTransitionProps } from '../../composables/transition'
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
  default: [{
    close: () => void
    isActive: Ref<boolean>
  }]
  activator: [{
    close: () => void
    isActive: boolean
    props: Record<string, any>
    on: Record<string, any>
  }]
}>

export const makeOverlayProps = propsFactory({
  /**
   * @zh 是否展示
   */
  modelValue: Boolean,

  /**
   * @zh 使用绝对定位
   */
  absolute: Boolean,

  /**
   * @zh 绑定到的 DOM
   */
  attach: [Boolean, String, Object] as PropType<boolean | string | Element>,

  /**
   * @zh 使用容器形式
   */
  contained: Boolean,

  /**
   * @zh 包裹内容 div 的 style
   */
  contentStyle: null,

  /**
   * @zh 包裹内容 div 的 class
   */
  contentClass: null,

  /**
   * @zh 没有点击动画
   */
  noClickAnimation: Boolean,

  /**
   * @zh 持续显示（额外关闭行为不受控）
   */
  persistent: Boolean,

  /**
   * @zh 无遮罩层
   */
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
}, 'overlay')

export const Overlay = genericComponent<new () => {
  $slots: OverlaySlots
}>()({
  name: 'VeOverlay',

  inheritAttrs: false,

  directives: { ClickOutside },

  props: makeOverlayProps(),

  emits: {
    'click:outside': (_event: MouseEvent) => true,
    'update:modelValue': (_modelValue: boolean) => true,
  },

  setup(props, { slots, attrs, emit }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const isInternalActive = ref(isActive.value)
    const { teleportTarget } = useTeleport(computed(() => props.attach || props.contained))
    const { themeClasses } = provideTheme(props)
    const { hasContent, onAfterLeave: onAfterLeaveByLazy } = useLazy(props, isActive)
    const { dimensionStyles } = useDimension(props)
    const { isTop } = useStack(isActive)
    const root = ref<HTMLElement>()
    const contentEl = ref<HTMLElement>()
    const { overlayZIndex } = useOverlay(isInternalActive)

    const {
      activatedPosition,
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
      activatedPosition,
      activatorEl,
      contentEl,
      isActive,
    })

    useScrollStrategy(props, {
      root,
      contentEl,
      activatorEl,
      isActive: isInternalActive,
      updatePosition,
    })

    // Add a quick "bounce" animation to the content
    const animateClick = () => {
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

    const onClickOutside = (e: MouseEvent) => {
      emit('click:outside', e)

      if (!props.persistent) {
        isActive.value = false
      } else {
        animateClick()
      }
    }

    const onKeydown = ({ key }: KeyboardEvent) => {
      if (key === keyValues.esc && isTop.value) {
        if (!props.persistent) {
          isActive.value = false
        } else {
          animateClick()
        }
      }
    }

    watch(isActive, val => {
      if (val) isInternalActive.value = true

      if (IN_BROWSER) {
        if (val) {
          window.addEventListener('keydown', onKeydown)
        } else {
          window.removeEventListener('keydown', onKeydown)
        }
      }
    }, { immediate: true })

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

    const onAfterLeave = () => {
      isInternalActive.value = false
      onAfterLeaveByLazy()
    }

    const closeConditional = () => {
      return isActive.value && isTop.value
    }

    const close = () => {
      isActive.value = false
    }

    useRender(() => {
      const on = toHandlers(activatorEvents.value)

      return (
        <>
          { slots.activator?.({
            close,
            isActive: isActive.value,
            props: mergeProps(
              { ref: activatorRef },
              on,
              props.activatorProps,
            ),
            on,
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
                  style={ {
                    top: convertToUnit(top.value),
                    zIndex: overlayZIndex.value,
                  } }
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
                        include: () => [activatorEl.value],
                      } }
                      class={ [
                        've-overlay__wrapper',
                        props.contentClass,
                      ] }
                      style={ [
                        props.contentStyle,
                        dimensionStyles.value,
                        contentStyles.value,
                      ] }
                      { ...toHandlers(contentEvents.value) }
                    >
                      { slots.default?.({ close, isActive }) }
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
      close,
      contentEl,
      activatorEl,
      updatePosition,
    }
  },
})

export type Overlay = InstanceType<typeof Overlay>
