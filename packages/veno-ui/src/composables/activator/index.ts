// Utils
import { watchEffect, computed, effectScope, nextTick, onScopeDispose, ref, watch } from 'vue'
import {
  isComponentInstance,
  getCurrentInstance,
  IN_BROWSER,
  SUPPORTS_TOUCH,
  propsFactory,
  SUPPORTS_FOCUS_VISIBLE,
  querySelector,
} from '../../utils'

// Composables
import { makeDelayProps, useDelay } from '../delay'

// Types
import type { ExtractPropTypes, EffectScope, PropType, Ref } from 'vue'
import type { Selector } from '../../utils'

export const makeActivatorProps = propsFactory({
  /**
   * @zh 激活器
   */
  activator: [String, Object] as PropType<Selector>,

  /**
   * @zh 激活器属性
   */
  activatorProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },

  /**
   * @zh 点击时打开
   */
  openOnClick: {
    type: Boolean,
    default: undefined,
  },

  /**
   * @zh 悬停时打开
   */
  openOnHover: Boolean,

  /**
   * @zh 获取焦点时打开
   */
  openOnFocus: {
    type: Boolean,
    default: undefined,
  },

  ...makeDelayProps(),
}, 'activator')

type ActivatorProps = ExtractPropTypes<ReturnType<typeof makeActivatorProps>>

interface ActivatorData
{
  isActive: Ref<boolean>
}

export function useActivator (
  props: ActivatorProps,
  { isActive }: ActivatorData
) {
  const activatedPosition = ref<{ left: number, top: number }>()
  const activatorEl = ref<HTMLElement>()

  let isHovered = false
  let isFocused = false

  const openOnFocus = computed(() => {
    return props.openOnFocus
      || (props.openOnFocus == null && props.openOnHover)
  })

  const openOnClick = computed(() => {
    return props.openOnClick
      || (props.openOnClick == null && !props.openOnHover && !openOnFocus.value)
  })

  const { runOpenDelay, runCloseDelay } = useDelay(props, value => {
    const hovered = props.openOnHover && isHovered
    const focused = openOnFocus.value && isFocused
    if (value === (hovered || focused)) {
      isActive.value = value
    }
  })

  function onEnter (e: MouseEvent) {
    activatorEl.value = (e.currentTarget || e.target) as HTMLElement
    isHovered = true
    runOpenDelay()
  }

  function onLeave (e: MouseEvent) {
    isHovered = false
    runCloseDelay()
  }

  const availableEvents = {
    click: (e: MouseEvent) => {
      e.stopPropagation()
      activatedPosition.value = { left: e.clientX, top: e.clientY }
      activatorEl.value = (e.currentTarget || e.target) as HTMLElement
      isActive.value = !isActive.value
    },
    mouseenter: onEnter,
    mouseleave: onLeave,
    touchstartPassive: onEnter,
    touchend: onLeave,
    contextmenu: (e: Event) => e.preventDefault(),
    focus: (e: FocusEvent) => {
      if (
        SUPPORTS_FOCUS_VISIBLE
        && !(e.target as HTMLElement).matches(':focus-visible')
      ) return
      e.stopPropagation()
      activatorEl.value = (e.currentTarget || e.target) as HTMLElement
      isFocused = true
      runOpenDelay()
    },
    blur: (e: FocusEvent) => {
      e.stopPropagation()
      isFocused = false
      runCloseDelay()
    },
  }

  const activatorEvents = computed(() => {
    const events: Partial<typeof availableEvents> = {}

    if (openOnClick.value) {
      events.click = availableEvents.click
    }

    if (props.openOnHover) {
      if (SUPPORTS_TOUCH) {
        events.touchstartPassive = availableEvents.touchstartPassive
        events.contextmenu = availableEvents.contextmenu
        events.touchend = availableEvents.touchend
      } else {
        events.mouseenter = availableEvents.mouseenter
        events.mouseleave = availableEvents.mouseleave
      }
    }

    if (openOnFocus.value) {
      events.focus = availableEvents.focus
      events.blur = availableEvents.blur
    }

    return events
  })

  const contentEvents = computed(() => {
    const events: Partial<typeof availableEvents> = {}

    if (props.openOnHover) {
      if (SUPPORTS_TOUCH) {
        events.touchstartPassive = (e: MouseEvent) => isHovered = true
        events.contextmenu = availableEvents.contextmenu
        events.touchend = availableEvents.touchend
      } else {
        events.mouseenter = (e: MouseEvent) => isHovered = true
        events.mouseleave = availableEvents.mouseleave
      }
    }

    return events
  })

  const activatorRef = ref()
  watchEffect(() => {
    if (!activatorRef.value) return

    nextTick(() => {
      const activator = activatorRef.value
      activatorEl.value = isComponentInstance(activator) ? activator.$el : activator
    })
  })

  const state = {
    activatedPosition,
    activatorEl,
    activatorRef,
    activatorEvents,
    contentEvents
  }

  let scope: EffectScope
  watch(() => !!props.activator, val => {
    if (val && IN_BROWSER) {
      scope = effectScope()
      scope.run(() => useActivatorInScope(props, state))
    } else {
      scope?.stop()
    }
  }, { flush: 'post', immediate: true })

  return state
}

function useActivatorInScope (
  props: ActivatorProps,
  { activatorEl, activatorEvents }: ReturnType<typeof useActivator>
) {
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal)
      activator && unbindActivatorProps(activator)
    }
    if (val) {
      nextTick(() => bindActivatorProps())
    }
  }, { immediate: true })

  watch(() => props.activatorProps, () => bindActivatorProps())

  onScopeDispose(unbindActivatorProps)

  function bindActivatorProps (
    el = getActivator(),
    activatorProps = props.activatorProps
  ) {
    if (!el) return

    Object.entries(activatorEvents.value).forEach(([name, cb]) => {
      el.addEventListener(name, cb as (e: Event) => void)
    })

    Object.keys(activatorProps).forEach(k => {
      if (activatorProps[k] == null) {
        el.removeAttribute(k)
      } else {
        el.setAttribute(k, activatorProps[k])
      }
    })
  }

  function unbindActivatorProps (
    el = getActivator(),
    activatorProps = props.activatorProps
  ) {
    if (!el) return

    Object.entries(activatorEvents.value).forEach(([name, cb]) => {
      el.removeEventListener(name, cb as (e: Event) => void)
    })

    Object.keys(activatorProps).forEach(k => {
      el.removeAttribute(k)
    })
  }

  const vm = getCurrentInstance('useActivator')

  function getActivator (selector = props.activator): HTMLElement | undefined {
    if (selector) {
      activatorEl.value = querySelector(selector, vm)
    }

    return activatorEl.value
  }
}
