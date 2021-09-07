import { computed } from 'vue'
import { convertToUnit, propsFactory } from '../utils'

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

export function useSize (props: SizeProps, name?: string) {
  return {
    sizeClasses: computed(() => {
      return name && predefinedSizes.includes(props.size as string)
        ? `${ name }--size-${ props.size }`
        : null
    }),
    sizeStyles: computed(() => {
      if (!predefinedSizes.includes(props.size as string) && props.size) {
        return {
          width: convertToUnit(props.size),
          height: convertToUnit(props.size),
        }
      }

      return null
    })
  }
}
