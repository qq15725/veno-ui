// Utilities
import { computed } from 'vue'
import { propsFactory } from '../utils'

// Types
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

export function useRounded (props: RoundedProps, name: string) {
  return {
    roundedClasses: computed(() => {
      const classes: string[] = []

      switch (true) {
        case props.tile:
          classes.push(`${ name }--tile`)
          break
        case props.rounded === true || props.rounded === '':
          classes.push(`${ name }--rounded`)
          break
        case typeof props.rounded === 'string' || props.rounded === 0:
          for (const value of String(props.rounded).split(' ')) {
            classes.push(`rounded-${ value }`)
          }
          break
      }

      return classes
    })
  }
}
