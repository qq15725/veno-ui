// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Constants
const DENSITIES = [null, 'medium', 'comfortable', 'compact'] as const

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type Density = typeof DENSITIES[number]

export interface DensityProps
{
  density?: Density
}

// Composables
export const makeDensityProps = propsFactory({
  density: {
    type: String as PropType<Density>,
    default: 'medium',
    validator: (v: any) => DENSITIES.includes(v),
  },
}, 'density')

export function useDensity (props: MaybeRef<DensityProps>, name: string) {
  const densityClasses = computed(() => {
    const { density } = unref(props)

    if (density) {
      return `${ name }--density-${ density }`
    }

    return null
  })

  return { densityClasses }
}