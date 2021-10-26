// Utils
import { computed, unref } from 'vue'
import { convertToUnit, propsFactory } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

export interface DimensionProps
{
  height?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  width?: number | string
}

export const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String],
}, 'dimension')

export function useDimension (props: MaybeRef<DimensionProps>) {
  return {
    dimensionStyles: computed(() => {
      const { height, maxHeight, maxWidth, minHeight, minWidth, width } = unref(props)

      return {
        height: convertToUnit(height),
        maxHeight: convertToUnit(maxHeight),
        maxWidth: convertToUnit(maxWidth),
        minHeight: convertToUnit(minHeight),
        minWidth: convertToUnit(minWidth),
        width: convertToUnit(width),
      }
    })
  }
}
