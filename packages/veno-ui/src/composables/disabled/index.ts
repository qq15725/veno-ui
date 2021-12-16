// Utils
import { computed } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

export interface DisabledProps
{
  disabled?: boolean
}

export const makeDisabledProps = propsFactory({
  disabled: Boolean,
}, 'disabled')

export function useDisabled (
  props: DisabledProps,
  name = getCurrentInstanceName()
) {
  return {
    disabledClasses: computed(() => ({
      [`${ name }--disabled`]: props.disabled,
    })),
  }
}
