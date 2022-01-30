// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '../../utils'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

// Constants
export const shapes = [
  'tile',
  'rounded',
  'pill',
  'circle',
] as const

type ShapeValue = typeof shapes[number]

export interface ShapeProps
{
  shape?: ShapeValue
}

export const makeShapeProps = propsFactory({
  shape: {
    type: String as PropType<ShapeValue>,
    default: 'tile',
  },
}, 'shape')

export function useShape (
  props: MaybeRef<ShapeProps>,
  name = getCurrentInstanceName()
) {
  const shapeClasses = computed(() => {
    let { shape } = unref(props)
    if (!shape || !shapes.includes(shape)) return null
    return `${ name }--shape-${ shape }`
  })

  return {
    shapeClasses,
  }
}
