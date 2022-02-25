// Utils
import { computed } from 'vue'
import { propsFactory } from '../../utils'

// Types
import type { ExtractPropTypes } from 'vue'

export const makeScrollbar = propsFactory({
  beautifyScrollbar: {
    type: Boolean,
    default: true,
  },
}, 'scrollbar')

export function useScrollbar (props: ExtractPropTypes<ReturnType<typeof makeScrollbar>>) {
  const scrollbarClasses = computed(() => (
    props.beautifyScrollbar ? 'beautify-scrollbar' : null
  ))

  return {
    scrollbarClasses,
  }
}