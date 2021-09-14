// Composables
import { useColor } from '../composables/color'

// Utilities
import { computed, unref } from 'vue'
import { propsFactory } from '../utils'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../utils'

export const allowedVariants = [
  'outlined',
  'contained',
  'text',
] as const

export type Variant = typeof allowedVariants[number]

export interface VariantProps
{
  color?: string
  textColor?: string
  variant: Variant
}

export const makeVariantProps = propsFactory({
  color: String,
  textColor: String,
  variant: {
    type: String as PropType<Variant>,
    default: 'outlined',
    validator: (v: any) => allowedVariants.includes(v),
  },
  dashed: Boolean,
}, 'variant')

export function useVariant (props: MaybeRef<VariantProps>, name: string) {
  const variantClasses = computed(() => {
    const { variant, color } = unref(props)

    return {
      [`${ name }--variant-${ variant }`]: true,
      [`${ name }--variant-custom-color`]: !!color,
    }
  })

  const { colorClasses, colorStyles } = useColor(computed(() => {
    const { textColor, variant, color } = unref(props)

    return {
      text: textColor,
      [variant === 'contained' ? 'background' : 'text']: color,
    }
  }))

  return { colorClasses, colorStyles, variantClasses }
}
