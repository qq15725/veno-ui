// Utilities
import { computed, getCurrentInstance } from 'vue'
import { convertToUnit, propsFactory, toKebabCase } from '../utils'

// Types
import type { PropType } from 'vue'

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

export function usePosition (props: PositionProps, name: string) {
  const targets = ['top', 'right', 'bottom', 'left'] as const

  return {
    positionClasses: computed(() => {
      switch (true) {
        case props.fixed:
          return `${ name }--fixed`
        case props.absolute:
          return `${ name }--absolute`
        case !!props.position:
          return `position-${ props.position }`
      }
    }),
    positionStyles: computed(() => {
      const styles: Partial<Record<typeof targets[number], string>> = {}

      for (const target of targets) {
        const prop = props[target]

        if (prop == null || prop === false) continue

        styles[target] = convertToUnit(prop === true ? '0' : String(prop))
      }

      return styles
    })
  }
}
