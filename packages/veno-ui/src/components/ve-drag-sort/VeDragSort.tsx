import { defineComponent } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { makeDragsortProps, useDragsort } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSort',
  props: {
    ...makeTagProps(),
    ...makeDragsortProps(),
  },
  setup (props, { slots }) {
    const { items, makeOn } = useDragsort(props)

    const Tag = props.tag

    return () => {
      return (
        <Tag>
          {
            items.value.map((item, index) => {
              return slots.item?.({
                item,
                on: makeOn(index),
              })
            })
          }
        </Tag>
      )
    }
  }
})