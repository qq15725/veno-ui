// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Constants
export const SHAPES = ['tile', 'default', 'rounded'] as const

// Types
import type { MaybeRef } from '../../utils'

export interface ShapeProps
{
  rounded?: boolean | string | number | null
  tile?: boolean
}

export const makeShapeProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: undefined,
  },
  tile: Boolean,
}, 'rounded')

export function useShape (props: MaybeRef<ShapeProps>, name: string) {
  const shapeClasses = computed(() => {
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
    shapeClasses,
  }
}
