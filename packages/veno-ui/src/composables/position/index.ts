// Utils
import { computed, unref } from 'vue'
import { propsFactory, convertToUnit, getCurrentInstanceName } from '../../utils'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

const positionValues = ['static', 'relative', 'fixed', 'absolute', 'sticky'] as const

type Position = typeof positionValues[number]

export interface PositionProps
{
  absolute?: boolean
  bottom?: boolean | number | string
  fixed?: boolean
  left?: boolean | number | string
  position?: Position
  right?: boolean | number | string
  top?: boolean | number | string
}

export const makePositionProps = propsFactory({
  absolute: Boolean,
  bottom: [Boolean, Number, String],
  fixed: Boolean,
  left: [Boolean, Number, String],
  position: {
    type: String as PropType<Position>,
    validator: /* istanbul ignore next */ (v: any) => positionValues.includes(v),
  },
  right: [Boolean, Number, String],
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
