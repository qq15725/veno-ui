// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Types
import type { ExtractPropTypes, PropType } from 'vue'
import type { MaybeRef } from '@veno-ui/utils'

// Constants
export const DENSITIES = ['ultra-low', 'low', 'medium', 'high', 'ultra-high'] as const

export type Density = typeof DENSITIES[number]

export type DensityProps = ExtractPropTypes<ReturnType<typeof makeDensityProps>>

// Composables
export const makeDensityProps = propsFactory({
  density: {
    type: String as PropType<Density | undefined>,
    default: 'medium',
    validator: (v: any) => DENSITIES.includes(v),
  },
}, 'density')

export function useDensity(
  props: MaybeRef<DensityProps>,
  name = getCurrentInstanceName(),
) {
  const densityClasses = computed(() => {
    const { density } = unref(props)
    if (!name || !density || !DENSITIES.includes(density)) return null
    return `${ name }--density-${ density }`
  })

  return {
    densityClasses,
  }
}
