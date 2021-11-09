// Utils
import { computed, unref } from 'vue'
import { convertToUnit, propsFactory } from '../../utils'

// Constants
export const SIZES = [null, 'xs', 'sm', 'md', 'lg', 'xl']

// Types
import type { MaybeRef } from '../../utils'
type Size = typeof SIZES[number]

export interface SizeProps
{
  size?: string | number | null
}

export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'md',
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
