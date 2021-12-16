import { defineComponent, computed } from 'vue'

import { makeDragSortProps, useDragSort } from '../../composables/drag-sort'

export const DragSort = defineComponent({
  name: 'VeDragSort',

  props: {
    itemKey: [String, Function],
    ...makeDragSortProps(),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
    'change': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const { items, makeDrag, makeDragArea } = useDragSort(props)

    const computedItems = computed(() => {
      return items.value.map((item, index) => {
        return {
          ...makeDrag(index),
          ...makeDragArea(index),
          item,
        }
      })
    })

    const { dragAreaOn } = makeDragArea()

    return () => {
      return <>
        { slots.prepend?.({ dragAreaOn, on: dragAreaOn }) }

        { computedItems.value.flatMap(({ item, dragOn, dragNode, dragAreaOn }, index) => {
          return slots
            .item?.({
              item,
              index,
              dragOn,
              dragAreaOn,
              on: { ...dragOn, ...dragAreaOn },
            })
            .map(node => {
              if (props.itemKey) {
                node.key = typeof props.itemKey === 'function'
                  ? props.itemKey(item, index)
                  : item[props.itemKey]
              }

              return node
            })
        }) }

        { slots.append?.({ dragAreaOn, on: dragAreaOn }) }
      </>
    }
  }
})