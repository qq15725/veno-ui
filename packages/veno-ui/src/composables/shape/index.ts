// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

// Constants
export const SHAPES = ['tile', 'round', 'pill', 'circle'] as const

const ALIASES = {
  'tile': 'rounded-0',
  'round': 'rounded-xl',
  'pill': 'rounded-pill',
  'circle': 'rounded-circle',
}

type ShapeValue = undefined | typeof SHAPES[number] | string

export interface ShapeProps
{
  shape: ShapeValue
}

export const makeShapeProps = propsFactory({
  shape: String as PropType<ShapeValue>,
}, 'shape')

export function useShape (props: MaybeRef<ShapeProps>) {
  const shapeClasses = computed(() => {
    let { shape } = unref(props)

    if (shape && shape in ALIASES) {
      shape = ALIASES[shape as keyof typeof ALIASES]
    }

    return shape
  })

  return {
    shapeClasses,
  }
}
