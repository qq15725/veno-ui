// Utils
import { requestNewFrame } from '../../utils'
import { bindScroll } from './util'

// Type
import type { ScrollStrategyData } from './index'

export function repositionScrollStrategy(data: ScrollStrategyData, _name: string) {
  let slow = false
  let raf = -1

  function update(e: Event) {
    requestNewFrame(() => {
      const start = performance.now()
      data.updatePosition.value?.(e)
      const time = performance.now() - start
      slow = time / (1000 / 60) > 2
    })
  }

  bindScroll(data.activatorEl.value ?? data.contentEl.value, e => {
    if (slow) {
      // If the position calculation is slow,
      // defer updates until scrolling is finished.
      // Browsers usually fire one scroll event per frame so
      // we just wait until we've got two frames without an event
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => {
          update(e)
        })
      })
    } else {
      update(e)
    }
  })
}
