// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Types
import type { ExtractPropTypes, PropType } from 'vue'
import type { MaybeRef } from '@veno-ui/utils'

// Constants
export const SHAPES = [
  'tile',
  'rounded-sm',
  'rounded',
  'rounded-lg',
  'pill',
  'circle',
] as const

type ShapeProp = typeof SHAPES[number]

export type ShapeProps = ExtractPropTypes<ReturnType<typeof makeShapeProps>>

export const makeShapeProps = propsFactory({
  shape: {
    type: String as PropType<ShapeProp>,
    default: 'tile',
  },
}, 'shape')

export function useShape(
  props: MaybeRef<ShapeProps>,
  name = getCurrentInstanceName(),
) {
  const shapeClasses = computed(() => {
    const { shape } = unref(props)
    if (!shape || !SHAPES.includes(shape)) return null
    return `${ name }--shape-${ shape }`
  })

  return {
    shapeClasses,
  }
}
