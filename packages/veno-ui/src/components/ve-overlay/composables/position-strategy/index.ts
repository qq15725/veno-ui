// Utils
import { effectScope, nextTick, onScopeDispose, ref, watchEffect } from 'vue'
import { IN_BROWSER, propsFactory } from '../../../../utils'
import { staticPositionStrategy, connectedPositionStrategy } from './strategies'

// Types
import type { EffectScope, PropType } from 'vue'
import type { Ref } from 'vue'
import type { Anchor } from '../../utils/anchor'

export interface PositionStrategyData
{
  contentEl: Ref<HTMLElement | undefined>
  activatorEl: Ref<HTMLElement | undefined>
  isActive: Ref<boolean>
}

export const positionStrategies = {
  static: staticPositionStrategy, // specific viewport position, usually centered
  connected: connectedPositionStrategy, // connected to a certain element
}

export interface StrategyProps
{
  positionStrategy: keyof typeof positionStrategies | ((
    data: PositionStrategyData,
    props: StrategyProps,
    contentStyles: Ref<Dictionary<string>>,
    anchorClasses: Ref<string[]>
  ) => undefined | { updatePosition: (e: Event) => void })
  anchor: Anchor
  origin: Anchor | 'auto' | 'overlap'
  offset?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
}

export const makePositionStrategyProps = propsFactory({
  positionStrategy: {
    type: [String, Function] as PropType<StrategyProps['positionStrategy']>,
    default: 'static',
    validator: (val: any) => typeof val === 'function' || val in positionStrategies,
  },
  anchor: {
    type: String as PropType<StrategyProps['anchor']>,
    default: 'bottom',
  },
  origin: {
    type: String as PropType<StrategyProps['origin']>,
    default: 'auto',
  },
  offset: [Number, String],
})

export function usePositionStrategies (props: StrategyProps, data: PositionStrategyData) {
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