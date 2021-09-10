import { defineComponent } from 'vue'

import { createDragsortGroup } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSortGroup',
  setup (props, { slots }) {
    createDragsortGroup()

    return () => {
      return slots.default?.()
    }
  }
})