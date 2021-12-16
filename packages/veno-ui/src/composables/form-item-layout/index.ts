// Utils
import { computed, unref } from 'vue'
import { propsFactory } from '../../utils'

// Constants
const LAYOUTS = ['horizontal', 'vertical', 'inline'] as const

// Types
import type { PropType } from 'vue'
import type { MaybeRef } from '../../utils'

export type FormItemLayout = typeof LAYOUTS[number]

export interface FormItemLayoutProps
{
  layout: FormItemLayout
}

// Composables
export const makeFormItemLayoutProps = propsFactory({
  layout: {
    type: String as PropType<FormItemLayout>,
    default: 'horizontal',
    validator: (v: any) => LAYOUTS.includes(v),
  },
}, 'form-item-layout')

export function useFormItemLayoutProps (props: MaybeRef<FormItemLayoutProps>, name: string) {
  const formItemLayoutClasses = computed(() => {
    const { layout } = unref(props)

    return `${ name }--layout-${ layout }`
  })

  return { formItemLayoutClasses }
}
