// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '../../utils'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

// Constants
export const SHAPES = [
  'tile',
  'rounded-sm',
  'rounded',
  'pill',
  'circle',
] as const

type ShapeProp = typeof SHAPES[number]

export interface ShapeProps
{
  shape?: ShapeProp
}

export const makeShapeProps = propsFactory({
  shape: {
    type: String as PropType<ShapeProp>,
    default: 'tile',
  },
}, 'shape')

export function useShape (
  props: MaybeRef<ShapeProps>,
  name = getCurrentInstanceName()
) {
  const shapeClasses = computed(() => {
    let { shape } = unref(props)
    if (!shape || !SHAPES.includes(shape)) return null
    return `${ name }--shape-${ shape }`
  })

  return {
    shapeClasses,
  }
}
