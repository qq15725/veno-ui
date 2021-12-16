// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

export interface BorderProps
{
  border?: boolean | number | string
}

export const makeBorderProps = propsFactory({
  border: [Boolean, Number, String],
}, 'border')

export function useBorder (
  props: MaybeRef<BorderProps>,
  name = getCurrentInstanceName()
) {
  const borderClasses = computed(() => {
    const { border } = unref(props)
    const classes: string[] = []
    if (border != null && border !== false) {
      classes.push(`${ name }--border`)
    }
    if ((typeof border === 'string' && border !== '') || border === 0) {
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
