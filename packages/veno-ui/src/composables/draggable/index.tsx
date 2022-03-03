// Utils
import { ref, computed, watch } from 'vue'
import { propsFactory, isComponentInstance, SUPPORTS_TOUCH } from '../../utils'

// Types
import type { ExtractPropTypes } from 'vue'

// Composables
import { usePointer } from '../../composables/pointer'

export const makeDraggableProps = propsFactory({
  /**
   * @zh 可拖拽的
   */
  draggable: {
    type: Boolean,
    default: true,
  },
}, 'draggable')

export function useDraggable (
  props?: ExtractPropTypes<ReturnType<typeof makeDraggableProps>>
) {
  const {
    isPointerMoving: isDragging,
    pointerDownEl,
    pointerMovement: draggableMovement,
    pointerEvents,
  } = usePointer({
    pointerDownPreventDefault: SUPPORTS_TOUCH,
    pointerMovePreventDefault: SUPPORTS_TOUCH,
  })

  const draggableEl = ref<HTMLElement>()
  const draggableRef = ref()

  watch(pointerDownEl, el => {
    if (el && !draggableEl.value) draggableEl.value = el
  })

  watch(draggableRef, val => {
    if (val) draggableEl.value = isComponentInstance(val) ? val.$el : val
  })

  const availableEvents = {
    dragstart: (e: DragEvent) => e.preventDefault(),
  }

  return {
    isDragging,
    draggableEl,
    draggableRef,
    draggableEvents: computed(() => {
      const events: Partial<typeof availableEvents & typeof pointerEvents.value> = {}
      if (!props || props?.draggable) {
        events.dragstart = availableEvents.dragstart

        Object.assign(events, pointerEvents.value)
      }
      return events
    }),
    draggableMovement,
  }
}