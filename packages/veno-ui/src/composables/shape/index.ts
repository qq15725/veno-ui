// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export const SHAPES = [
  'rounded-0',
  'rounded-xs', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl',
  'rounded-pill', 'rounded-circle',
] as const

type ShapeValue = undefined | typeof SHAPES[number]

export interface ShapeProps
{
  shape: ShapeValue
}

export const makeShapeProps = propsFactory({
  shape: String as PropType<ShapeValue>,
}, 'shape')

export function useShape (props: MaybeRef<ShapeProps>) {
  const shapeClasses = computed(() => {
    const { shape } = unref(props)
    return shape
  })

  return {
    shapeClasses,
  }
}
