// Utils
import { effectScope, nextTick, onScopeDispose, ref, watchEffect } from 'vue'
import { IN_BROWSER, propsFactory } from '../../utils'

// Strategies
import { positionStrategyStatic } from './positionStrategyStatic'
import { positionStrategyConnected } from './positionStrategyConnected'

export const positionStrategies = {
  static: positionStrategyStatic, // specific viewport position, usually centered
  connected: positionStrategyConnected, // connected to a certain element
}

// Types
import type { EffectScope, PropType } from 'vue'
import type { Ref } from 'vue'
import type { Anchor } from '../../utils'

export interface PositionStrategyData
{
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
}

export type PositionStrategy = keyof typeof positionStrategies | ((
  data: PositionStrategyData,
  props: PositionStrategyProps,
  contentStyles: Ref<Dictionary<string>>,
  anchorClasses: Ref<string[]>
) => undefined | { updatePosition: (e: Event) => void })


export type { Anchor } from '../../utils'
export type Origin = Anchor | 'auto' | 'overlap'

export interface PositionStrategyProps
{
  positionStrategy: PositionStrategy
  anchor: Anchor
  origin: Origin
  offset?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
}

export const makePositionStrategyProps = propsFactory({
  positionStrategy: {
    type: [String, Function] as PropType<PositionStrategy>,
    default: 'static',
    validator: (val: any) => typeof val === 'function' || val in positionStrategies,
  },
  anchor: {
    type: String as PropType<Anchor>,
    default: 'bottom',
  },
  origin: {
    type: String as PropType<Origin>,
    default: 'auto',
  },
  offset: [Number, String],
})

export function usePositionStrategy (props: PositionStrategyProps, data: PositionStrategyData) {
  const contentStyles = ref({})
  const anchorClasses = ref([])
  const updatePosition = ref<(e: Event) => void>()

  let scope: EffectScope | undefined
  watchEffect(async () => {
    scope?.stop()
    updatePosition.value = undefined
    if (!(IN_BROWSER
      && data.isActive.value
      && data.activatorEl.value
      && props.positionStrategy)) return
    scope = effectScope()
    await nextTick()
    scope.run(() => {
      const positionStrategy = typeof props.positionStrategy === 'function'
        ? props.positionStrategy
        : positionStrategies[props.positionStrategy]
      updatePosition.value = positionStrategy(data, props, contentStyles, anchorClasses)?.updatePosition
    })
  })

  IN_BROWSER && window.addEventListener('resize', onResize, { passive: true })

  onScopeDispose(() => {
    IN_BROWSER && window.removeEventListener('resize', onResize)
    updatePosition.value = undefined
    scope?.stop()
  })

  function onResize (e: Event) {
    updatePosition.value?.(e)
  }

  return {
    contentStyles,
    anchorClasses,
    updatePosition,
  }
}