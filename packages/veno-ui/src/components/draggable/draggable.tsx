// Styles
import './styles/draggable.scss'

// Utils
import { ref, watch, toHandlers, mergeProps, computed } from 'vue'
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
      v => ({
        left: v?.left ? parseFloat(v?.left) : 0,
        top: v?.top ? parseFloat(v?.top) : 0,
      }),
    )

    const previous = ref({ ...model.value })

    const {
      isDragging,
      draggableEvents,
      draggableMovement,
      draggableRef,
    } = useDraggable(props)

    watch(isDragging, val => {
      if (props.draggable && !val) {
        previous.value = { ...model.value }
      }
    })

    watch(draggableMovement, val => {
      if (!props.draggable || !isDragging.value || !val) return
      model.value = {
        ...model.value,
        top: previous.value.top + val.top,
        left: previous.value.left + val.left,
      }
    })

    const styles = computed(() => {
      return props.draggable
        ? { transform: `translate3d(${ convertToUnit(model.value.left) }, ${ convertToUnit(model.value.top) }, 0)`, }
        : {}
    })

    return () => {
      return slots.default?.({
        value: model.value,
        props: mergeProps(toHandlers(draggableEvents.value), {
          ref: draggableRef,
          class: {
            've-draggable': props.draggable,
            've-draggable--dragging': isDragging.value,
          },
          style: styles.value,
        }),
      })
    }
  }
})