// Utils
import { computed, unref } from 'vue'
import { convertToUnit, propsFactory } from '../../utils'

// Constants
export const SIZES = ['x-small', 'small', 'default', 'large', 'x-large']

// Types
import type { MaybeRef } from '../../utils'
type Size = typeof SIZES[number]

export interface SizeProps
{
  size?: string | number
}

export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default',
  },
}, 'size')

export function useSize (props: MaybeRef<SizeProps>, name?: string) {
  const sizeClasses = computed(() => {
    const { size } = unref(props)

    if (!name || !size || !SIZES.includes(size as string)) return null

    return `${ name }--size-${ size }`
  })

  const sizeStyles = computed(() => {
    const { size } = unref(props)

    if (SIZES.includes(size as string)) return null

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
