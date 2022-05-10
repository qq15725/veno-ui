// Utils
import { effectScope, nextTick, watchEffect } from 'vue'
import type { EffectScope, ExtractPropTypes, PropType, Ref } from 'vue'
import { IN_BROWSER, getCurrentInstanceName, propsFactory } from '../../utils'

// Strategies
import { closeScrollStrategy } from './close'
import { blockScrollStrategy } from './block'
import { repositionScrollStrategy } from './reposition'

// Types

const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy,
}

export interface ScrollStrategyData {
  root: Ref<HTMLElement | undefined>
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
  updatePosition: Ref<((e: Event) => void) | undefined>
}

export const makeScrollStrategyProps = propsFactory({
  /**
   * @zh 滚动策略
   */
  scrollStrategy: {
    type: [Boolean, String, Function] as PropType<boolean | keyof typeof scrollStrategies | ((data: ScrollStrategyData, name: string) => void)>,
    default: 'block',
    validator: (val: any) => typeof val === 'function'
      || typeof val === 'boolean'
      || val in scrollStrategies,
  },
})

export function useScrollStrategy(
  props: ExtractPropTypes<ReturnType<typeof makeScrollStrategyProps>>,
  data: ScrollStrategyData,
  name = getCurrentInstanceName(),
) {
  if (!IN_BROWSER) return

  let scope: EffectScope | undefined
  watchEffect(async () => {
    scope?.stop()
    if (!data.isActive.value
      || !props.scrollStrategy
      || typeof props.scrollStrategy === 'boolean') return
    scope = effectScope()
    await nextTick()
    scope.run(() => {
      if (typeof props.scrollStrategy === 'function') {
        props.scrollStrategy(data, name)
      } else if (typeof props.scrollStrategy === 'string'
        && props.scrollStrategy in scrollStrategies) {
        scrollStrategies[props.scrollStrategy]?.(data, name)
      }
    })
  })
}
