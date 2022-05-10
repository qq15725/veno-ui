// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '../../utils'

// Types
import type { ExtractPropTypes } from 'vue'
import type { MaybeRef } from '../../utils'

export type BorderProps = ExtractPropTypes<ReturnType<typeof makeBorderProps>>

export const makeBorderProps = propsFactory({
  border: [Boolean, Number, String],
}, 'border')

export function useBorder(
  props: MaybeRef<BorderProps>,
  name = getCurrentInstanceName(),
) {
  const borderClasses = computed(() => {
    const { border } = unref(props)
    const classes: string[] = []

    if (border === true) {
      classes.push(`${ name }--border`)
    } else if ((typeof border === 'string' && border !== '') || border === 0) {
      for (const value of String(border).split(' ')) {
        classes.push(`border-${ value }`)
      }
    }

    return classes
  })

  return {
    borderClasses,
  }
}
