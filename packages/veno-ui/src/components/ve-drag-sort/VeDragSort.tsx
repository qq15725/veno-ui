import { defineComponent } from 'vue'

import { makeDragsortProps, useDragsort } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSort',
  props: {
    ...makeDragsortProps(),
  },
  setup (props, { slots }) {
    const { items, makeOn } = useDragsort(props)

    return () => {
      return items.value.map((item, index) => {
        return slots.item?.({
          item,
          index,
          on: makeOn(index),
        })
      })
    }
  }
})