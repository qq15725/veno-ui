import { defineComponent } from 'vue'

import { createDragSortProvider } from '../../composables/drag-sort'

export default defineComponent({
  name: 'VeDragSortProvider',
  setup (props, { slots }) {
    createDragSortProvider()

    return () => (
      slots.default?.()
    )
  }
})