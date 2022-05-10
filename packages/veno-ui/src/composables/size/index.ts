// Utils
import { computed, unref } from 'vue'
import { convertToUnit, getCurrentInstanceName, propsFactory } from '../../utils'

// Types
import type { ExtractPropTypes, PropType } from 'vue'
import type { MaybeRef } from '../../utils'

// Constants
const aliases = {
  xs: 'x-small',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'x-large',
} as const

export const SIZES = [
  ...Object.keys(aliases),
  ...new Set(Object.values(aliases)),
]

export type Size = string | number | typeof SIZES[number]

export type SizeProps = ExtractPropTypes<ReturnType<typeof makeSizeProps>>

export const makeSizeProps = propsFactory({
  /**
   * @zh 大小
   */
  size: {
    type: [String, Number] as PropType<Size | undefined>,
    default: 'medium',
  },
}, 'size')

export function useSize(
  props: MaybeRef<SizeProps>,
  name = getCurrentInstanceName(),
) {
  const sizeClasses = computed(() => {
    let { size } = unref(props)
    if (!name || !size || !SIZES.includes(size as string)) return null
    if (size in aliases) size = aliases[size as keyof typeof aliases]
    return `${ name }--size-${ size }`
  })

  const sizeStyles = computed(() => {
    const { size } = unref(props)
    if (!size || SIZES.includes(size as string)) return {}
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
