// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

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

export function useElevation (props: MaybeRef<ElevationProps>) {
  const elevationClasses = computed(() => {
    const { elevation } = unref(props)

    const classes: string[] = []

    if (elevation == null) return classes

    classes.push(`elevation-${ elevation }`)

    return classes
  })

  return { elevationClasses }
}
