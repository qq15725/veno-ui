// Utils
import { computed, CSSProperties, unref } from 'vue'
import { propsFactory } from '../../utils'

// Composables
import { useColor } from '../color'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

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
    default: 'contained',
    validator: (v: any) => allowedVariants.includes(v),
  },
  dashed: Boolean,
}, 'variant')

export function useVariant (props: MaybeRef<VariantProps>, name: string) {
  const variantClasses = computed(() => {
    const { variant } = unref(props)

    return [
      `${ name }--variant-${ variant }`,
    ]
  })

  const { colorClasses, colorStyles: _colorStyles } = useColor(computed(() => {
    const { textColor, variant, color } = unref(props)

    return {
      text: textColor,
      [variant === 'contained' ? 'background' : 'text']: color,
    }
  }))

  const colorStyles = computed(() => {
    const styles: any = { ..._colorStyles.value }

    const { variant, color } = unref(props)

    if (variant === 'contained' && color !== undefined) {
      styles['--ve-variant-border-width'] = 0
    }

    return styles
  })

  return { colorClasses, colorStyles, variantClasses }
}
