// Utils
import { IN_BROWSER, propsFactory } from '../../utils'
import { effectScope, nextTick, watchEffect } from 'vue'

// Strategies
import { scrollStrategyClose } from './scrollStrategyClose'
import { scrollStrategyBlock } from './scrollStrategyBlock'
import { scrollStrategyReposition } from './scrollStrategyReposition'

const scrollStrategies = {
  close: scrollStrategyClose,
  block: scrollStrategyBlock,
  reposition: scrollStrategyReposition,
}

// Types
import type { EffectScope, PropType } from 'vue'
import type { Ref } from 'vue'

export interface ScrollStrategyData
{
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
  updatePosition: Ref<((e: Event) => void) | undefined>
}

export type ScrollStrategy = keyof typeof scrollStrategies | ((data: ScrollStrategyData) => void)

interface ScrollStrategyProps
{
  scrollStrategy: ScrollStrategy
}

export const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function] as PropType<ScrollStrategy>,
    default: 'block',
    validator: (val: any) => typeof val === 'function' || val in scrollStrategies,
  },
})

export function useScrollStrategy (props: ScrollStrategyProps, data: ScrollStrategyData) {
  if (!IN_BROWSER) return

  let scope: EffectScope | undefined
  watchEffect(async () => {
    const { scrollStrategy } = props
    scope?.stop()
    if (!(data.isActive.value && scrollStrategy)) return
    scope = effectScope()
    await nextTick()
    scope.run(() => {
      if (typeof scrollStrategy === 'function') {
        scrollStrategy(data)
      } else {
        scrollStrategies[scrollStrategy]?.(data)
      }
    })
  })
}
