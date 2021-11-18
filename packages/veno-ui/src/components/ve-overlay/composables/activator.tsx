// Utils
import {
  getCurrentInstance,
  IN_BROWSER,
  SUPPORT_TOUCH,
  propsFactory,
  SUPPORT_FOCUS_VISIBLE
} from '../../../utils'

import { makeDelayProps, useDelay } from '../../../composables/delay'

import {
  computed,
  effectScope,
  nextTick,
  onScopeDispose,
  ref,
  watch,
} from 'vue'

// Types
import type { DelayProps } from '../../../composables/delay'
import type {
  ComponentPublicInstance,
  EffectScope,
  PropType,
  Ref,
} from 'vue'

interface ActivatorProps extends DelayProps
{
  activator?: 'parent' | string | Element | ComponentPublicInstance
  activatorProps: Dictionary<any>

  openOnClick: boolean | undefined
  openOnHover: boolean
  openOnFocus: boolean | undefined
}

export const makeActivatorProps = propsFactory({
  activator: [String, Object] as PropType<ActivatorProps['activator']>,
  activatorProps: {
    type: Object as PropType<ActivatorProps['activatorProps']>,
    default: () => ({}),
  },

  openOnClick: {
    type: Boolean,
    default: undefined,
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: undefined,
  },

  ...makeDelayProps(),
})

export function useActivator (
  props: ActivatorProps,
  isActive: Ref<boolean>
) {
  const activatorEl = ref<HTMLElement>()

  let isHovered = false
  let isFocused = false

  const openOnFocus = computed(() => props.openOnFocus || (props.openOnFocus == null && props.openOnHover))
  const openOnClick = computed(() => props.openOnClick || (props.openOnClick == null && !props.openOnHover && !openOnFocus.value))

  const { runOpenDelay, runCloseDelay } = useDelay(props, value => {
    if (value === (
      (props.openOnHover && isHovered) ||
      (openOnFocus.value && isFocused)
    )) {
      isActive.value = value
    }
  })

  const availableEvents = {
    click: (e: MouseEvent) => {
      e.stopPropagation()
      activatorEl.value = (e.currentTarget || e.target) as HTMLElement
      isActive.value = !isActive.value
    },
    mouseenter: (e: MouseEvent) => {
      activatorEl.value = (e.currentTarget || e.target) as HTMLElement
      isHovered = true
      runOpenDelay()
    },
    mouseleave: (e: MouseEvent) => {
      isHovered = false
      runCloseDelay()
    },
    touchstart: (e: MouseEvent) => {
      activatorEl.value = (e.currentTarget || e.target) as HTMLElement
      isHovered = true
      runOpenDelay()
    },
    touchend: (e: MouseEvent) => {
      isHovered = false
      runCloseDelay()
    },
    focus: (e: FocusEvent) => {
      if (
        SUPPORT_FOCUS_VISIBLE &&
        !(e.target as HTMLElement).matches(':focus-visible')
      ) return

      isFocused = true
      e.stopPropagation()

      runOpenDelay()
    },
    blur: (e: FocusEvent) => {
      isFocused = false
      e.stopPropagation()

      runCloseDelay()
    },
  }

  const activatorEvents = computed(() => {
    const events: Partial<typeof availableEvents> = {}

    if (openOnClick.value) {
      events.click = availableEvents.click
    }

    if (props.openOnHover) {
      if (SUPPORT_TOUCH) {
        events.touchstart = availableEvents.touchstart
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

  let scope: EffectScope
  watch(() => !!props.activator, val => {
    if (val && IN_BROWSER) {
      scope = effectScope()
      scope.run(() => {
        _useActivator(props, { activatorEl, activatorEvents })
      })
    } else if (scope) {
      scope.stop()
    }
  }, { flush: 'post', immediate: true })

  return { activatorEl, activatorEvents }
}

function _useActivator (props: ActivatorProps, { activatorEl, activatorEvents }: ReturnType<typeof useActivator>) {
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal)
      activator && unbindActivatorProps(activator)
    }
    if (val) {
      nextTick(() => bindActivatorProps())
    }
  }, { immediate: true })

  watch(() => props.activatorProps, () => {
    bindActivatorProps()
  })

  onScopeDispose(() => {
    unbindActivatorProps()
  })

  function bindActivatorProps (el = getActivator(), _props = props.activatorProps) {
    if (!el) return

    Object.entries(activatorEvents.value).forEach(([name, cb]) => {
      el.addEventListener(name, cb as (e: Event) => void)
    })

    Object.keys(_props).forEach(k => {
      if (_props[k] == null) {
        el.removeAttribute(k)
      } else {
        el.setAttribute(k, _props[k])
      }
    })
  }

  function unbindActivatorProps (el = getActivator(), _props = props.activatorProps) {
    if (!el) return

    Object.entries(activatorEvents.value).forEach(([name, cb]) => {
      el.removeEventListener(name, cb as (e: Event) => void)
    })

    Object.keys(_props).forEach(k => {
      el.removeAttribute(k)
    })
  }

  const vm = getCurrentInstance('useActivator')

  function getActivator (selector = props.activator): HTMLElement | undefined {
    let activator
    if (selector) {
      if (selector === 'parent') {
        activator = vm?.proxy?.$el?.parentNode
      } else if (typeof selector === 'string') {
        // Selector
        activator = document.querySelector(selector)
      } else if ('$el' in selector) {
        // Component (ref)
        activator = selector.$el
      } else {
        // HTMLElement | Element
        activator = selector
      }
    }

    // The activator should only be a valid element (Ignore comments and text nodes)
    activatorEl.value = activator?.nodeType === Node.ELEMENT_NODE ? activator : null

    return activatorEl.value
  }
}
