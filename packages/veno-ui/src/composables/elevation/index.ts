// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Types
import type { ExtractPropTypes } from 'vue'
import type { MaybeRef } from '@veno-ui/utils'

export type ElevationProps = ExtractPropTypes<ReturnType<typeof makeElevationProps>>

// Composables
export const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v: any) {
      const value = parseInt(v)

      return !isNaN(value) && value >= 0 && value <= 24
    },
  },
}, 'elevation')

export function useElevation(
  props: MaybeRef<ElevationProps>,
  name = getCurrentInstanceName(),
) {
  const elevationClasses = computed(() => {
    const { elevation } = unref(props)

    const classes: string[] = []

    if (elevation == null) return classes

    classes.push(`${ name }--elevation-${ elevation }`)

    return classes
  })

  return { elevationClasses }
}
