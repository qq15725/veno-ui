// Utils
import { SUPPORT_INTERSECTION_OBSERVER } from '../../utils'

// Types
import type { DirectiveBinding, ObjectDirective } from 'vue'

type IntersectHandler = (
  isIntersecting: boolean,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) => void

export interface IntersectDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'>
{
  value?: IntersectHandler | {
    handler: IntersectHandler,
    options?: IntersectionObserverInit
  }
  modifiers: {
    once?: boolean
    quiet?: boolean
  }
}

function mounted (el: HTMLElement, binding: IntersectDirectiveBinding) {
  if (!SUPPORT_INTERSECTION_OBSERVER) return

  const modifiers = binding.modifiers || {}

  const value = binding.value

  const { handler, options } = typeof value === 'object'
    ? value
    : { handler: value, options: {} }

  const observer = new IntersectionObserver((
    entries: IntersectionObserverEntry[] = [],
    observer: IntersectionObserver
  ) => {
    if (!el._intersect) return

    const isIntersecting = entries.some(entry => entry.isIntersecting)

    if (
      handler
      && (!modifiers.quiet || el._intersect.init)
      && (!modifiers.once || isIntersecting || !el._intersect.init)
    ) {
      handler(isIntersecting, entries, observer)
    }

    if (isIntersecting && modifiers.once) {
      unmounted(el)
    } else {
      el._intersect.init = true
    }
  }, options)

  el._intersect = { init: false, observer }

  observer.observe(el)
}

function unmounted (el: HTMLElement) {
  if (!el._intersect) return

  el._intersect.observer.unobserve(el)

  delete el._intersect
}

export const Intersect: ObjectDirective<HTMLElement> = {
  mounted,
  unmounted,
}

export default Intersect
