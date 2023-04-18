// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Composables
import { useColor } from '../color'

// Types
import type { ExtractPropTypes, PropType } from 'vue'
import type { MaybeRef } from '@veno-ui/utils'

export type VariantProps = ExtractPropTypes<ReturnType<typeof makeVariantProps>>

// Constants
export const VARIANTS = [
  'contained', 'outlined', 'plain', 'text',
  'contained-text', 'contained-outlined',
] as const

export function genOverlays(isClickable: boolean, name: string) {
  return (
    <>
      { isClickable && <div aria-hidden="true" class={ `${ name }__overlay` } /> }
      <div aria-hidden="true" class={ `${ name }__underlay` } />
      <div aria-hidden="true" class={ `${ name }__border` } />
    </>
  )
}

export const makeVariantProps = propsFactory({
  /**
   * @zh 颜色
   */
  color: String,

  /**
   * @zh 文本颜色
   */
  textColor: String,

  /**
   * @zh 变体
   */
  variant: {
    type: String as PropType<typeof VARIANTS[number]>,
    default: 'contained',
    validator: (v: any) => VARIANTS.includes(v),
  },
}, 'variant')

export function useVariant(
  props: MaybeRef<VariantProps>,
  name = getCurrentInstanceName(),
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

  const { colorClasses, colorStyles } = useColor(colors)

  return { colorClasses, colorStyles, variantClasses }
}
