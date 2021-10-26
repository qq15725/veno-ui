// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

export interface ShadowProps
{
  shadow?: number | string | null
}

// Composables
export const makeShadowProps = propsFactory({
  shadow: {
    type: [Number, String],
    validator (v: any) {
      const value = parseInt(v)

      return !isNaN(value) && value >= 0 && value <= 24
    },
  },
}, 'shadow')

export function useShadow (props: MaybeRef<ShadowProps>) {
  const shadowClasses = computed(() => {
    const { shadow } = unref(props)

    const classes: string[] = []

    if (shadow == null) return classes

    classes.push(`shadow-${ shadow }`)

    return classes
  })

  return { shadowClasses }
}
