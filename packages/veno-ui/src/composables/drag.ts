// Utils
import { ref, computed } from 'vue'
import { propsFactory, convertToUnit } from '../utils'

// Composables
import { useProxiedModel } from './proxied-model'

// Types
import type { PropType, Ref } from 'vue'

export const allowedDragStates = ['dragged', 'dragging'] as const

export type DragState = typeof allowedDragStates[number]

export interface DragModelValue
{
  left: number
  top: number
}

interface DragProps
{
  modelValue?: DragModelValue
  draggable?: boolean
}

export const makeDragProps = propsFactory({
  modelValue: Object as PropType<DragModelValue>,
  draggable: Boolean,
}, 'drag')

const emptyPosition = { left: 0, top: 0 }

export function useDrag (props: DragProps = {}) {
  const rawPosition = useProxiedModel(
    props,
    'modelValue',
    { ...emptyPosition },
    val => ({
      ...val,
      left: val?.left ?? 0,
      top: val?.top ?? 0,
    }),
    val => ({
      ...props.modelValue,
      ...val,
    })
  ) as Ref<NonNullable<DragModelValue>>
  const dragElement = ref<HTMLElement | null>(null)
  const dragState = ref<DragState>('dragged')
  const startedPosition = ref({ ...emptyPosition })
  const movedPosition = ref({ ...emptyPosition })

  const draggedOffsetPosition = computed(() => ({
    left: movedPosition.value.left - startedPosition.value.left,
    top: movedPosition.value.top - startedPosition.value.top,
  }))

  const draggedPosition = computed(() => {
    if (dragState.value === 'dragged') {
      return {
        left: rawPosition.value.left,
        top: rawPosition.value.top,
      }
    } else {
      return {
        left: rawPosition.value.left + draggedOffsetPosition.value.left,
        top: rawPosition.value.top + draggedOffsetPosition.value.top,
      }
    }
  })

  function getEventClientPosition (event: DragEvent | MouseEvent | TouchEvent) {
    if (event instanceof DragEvent || event instanceof MouseEvent) {
      return {
        left: event.clientX,
        top: event.clientY,
      }
    } else if (event instanceof TouchEvent) {
      return {
        left: event.touches[0].clientX,
        top: event.touches[0].clientY,
      }
    } else {
      return {
        left: 0,
        top: 0,
      }
    }
  }

  function start (event: MouseEvent | TouchEvent) {
    event.stopPropagation()
    dragElement.value = event.target as HTMLElement
    startedPosition.value = getEventClientPosition(event)
    movedPosition.value = getEventClientPosition(event)
    if (props.draggable) {
      dragElement.value?.setAttribute('draggable', 'true')
      dragElement.value?.addEventListener('dragstart', dragstart)
      dragElement.value?.addEventListener('drag', move)
      dragElement.value?.addEventListener('dragend', end)
    } else if (event instanceof MouseEvent) {
      window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', end)
    } else if (event instanceof TouchEvent) {
      window.addEventListener('touchmove', move)
      window.addEventListener('touchend', end)
    }
    dragState.value = 'dragging'
  }

  function move (event: DragEvent | MouseEvent | TouchEvent) {
    movedPosition.value = getEventClientPosition(event)
    dragState.value = 'dragging'
  }

  function end (event: DragEvent | MouseEvent | TouchEvent) {
    rawPosition.value = {
      left: rawPosition.value.left + draggedOffsetPosition.value.left,
      top: rawPosition.value.top + draggedOffsetPosition.value.top,
    }

    if (event instanceof DragEvent) {
      dragElement.value?.removeAttribute('draggable')
      dragElement.value?.removeEventListener('dragstart', dragstart)
      dragElement.value?.removeEventListener('drag', move)
      dragElement.value?.removeEventListener('dragend', end)
    } else if (event instanceof MouseEvent) {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', end)
    } else if (event instanceof TouchEvent) {
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', end)
    }

    dragElement.value = null
    dragState.value = 'dragged'
    startedPosition.value = { ...emptyPosition }
    movedPosition.value = { ...emptyPosition }
  }

  function dragstart (event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('Text', dragElement.value?.textContent || '')
      event.dataTransfer.effectAllowed = 'move'
    }
  }

  const dragStyles = computed(() => {
    return {
      transform: `translate3d(${ convertToUnit(draggedPosition.value.left) }, ${ convertToUnit(draggedPosition.value.top) }, 0)`,
    }
  })

  return {
    dragState,
    rawPosition,
    draggedOffsetPosition,
    draggedPosition,
    dragElement,
    dragOn: {
      touchstart: start,
      mousedown: start,
    },
    dragStyles,
  }
}