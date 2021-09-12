import { defineComponent } from 'vue'

import { makeDragsortProps, useDragsort } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSort',

  props: {
    itemKey: {
      type: [String, Function],
      default: (v: any, i: number) => typeof v === 'object'
        ? JSON.stringify(v)
        : v,
    },
    ...makeDragsortProps(),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
    'change': (value: boolean) => true,
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
                ? props.itemKey(item, index)
                : item[props.itemKey]
              return node
            })
        }),

        slots.append?.({ on: dragAreaOn }),
      ]
    }
  }
})