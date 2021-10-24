// Utils
import {
  convertToUnit,
  getScrollParents,
  IN_BROWSER,
  propsFactory
} from '../../../utils'
import { effectScope, nextTick, onScopeDispose, watchEffect } from 'vue'
import { requestNewFrame } from '../utils/request-new-frame'

// Types
import type { EffectScope, PropType, Ref } from 'vue'

export interface ScrollStrategyData
{
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
  updatePosition: Ref<((e: Event) => void) | undefined>
}

const scrollStrategies = {
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy,
}

interface StrategyProps
{
  scrollStrategy: keyof typeof scrollStrategies | ((data: ScrollStrategyData) => void)
}

export const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function] as PropType<StrategyProps['scrollStrategy']>,
    default: 'block',
    validator: (val: any) => typeof val === 'function' || val in scrollStrategies,
  },
})

export function useScrollStrategies (
  props: StrategyProps,
  data: ScrollStrategyData
) {
  if (!IN_BROWSER) return

  let scope: EffectScope | undefined
  watchEffect(async () => {
    scope?.stop()

    if (!(data.isActive.value && props.scrollStrategy)) return

    scope = effectScope()
    await nextTick()
    scope.run(() => {
      if (typeof props.scrollStrategy === 'function') {
        props.scrollStrategy(data)
      } else {
        scrollStrategies[props.scrollStrategy]?.(data)
      }
    })
  })
}

function closeScrollStrategy (data: ScrollStrategyData) {
  function onScroll (e: Event) {
    data.isActive.value = false
  }

  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll)
}

function blockScrollStrategy (data: ScrollStrategyData) {
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

function repositionScrollStrategy (data: ScrollStrategyData) {
  let slow = false
  let raf = -1

  function update (e: Event) {
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

/** @private */
function bindScroll (el: HTMLElement | undefined, onScroll: (e: Event) => void) {
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
