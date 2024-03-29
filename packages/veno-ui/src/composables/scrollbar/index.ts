// Utils
import { computed } from 'vue'
import { getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Types
import type { ExtractPropTypes } from 'vue'

export const makeScrollbar = propsFactory({
  /**
   * @zh 美化滚动条
   */
  beautifyScrollbar: {
    type: Boolean,
    default: true,
  },
}, 'scrollbar')

export function useScrollbar(
  props: ExtractPropTypes<ReturnType<typeof makeScrollbar>>,
  name = getCurrentInstanceName(),
) {
  const scrollbarClasses = computed(() => (
    props.beautifyScrollbar ? `${ name }--beautify-scrollbar` : null
  ))

  return {
    scrollbarClasses,
  }
}
