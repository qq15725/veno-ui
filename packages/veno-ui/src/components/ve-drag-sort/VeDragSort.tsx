import './styles/ve-drag-sort.scss'

import { defineComponent } from 'vue'

import { makeDragsortProps, useDragsort } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeDragSort',
  props: {
    full: Boolean,
    absolute: Boolean,
    ...makeDragsortProps(),
  },
  setup (props, { slots }) {
    const { items, makeOn, makeDragAreaOn } = useDragsort(props)

    const dragAreaOn = makeDragAreaOn()

    return () => {
      return (
        items.value.length > 0 ? (
          items.value.map((item, index) => {
            return slots.item?.({
              item,
              index,
              on: makeOn(index),
            })
          })
        ) : (
          <div
            class={ [
              've-drag-sort',
              {
                've-drag-sort--full': props.full,
                've-drag-sort--absolute': props.absolute,
              }
            ] }
            onDragenter={ dragAreaOn.dragenter }
            onDragover={ dragAreaOn.dragover }
          />
        )
      )
    }
  }
})