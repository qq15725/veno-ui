// Styles
import './styles/draggable-sortable.scss'

// Utils
import { cloneVNode, computed, mergeProps, toHandlers, watch } from 'vue'
import { defineComponent, isComponentInstance } from '../../utils'

// Composables
import { makeDraggableSortableProps, useDraggableSortable } from '../../composables/draggable-sortable'

export const DraggableSortable = defineComponent({
  name: 'VeDraggableSortable',

  inheritAttrs: false,

  props: {
    ...makeDraggableSortableProps(),
  },

  emits: {
    'update:modelValue': (_modelValue: any[]) => true,
  },

  setup(props, { slots }) {
    const {
      model, modelEls, active, pointerEvents,
      keyToIndex, indexToKey,
      ghostVNode, genGhost,
    } = useDraggableSortable(props)

    const vnodes = computed(() => {
      return model.value.map((value, index) => {
        const key = indexToKey(index)
        const draggable = mergeProps(toHandlers(pointerEvents.value), {
          style: {
            cursor: 'move',
          },
        })
        const droppable = {
          ref: (v: any) => {
            modelEls.set(key, isComponentInstance(v) ? v.$el : v)
          },
        }

        const vnode = slots.item?.({
          item: value,
          draggable,
          droppable,
          props: mergeProps(draggable, droppable),
        })

        if (vnode && vnode[0]) {
          if (!vnode[0].key) vnode[0].key = key
          vnode[0].props = mergeProps(vnode[0].props || {}, {
            class: {
              've-draggable-sortable--active': key === active.value,
            },
          })
        }

        return vnode
      })
    })

    watch(active, val => {
      const vnode = vnodes.value[keyToIndex(val)!]?.[0]
      if (vnode) {
        ghostVNode.value = cloneVNode(vnode)
      } else {
        ghostVNode.value = undefined
      }
    })

    return () => {
      return (
<>
        { vnodes.value }

        { ghostVNode.value && genGhost() }
      </>
      )
    }
  },
})
