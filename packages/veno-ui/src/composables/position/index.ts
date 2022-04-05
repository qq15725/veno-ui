// Utils
import { computed, unref } from 'vue'
import { propsFactory, convertToUnit, getCurrentInstanceName } from '../../utils'

// Constants
export const POSITIONS = ['static', 'relative', 'fixed', 'absolute', 'sticky'] as const

// Types
import type { ExtractPropTypes, PropType } from 'vue'
import type { MaybeRef } from '../../utils'

type Position = typeof POSITIONS[number]

export type PositionProps = ExtractPropTypes<ReturnType<typeof makePositionProps>>

export const makePositionProps = propsFactory({
  /**
   * @zh 采用绝对定位
   */
  absolute: Boolean,

  /**
   * @zh 底部位置
   */
  bottom: [Boolean, Number, String],

  /**
   * @zh 采用固定定位
   */
  fixed: Boolean,

  /**
   * @zh 左侧位置
   */
  left: [Boolean, Number, String],

  /**
   * @zh 采用的定位模式
   */
  position: {
    type: String as PropType<Position>,
    validator: /* istanbul ignore next */ (v: any) => POSITIONS.includes(v),
  },

  /**
   * @zh 右侧位置
   */
  right: [Boolean, Number, String],

  /**
   * @zh 顶部位置
   */
  top: [Boolean, Number, String],
}, 'position')

export function usePosition (
  props: MaybeRef<PositionProps>,
  name = getCurrentInstanceName()
) {
  const targets = ['top', 'right', 'bottom', 'left'] as const

  const positionClasses = computed(() => {
    const { fixed, absolute, position } = unref(props)
    if (fixed) {
      return `${ name }--fixed`
    } else if (absolute) {
      return `${ name }--absolute`
    } else if (!!position) {
      return `position-${ position }`
    }
    return null
  })

  const positionStyles = computed(() => {
    const unrefedProps = unref(props)
    const styles: Partial<Record<typeof targets[number], string>> = {}
    for (const target of targets) {
      const prop = unrefedProps[target]
      if (prop == null || prop === false) continue
      styles[target] = convertToUnit(prop === true ? '0' : String(prop))
    }
    return styles
  })

  return {
    positionClasses,
    positionStyles,
  }
}
