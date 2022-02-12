// Utils
import { effectScope, nextTick, watchEffect } from 'vue'
import { getCurrentInstanceName, IN_BROWSER, propsFactory } from '../../utils'

// Strategies
import { closeScrollStrategy } from './close'
import { blockScrollStrategy } from './block'
import { repositionScrollStrategy } from './reposition'

const scrollStrategies = {
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy,
}

// Types
import type { EffectScope, PropType, Ref, ExtractPropTypes } from 'vue'

export interface ScrollStrategyData
{
  root: Ref<HTMLElement | undefined>
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
  updatePosition: Ref<((e: Event) => void) | undefined>
}

export const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function] as PropType<keyof typeof scrollStrategies | ((data: ScrollStrategyData, name: string) => void)>,
    default: 'block',
    validator: (val: any) => typeof val === 'function' || val in scrollStrategies,
  },
})

export function useScrollStrategy (
  props: ExtractPropTypes<ReturnType<typeof makeScrollStrategyProps>>,
  data: ScrollStrategyData,
  name = getCurrentInstanceName()
) {
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
        scrollStrategy(data, name)
      } else {
        scrollStrategies[scrollStrategy]?.(data, name)
      }
    })
  })
}
