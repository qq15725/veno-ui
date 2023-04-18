// Utils
import { computed, unref, warn } from 'vue'
import { IN_BROWSER } from '@veno-ui/utils'

// Types
import type { MaybeRef } from '@veno-ui/utils'

export function useTeleport(target: MaybeRef<boolean | string | Element> = false) {
  const teleportTarget = computed(() => {
    const _target = unref(target)

    if (_target === true || !IN_BROWSER) return undefined

    const targetElement
      = _target === false
        ? document.body
        : typeof _target === 'string'
          ? document.querySelector(_target)
          : _target

    if (targetElement == null) {
      warn(`Unable to locate target ${ _target }`)
      return undefined
    }

    if (!useTeleport.cache.has(targetElement)) {
      const el = document.createElement('div')
      el.className = 've-overlay-container'
      targetElement.appendChild(el)
      useTeleport.cache.set(targetElement, el)
    }

    return useTeleport.cache.get(targetElement)
  })

  return { teleportTarget }
}

useTeleport.cache = new WeakMap<Element, Element>()
