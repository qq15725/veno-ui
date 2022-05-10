// Utils
import { computed, unref } from 'vue'
import { getCurrentInstanceName, propsFactory } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

export interface DisabledProps {
  disabled?: boolean
}

export const makeDisabledProps = propsFactory({
  disabled: Boolean,
}, 'disabled')

export function useDisabled(
  props: MaybeRef<DisabledProps>,
  name = getCurrentInstanceName(),
) {
  return {
    disabledClasses: computed(() => {
      const { disabled } = unref(props)

      return {
        [`${ name }--disabled`]: disabled,
      }
    }),
  }
}
