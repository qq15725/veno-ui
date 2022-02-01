// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Composables
import { useColor } from '../color'

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export const variants = [
  'contained', 'outlined', 'plain', 'text',
  'contained-text', 'contained-outlined'
] as const

export type Variant = typeof variants[number]

export interface VariantProps
{
  color?: string
  textColor?: string
  variant: Variant
}

export function genOverlays (isClickable: boolean, name: string) {
  return (
    <>
      { isClickable && <div class={ `${ name }__overlay` } /> }

      <div class={ `${ name }__underlay` } />
    </>
  )
}

export const makeVariantProps = propsFactory({
  color: String,
  textColor: String,
  variant: {
    type: String as PropType<Variant>,
    default: 'contained',
    validator: (v: any) => variants.includes(v),
  },
}, 'variant')

export function useVariant (
  props: MaybeRef<VariantProps>,
  name = getCurrentInstanceName()
) {
  const variant = computed(() => {
    const { variant } = unref(props)
    return variant
  })

  const colors = computed(() => {
    const { textColor, color, variant } = unref(props)
    if (variant === 'contained') {
      return {
        text: textColor,
        background: color,
      }
    }
    return {
      text: color ?? textColor,
    }
  })

  const variantClasses = computed(() => {
    return [
      `${ name }--variant-${ variant.value }`,
    ]
  })

  const variantStyles = computed(() => {
    const styles: Record<string, any> = {}
    if ((variant.value === 'outlined' || variant.value === 'contained-outlined')
      && colors.value.text !== undefined) {
      styles.borderColor = 'currentColor'
    }
    return styles
  })

  const { colorClasses, colorStyles } = useColor(colors)

  return { colorClasses, colorStyles, variantClasses, variantStyles }
}
