// Utils
import { computed, unref } from 'vue'
import { convertToUnit, propsFactory } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

export interface SizeProps
{
  size?: string | number
}

export const predefinedSizes = ['x-small', 'small', 'default', 'large', 'x-large']

export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default',
  },
}, 'size')

export function useSize (props: MaybeRef<SizeProps>, name?: string) {
  const sizeClasses = computed(() => {
    const { size } = unref(props)

    return name && predefinedSizes.includes(size as string)
      ? `${ name }--size-${ size }`
      : null
  })

  const sizeStyles = computed(() => {
    const { size } = unref(props)

    if (!predefinedSizes.includes(size as string) && size) {
      return {
        width: convertToUnit(size),
        height: convertToUnit(size),
      }
    }

    return null
  })

  return {
    sizeClasses,
    sizeStyles,
  }
}
