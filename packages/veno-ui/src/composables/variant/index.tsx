// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Composables
import { useColor } from '../color'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type Variant = 'outlined' | 'contained' | 'text' | string

export interface VariantProps
{
  color?: string | false | null
  textColor?: string | false | null
  variant: Variant
}

export const makeVariantProps = propsFactory({
  color: {
    type: [String, Boolean] as PropType<string | false | null>,
    default: undefined,
  },
  textColor: {
    type: [String, Boolean] as PropType<string | false | null>,
    default: undefined,
  },
  variant: {
    type: String as PropType<Variant>,
    default: 'contained',
  },
}, 'variant')

export function useVariant (props: MaybeRef<VariantProps>, name: string) {
  const variantClasses = computed(() => {
    const { variant } = unref(props)
    return [
      `${ name }--variant-${ variant }`,
    ]
  })

  const { colorClasses, colorStyles } = useColor(computed(() => {
    const { textColor, color, variant } = unref(props)
    switch (variant) {
      case 'outlined':
      case 'text':
        return {
          text: color,
        }
      case 'contained':
      default:
        return {
          text: textColor,
          background: color,
        }
    }
  }))

  return { colorClasses, colorStyles, variantClasses }
}
