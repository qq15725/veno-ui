import { defineComponent, computed } from 'vue'

import { makeDragsortProps, useDragsort } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSort',

  props: {
    itemKey: [String, Function],
    ...makeDragsortProps(),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
    'change': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const { items, makeDrag, makeDragArea } = useDragsort(props)

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
              if (!dragNode.value) dragNode.value = node

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