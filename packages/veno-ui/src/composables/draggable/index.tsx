// Utils
import { computed, ref, watch } from 'vue'
import {
  SUPPORTS_TOUCH,
  convertToUnit,
  getCurrentInstance,
  isComponentInstance,
  propsFactory,
  querySelector,
} from '../../utils'

// Composables
import { usePointer } from '../../composables/pointer'

// Types
import type { ExtractPropTypes, PropType, Ref } from 'vue'
import type { Selector } from '../../utils'
import type { PointerPosition } from '../../composables/pointer'

export const makeDraggableProps = propsFactory({
  /**
   * @zh 可以拖拽
   */
  draggable: {
    type: Boolean,
    default: true,
  },

  /**
   * @zh 被限制于在某个容器下拖拽
   */
  containment: [String, Object] as PropType<Selector>,

  /**
   * @zh 是否禁用
   */
  disabled: Boolean,

  /**
   * @zh 显示移动的光标
   */
  cursor: {
    type: Boolean,
    default: true,
  },

  /**
   * @zh 定位模式
   */
  position: String as PropType<'absolute' | 'fixed'>,
}, 'draggable')

export function useDraggable(
  props: ExtractPropTypes<ReturnType<typeof makeDraggableProps>> = {
    draggable: true,
    disabled: false,
    cursor: true,
  },
  data?: Ref<PointerPosition>,
) {
  const previous = ref<PointerPosition>()
  const previousBox = ref<DOMRect>()
  const containmentBox = ref<DOMRect>()
  const draggableEl = ref<HTMLElement>()
  const draggableRef = ref()

  const {
    isPointerMoving: isDragging,
    pointerDownEl,
    pointerMovement: draggableMovement,
    pointerEvents,
  } = usePointer({
    pointerMovePreventDefault: true,
  })

  const vm = getCurrentInstance('useDraggable')

  const updateContainmentBox = () => {
    containmentBox.value = props.containment
      ? querySelector(props.containment, vm)?.getBoundingClientRect()
      : undefined
  }

  watch(isDragging, val => {
    if (!val
      || !props.draggable
      || props.disabled) return

    previous.value = {
      left: data?.value.left || 0,
      top: data?.value.top || 0,
    }

    previousBox.value = draggableEl.value?.getBoundingClientRect()

    updateContainmentBox()
  }, { immediate: true })

  watch(draggableMovement, val => {
    if (!props.draggable
      || !isDragging.value
      || !val
      || !data
      || !previous.value
      || props.disabled) return

    const movement = {
      top: val.top,
      left: val.left,
    }

    if (containmentBox.value && previousBox.value) {
      const minLeft = containmentBox.value.left - previousBox.value.left
      const maxLeft = minLeft + containmentBox.value.width - previousBox.value.width
      const minTop = containmentBox.value.top - previousBox.value.top
      const maxTop = minTop + containmentBox.value.height - previousBox.value.height

      movement.left = Math.min(Math.max(movement.left, minLeft), maxLeft)
      movement.top = Math.min(Math.max(movement.top, minTop), maxTop)
    }

    data.value = {
      top: previous.value.top + movement.top,
      left: previous.value.left + movement.left,
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
    contextmenu: (e: DragEvent) => e.preventDefault(),
  }

  const draggableEvents = computed(() => {
    const events: Partial<typeof availableEvents & typeof pointerEvents.value> = {}

    if (props.draggable) {
      events.dragstart = availableEvents.dragstart

      if (SUPPORTS_TOUCH) {
        events.contextmenu = availableEvents.contextmenu
      }

      Object.assign(events, pointerEvents.value)
    }

    return events
  })

  const draggableStyles = computed(() => {
    if (props.draggable && !props.disabled && props.cursor) {
      return {
        cursor: 'move',
      }
    }
    return null
  })

  const contentStyles = computed(() => {
    if (props.draggable && data) {
      const sharedProps = {
        userSelect: isDragging.value ? 'none' : undefined,
      }
      if (props.position) {
        return {
          ...sharedProps,
          position: props.position,
          top: convertToUnit(data.value.top),
          left: convertToUnit(data.value.left),
        }
      }
      return {
        ...sharedProps,
        transform: `translate3d(${ convertToUnit(data.value.left) }, ${ convertToUnit(data.value.top) }, 0)`,
      }
    }
    return null
  })

  return {
    isDragging,
    draggableEl,
    draggableRef,
    draggableEvents,
    draggableMovement,
    draggableStyles,
    contentStyles,
  }
}
