// Utils
import { onScopeDispose } from 'vue'
import { getScrollParents } from '@veno-ui/utils'

/** @private */
export function bindScroll(el: HTMLElement | undefined, onScroll: (e: Event) => void) {
  const scrollElements = [document, ...getScrollParents(el)]

  scrollElements.forEach(el => {
    el.addEventListener('scroll', onScroll, { passive: true })
  })

  onScopeDispose(() => {
    scrollElements.forEach(el => {
      el.removeEventListener('scroll', onScroll)
    })
  })
}
