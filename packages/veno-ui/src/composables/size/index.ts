// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName, convertToUnit } from '../../utils'

// Constants
export const SIZES = [
  'x-small', 'small', 'medium', 'large', 'x-large',
  'xs', 'sm', 'md', 'lg', 'xl',
]

const ALIASES = {
  'xs': 'x-small',
  'sm': 'small',
  'md': 'medium',
  'lg': 'large',
  'xl': 'x-large',
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
    default: 'medium',
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
