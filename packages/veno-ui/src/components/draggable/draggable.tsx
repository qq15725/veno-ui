// Utils
import { toHandlers, mergeProps } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeDraggableProps, useDraggable } from '../../composables/draggable'

// Types
import type { PropType } from 'vue'

export const Draggable = defineComponent({
  name: 'VeDraggable',

  inheritAttrs: false,

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
      v => ({
        left: parseFloat(v?.left || 0),
        top: parseFloat(v?.top || 0)
      })
    )

    const {
      draggableEvents,
      draggableStyles,
      contentStyles,
    } = useDraggable(props, model)

    return () => {
      const draggable = mergeProps(toHandlers(draggableEvents.value), {
        style: draggableStyles.value,
      })

      return slots.default?.({
        value: model.value,
        draggable,
        contentStyle: contentStyles.value,
        props: mergeProps(draggable, {
          style: contentStyles.value,
        }),
      })
    }
  }
})