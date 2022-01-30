// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Constants
export const densities = [
  'ultra-low',
  'low',
  'medium',
  'high',
  'ultra-high',
]

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type Density = typeof densities[number]

export interface DensityProps
{
  density?: Density
}

// Composables
export const makeDensityProps = propsFactory({
  density: {
    type: String as PropType<Density>,
    default: 'medium',
    validator: (v: any) => densities.includes(v),
  },
}, 'density')

export function useDensity (
  props: MaybeRef<DensityProps>,
  name = getCurrentInstanceName()
) {
  const densityClasses = computed(() => {
    let { density } = unref(props)
    if (!name || !density || !densities.includes(density)) return null
    return `${ name }--density-${ density }`
  })

  return {
    densityClasses,
  }
}
