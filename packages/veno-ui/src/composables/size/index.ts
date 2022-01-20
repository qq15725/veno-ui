// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName, convertToUnit } from '../../utils'

// Constants
export const SIZES = [
  'xs', 'sm', 'md', 'lg', 'xl',
  'x-small', 'small', 'medium', 'large', 'x-large',
]

const ALIASES = {
  'x-small': 'xs',
  'small': 'sm',
  'medium': 'md',
  'large': 'lg',
  'x-large': 'xl',
}

// Types
import type { MaybeRef } from '../../utils'

export interface SizeProps
{
  size?: string | number
}

export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'md',
  },
}, 'size')

export function useSize (
  props: MaybeRef<SizeProps>,
  name = getCurrentInstanceName()
) {
  const sizeClasses = computed(() => {
    let { size } = unref(props)

    if (!name || !size || !SIZES.includes(size as string)) return null

    if (size in ALIASES) {
      size = ALIASES[size as keyof typeof ALIASES]
    }

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
