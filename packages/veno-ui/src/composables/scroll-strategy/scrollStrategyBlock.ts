// Utils
import { convertToUnit, getScrollParents } from '../../utils'
import { onScopeDispose } from 'vue'

// Types
import type { ScrollStrategyData } from './scrollStrategy'

export function scrollStrategyBlock (data: ScrollStrategyData) {
  const scrollElements = [...new Set([
    ...getScrollParents(data.activatorEl.value),
    ...getScrollParents(data.contentEl.value),
  ])].filter(el => !el.classList.contains('ve-overlay-scroll-blocked'))

  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth

  scrollElements.forEach((el, i) => {
    el.style.setProperty('--ve-scrollbar-offset', convertToUnit(scrollbarWidth))
    el.classList.add('ve-overlay-scroll-blocked')
  })

  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      el.style.removeProperty('--ve-scrollbar-offset')
      el.classList.remove('ve-overlay-scroll-blocked')
    })
  })
}