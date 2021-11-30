import { defineComponent } from 'vue'

import { createDragSortProvider } from '../../composables/drag-sort'

export const DragSortProvider = defineComponent({
  name: 'DragSortProvider',
  setup (props, { slots }) {
    createDragSortProvider()

    return () => (
      slots.default?.()
    )
  }
})