// Utils
import { computed } from 'vue'
import { propsFactory } from '../../utils'

// Types
export interface ElevationProps
{
  elevation?: number | string | null
}

// Composables
export const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator (v: any) {
      const value = parseInt(v)

      return !isNaN(value) && value >= 0 && value <= 24
    },
  },
}, 'elevation')

export function useElevation (props: ElevationProps) {
  const elevationClasses = computed(() => {
    const classes: string[] = []

    if (props.elevation == null) return classes

    classes.push(`elevation-${ props.elevation }`)

    return classes
  })

  return { elevationClasses }
}
