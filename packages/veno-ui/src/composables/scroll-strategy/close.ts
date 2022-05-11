// Utils
import { bindScroll } from './util'

// Types
import type { ScrollStrategyData } from './index'

export function closeScrollStrategy(data: ScrollStrategyData, _name: string) {
  function onScroll(_e: Event) {
    data.isActive.value = false
  }

  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll)
}
