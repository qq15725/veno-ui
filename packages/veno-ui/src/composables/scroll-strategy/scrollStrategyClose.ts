// Utils
import { bindScroll } from './util'

// Types
import type { ScrollStrategyData } from './scrollStrategy'

export function scrollStrategyClose (data: ScrollStrategyData) {
  function onScroll (e: Event) {
    data.isActive.value = false
  }

  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll)
}