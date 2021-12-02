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

    if (variant === 'contained' && color) {
      styles['--ve-variant-border-width'] = 0
    }

    return styles
  })

  return { colorClasses, colorStyles, variantClasses }
}
