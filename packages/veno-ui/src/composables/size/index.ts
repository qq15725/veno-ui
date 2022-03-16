// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName, convertToUnit } from '../../utils'

// Constants
const aliases = {
  'xs': 'x-small',
  'sm': 'small',
  'md': 'medium',
  'lg': 'large',
  'xl': 'x-large',
} as const

export const sizes = [
  ...Object.keys(aliases),
  ...new Set(Object.values(aliases))
]

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type Size = string | number | typeof sizes[number]

export interface SizeProps
{
  size?: Size
}

export const makeSizeProps = propsFactory({
  /**
   * @zh 大小
   */
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'medium',
  },
}, 'size')

export function useSize (
  props: MaybeRef<SizeProps>,
  name = getCurrentInstanceName()
) {
  const sizeClasses = computed(() => {
    let { size } = unref(props)
    if (!name || !size || !sizes.includes(size as string)) return null
    if (size in aliases) size = aliases[size as keyof typeof aliases]
    return `${ name }--size-${ size }`
  })

  const sizeStyles = computed(() => {
    const { size } = unref(props)
    if (!size || sizes.includes(size as string)) return {}
    return {
      width: convertToUnit(size),
      height: convertToUnit(size),
    }
  })

  return {
    sizeClasses,
    sizeStyles,
  }
}
