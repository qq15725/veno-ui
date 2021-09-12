import { defineComponent } from 'vue'

import { makeDragsortProps, useDragsort } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSort',
  props: {
    itemKey: {
      type: [String, Function],
      required: true,
    },
    ...makeDragsortProps(),
  },
  setup (props, { slots }) {
    const { items, makeOn, makeDragAreaOn } = useDragsort(props)

    const dragAreaOn = makeDragAreaOn()

    return () => {
      return [
        slots.prepend?.({ on: dragAreaOn }),

        items.value.flatMap((item, index) => {
          return slots
            .item?.({
              item,
              index,
              on: makeOn(index),
            })
            .map(node => {
              node.key = typeof props.itemKey === 'function'
                ? props.itemKey(item)
                : item[props.itemKey]
              return node
            })
        }),

        slots.append?.({ on: dragAreaOn }),
      ]
    }
  }
})