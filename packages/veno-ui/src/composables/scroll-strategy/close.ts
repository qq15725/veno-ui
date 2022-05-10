// Utils
import { bindScroll } from './util'

// Types
import type { ScrollStrategyData } from './index'

export function closeScrollStrategy (data: ScrollStrategyData, name: string) {
  function onScroll (e: Event) {
    data.isActive.value = false
  }

  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll)
}