// Utils
import { convertToUnit, getScrollParents, hasScrollbar } from '../../utils'
import { onScopeDispose } from 'vue'

// Types
import type { ScrollStrategyData } from './index'

export function blockScrollStrategy (data: ScrollStrategyData, name: string) {
  const rootParent = data.root.value?.offsetParent
  const scrollableParent = rootParent && hasScrollbar(rootParent)

  if (scrollableParent) {
    data.root.value!.classList.add(`${ name }--scroll-blocked`)
  }

  const scrollElements = rootParent ? [] : [...new Set([
    ...getScrollParents(data.activatorEl.value),
    ...getScrollParents(data.contentEl.value),
  ])].filter(el => !el.classList.contains(`${ name }-scroll-blocked`))

  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth
  scrollElements.forEach((el, i) => {
    el.style.setProperty('--ve-scrollbar-offset', convertToUnit(scrollbarWidth))
    el.classList.add(`${ name }-scroll-blocked`)
  })

  onScopeDispose(() => {
    if (scrollableParent) {
      data.root.value!.classList.remove(`${ name }--scroll-blocked`)
    }

    scrollElements.forEach((el, i) => {
      el.style.removeProperty('--ve-scrollbar-offset')
      el.classList.remove(`${ name }-scroll-blocked`)
    })
  })
}