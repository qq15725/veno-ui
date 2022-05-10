// Utils
import { computed, unref } from 'vue'
import { convertToUnit, propsFactory } from '../../utils'

// Types
import type { ExtractPropTypes } from 'vue'
import type { MaybeRef } from '../../utils'

export type DimensionProps = ExtractPropTypes<ReturnType<typeof makeDimensionProps>>

export const makeDimensionProps = propsFactory({
  /**
   * @zh 高度
   */
  height: [Number, String],

  /**
   * @zh 最大高度
   */
  maxHeight: [Number, String],

  /**
   * @zh 最大宽度
   */
  maxWidth: [Number, String],

  /**
   * @zh 最小高度
   */
  minHeight: [Number, String],

  /**
   * @zh 最小宽度
   */
  minWidth: [Number, String],

  /**
   * @zh 宽度
   */
  width: [Number, String],
}, 'dimension')

export function useDimension(
  props: MaybeRef<DimensionProps>,
) {
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
    }),
  }
}
