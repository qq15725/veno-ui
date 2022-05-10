// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Constants
export const DENSITIES = ['ultra-low', 'low', 'medium', 'high', 'ultra-high'] as const

// Types
import type { ExtractPropTypes, PropType } from 'vue'
import type { MaybeRef } from '../../utils'

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

export function useDensity (
  props: MaybeRef<DensityProps>,
  name = getCurrentInstanceName()
) {
  const densityClasses = computed(() => {
    let { density } = unref(props)
    if (!name || !density || !DENSITIES.includes(density)) return null
    return `${ name }--density-${ density }`
  })

  return {
    densityClasses,
  }
}
