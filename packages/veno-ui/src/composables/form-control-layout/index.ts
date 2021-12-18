// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Constants
const LAYOUTS = ['horizontal', 'vertical', 'inline'] as const

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type FormControlLayout = typeof LAYOUTS[number]

export interface FormControlLayoutProps
{
  layout: FormControlLayout
}

// Composables
export const makeFormControlLayoutProps = propsFactory({
  layout: {
    type: String as PropType<FormControlLayout>,
    default: 'horizontal',
    validator: (v: any) => LAYOUTS.includes(v),
  },
}, 'form-control-layout')

export function useFormControlLayoutProps (
  props: MaybeRef<FormControlLayoutProps>,
  name = getCurrentInstanceName()
) {
  const formControlLayoutClasses = computed(() => {
    const { layout } = unref(props)

    return `${ name }--layout-${ layout }`
  })

  return { formControlLayoutClasses }
}
