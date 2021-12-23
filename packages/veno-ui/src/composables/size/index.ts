// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName, convertToUnit } from '../../utils'

// Constants
const sizeAliases = {
  'xs': 'x-small',
  'sm': 'small',
  'md': 'medium',
  'lg': 'large',
  'xl': 'x-large',
}

export const sizes = [
  'x-small', 'small', 'medium', 'large', 'x-large',
  'xs', 'sm', 'md', 'lg', 'xl',
]

// Types
import type { MaybeRef } from '../../utils'

export interface SizeProps
{
  size?: string | number | null
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

    if (!name || !size || !sizes.includes(size as string)) return null

    if (size in sizeAliases) {
      size = sizeAliases[size as keyof typeof sizeAliases]
    }

    return `${ name }--size-${ size }`
  })

  const sizeStyles = computed(() => {
    const { size } = unref(props)

    if (!size || sizes.includes(size as string)) return null

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
