// Utils
import { computed } from 'vue'
import { propsFactory } from '../../utils'

// Constants
const DENSITIES = [null, 'default', 'comfortable', 'compact'] as const

// Types
import type { PropType } from 'vue'

export type Density = typeof DENSITIES[number]

export interface DensityProps
{
  density?: Density
}

// Composables
export const makeDensityProps = propsFactory({
  density: {
    type: String as PropType<Density>,
    default: 'default',
    validator: (v: any) => DENSITIES.includes(v),
  },
}, 'density')

export function useDensity (props: DensityProps, name: string) {
  const densityClasses = computed(() => {
    return `${ name }--density-${ props.density }`
  })

  return { densityClasses }
}
