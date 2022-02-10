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
  useRender
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

  directives: { ClickOutside },

  inheritAttrs: false,

  props: {
    modelValue: Boolean,
    absolute: Boolean,
    attach: [Boolean, String, Object] as PropType<boolean | string | Element>,
    contained: Boolean,
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
    const { activatorEl, activatorRef, activatorEvents } = useActivator(props, isActive)
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

    IN_BROWSER && watch(isActive, val => {
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

    useRender(() => (
      <>
        { slots.activator?.({
          isActive: isActive.value,
          props: mergeProps(
            { ref: activatorRef },
            toHandlers(activatorEvents.value),
            props.activatorProps,
          ),
        }) }

        <Teleport
          disabled={ !teleportTarget.value }
          ref={ root }
          to={ teleportTarget.value || 'body' }
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
                modelValue={ isActive.value && !!props.scrim }
                color={ typeof props.scrim === 'string' ? props.scrim : undefined }
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
                >
                  { slots.default?.({ isActive }) }
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

export type Overlay = InstanceType<typeof Overlay>