// Utils
import { toHandlers, mergeProps } from 'vue'
import { defineComponent, convertToUnit } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeDraggableProps, useDraggable } from '../../composables/draggable'

// Types
import type { PropType } from 'vue'

export const Draggable = defineComponent({
  name: 'VeDraggable',

  props: {
    modelValue: {
      type: Object as PropType<{
        left: string | number
        top: string | number
      }>,
      default: () => ({ left: 0, top: 0 })
    },

    ...makeDraggableProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const model = useProxiedModel(
      props, 'modelValue', props.modelValue,
      v => ({ left: parseFloat(v?.left || 0), top: parseFloat(v?.top || 0) }),
    )

    const {
      isDragging,
      draggableEvents,
    } = useDraggable(props, model)

    return () => {
      const draggable = mergeProps(toHandlers(draggableEvents.value), {
        style: props.draggable ? {
          cursor: 'move',
        } : null
      })

      const contentStyle = props.draggable ? {
        transform: `translate3d(${ convertToUnit(model.value.left) }, ${ convertToUnit(model.value.top) }, 0)`,
        userSelect: isDragging.value ? 'none' : undefined
      } : null

      return slots.default?.({
        value: model.value,
        draggable,
        contentStyle,
        props: mergeProps(draggable, {
          style: contentStyle,
        }),
      })
    }
  }
})