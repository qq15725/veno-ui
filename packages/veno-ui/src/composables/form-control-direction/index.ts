// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Constants
const DIRECTIONS = ['horizontal', 'vertical', 'inline'] as const

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type FormControlDirection = typeof DIRECTIONS[number]

export interface FormControlDirectionProps
{
  direction: FormControlDirection
}

// Composables
export const makeFormControlDirectionProps = propsFactory({
  direction: {
    type: String as PropType<FormControlDirection>,
    default: 'horizontal',
    validator: (v: any) => DIRECTIONS.includes(v),
  },
}, 'form-control-direction')

export function useFormControlDirectionProps (
  props: MaybeRef<FormControlDirectionProps>,
  name = getCurrentInstanceName()
) {
  const formControlDirectionClasses = computed(() => {
    const { direction } = unref(props)

    return `${ name }--${ direction }`
  })

  return { formControlDirectionClasses }
}
