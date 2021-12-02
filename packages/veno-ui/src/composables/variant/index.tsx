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
  contained?: boolean
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
  dashed: Boolean,
}, 'variant')

export function useVariant (props: MaybeRef<VariantProps>, name: string) {
  const isContained = computed(() => {
    const { variant, contained } = unref(props)
    return variant === 'contained' || !!contained
  })

  const variantClasses = computed(() => {
    const { variant } = unref(props)
    return [
      `${ name }--variant-${ variant }`,
    ]
  })

  const { colorClasses, colorStyles: _colorStyles } = useColor(computed(() => {
    const { textColor, color } = unref(props)
    return {
      text: textColor,
      [isContained.value ? 'background' : 'text']: color,
    }
  }))

  const colorStyles = computed(() => {
    const { color } = unref(props)
    const styles: any = { ..._colorStyles.value }
    if (isContained.value && color) {
      styles['--ve-variant-border-width'] = 0
    }
    return styles
  })

  return { colorClasses, colorStyles, variantClasses }
}
