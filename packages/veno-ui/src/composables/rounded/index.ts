// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

export interface RoundedProps
{
  rounded?: boolean | string | number | null
  tile?: boolean
}

// Composables
export const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: undefined,
  },
  tile: Boolean,
}, 'rounded')

export function useRounded (props: MaybeRef<RoundedProps>, name: string) {
  const roundedClasses = computed(() => {
    const { tile, rounded } = unref(props)
    const classes: string[] = []
    if (tile) {
      classes.push(`${ name }--tile`)
    } else if (rounded === true || rounded === '') {
      classes.push(`${ name }--rounded`)
    } else if (typeof rounded === 'string' || rounded === 0) {
      for (const value of String(rounded).split(' ')) {
        classes.push(`rounded-${ value }`)
      }
    }
    return classes
  })

  return {
    roundedClasses,
  }
}
