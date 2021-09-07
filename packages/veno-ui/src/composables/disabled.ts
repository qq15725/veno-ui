import { computed } from 'vue'
import { propsFactory } from '../utils'

export interface DisabledProps
{
  disabled?: boolean
}

export const makeDisabledProps = propsFactory({
  disabled: Boolean,
}, 'disabled')

export function useDisabled (props: DisabledProps, name: string) {
  return {
    disabledClasses: computed(() => ({
      [`${ name }--disabled`]: props.disabled,
    })),
  }
}
