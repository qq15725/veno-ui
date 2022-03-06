// Utils
import { ref, computed, watch } from 'vue'
import { propsFactory, isComponentInstance, SUPPORTS_TOUCH } from '../../utils'

// Composables
import { usePointer } from '../../composables/pointer'

// Types
import type { ExtractPropTypes, Ref } from 'vue'
import type { PointerPosition } from '../../composables/pointer'

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
  props: ExtractPropTypes<ReturnType<typeof makeDraggableProps>> = { draggable: true, },
  data?: Ref<PointerPosition>
) {
  const {
    isPointerMoving: isDragging,
    pointerDownEl,
    pointerMovement: draggableMovement,
    pointerEvents,
  } = usePointer({
    pointerDownPreventDefault: SUPPORTS_TOUCH,
    pointerMovePreventDefault: true,
  })
  const previous = ref<PointerPosition>()
  const draggableEl = ref<HTMLElement>()
  const draggableRef = ref()

  watch(isDragging, val => {
    if (val && props.draggable) {
      previous.value = { left: data?.value.left || 0, top: data?.value.top || 0 }
    }
  }, { immediate: true })

  watch(draggableMovement, val => {
    if (!props.draggable || !isDragging.value || !val || !data || !previous.value) return
    data.value = {
      top: previous.value.top + val.top,
      left: previous.value.left + val.left,
    }
  })

  watch(pointerDownEl, el => {
    if (el && !draggableEl.value) draggableEl.value = el
  })

  watch(draggableRef, val => {
    if (val) draggableEl.value = isComponentInstance(val) ? val.$el : val
  })

  const availableEvents = {
    dragstart: (e: DragEvent) => e.preventDefault(),
  }

  const draggableEvents = computed(() => {
    const events: Partial<typeof availableEvents & typeof pointerEvents.value> = {}
    if (!props || props?.draggable) {
      events.dragstart = availableEvents.dragstart

      Object.assign(events, pointerEvents.value)
    }
    return events
  })

  return {
    isDragging,
    draggableEl,
    draggableRef,
    draggableEvents,
    draggableMovement,
  }
}