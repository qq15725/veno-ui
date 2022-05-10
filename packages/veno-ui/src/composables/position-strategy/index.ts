// Utils
import { effectScope, nextTick, onScopeDispose, ref, watchEffect } from 'vue'
import { IN_BROWSER, propsFactory } from '../../utils'

// Strategies
import { staticPositionStrategy } from './static'
import { connectedPositionStrategy } from './connected'
import { pointerPositionStrategy } from './pointer'

// Types
import type { EffectScope, ExtractPropTypes, PropType } from 'vue'
import type { Ref } from 'vue'
import type { Anchor } from '../../utils'

export const POSITION_STRATEGIES = {
  static: staticPositionStrategy, // specific viewport position, usually centered
  connected: connectedPositionStrategy, // connected to a certain element
  pointer: pointerPositionStrategy, // pointer position
}

export interface PositionStrategyData {
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
  activatedPosition?: Ref<{ left: number; top: number } | undefined>
}

export type PositionStrategy = keyof typeof POSITION_STRATEGIES | ((
  data: PositionStrategyData,
  props: PositionStrategyProps,
  contentStyles: Ref<Record<string, string>>,
  anchorClasses: Ref<string[]>
) => undefined | { updatePosition: (e: Event) => void })

export type Origin = Anchor | 'auto' | 'overlap'

export type PositionStrategyProps = ExtractPropTypes<ReturnType<typeof makePositionStrategyProps>> & {
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
}

export const makePositionStrategyProps = propsFactory({
  /**
   * @zh 定位策略
   */
  positionStrategy: {
    type: [String, Function] as PropType<PositionStrategy>,
    default: 'static',
    validator: (val: any) => typeof val === 'function' || val in POSITION_STRATEGIES,
  },

  /**
   * @zh 锚点位置
   */
  anchor: {
    type: String as PropType<Anchor>,
    default: 'bottom',
  },

  /**
   * @zh 原始点策略
   */
  origin: {
    type: String as PropType<Origin>,
    default: 'auto',
  },

  /**
   * @zh 偏移值
   */
  offset: [Number, String],
}, 'position-strategy')

export function usePositionStrategy(
  props: PositionStrategyProps,
  data: PositionStrategyData,
) {
  const contentStyles = ref({})
  const anchorClasses = ref([])
  const updatePosition = ref<(e: Event) => void>()

  let scope: EffectScope | undefined
  watchEffect(async () => {
    scope?.stop()
    updatePosition.value = undefined
    if (!(IN_BROWSER
      && data.isActive.value
      && props.positionStrategy)) return
    scope = effectScope()
    await nextTick()
    scope.run(() => {
      const strategy = typeof props.positionStrategy === 'function'
        ? props.positionStrategy
        : POSITION_STRATEGIES[props.positionStrategy]
      updatePosition.value = strategy(
        data,
        props,
        contentStyles,
        anchorClasses,
      )?.updatePosition
    })
  })

  IN_BROWSER && window.addEventListener('resize', onResize, { passive: true })

  onScopeDispose(() => {
    IN_BROWSER && window.removeEventListener('resize', onResize)
    updatePosition.value = undefined
    scope?.stop()
  })

  function onResize(e: Event) {
    updatePosition.value?.(e)
  }

  return {
    contentStyles,
    anchorClasses,
    updatePosition,
  }
}
