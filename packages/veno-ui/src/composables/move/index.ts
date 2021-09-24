// Utils
import { ref, computed } from 'vue'
import { propsFactory } from '../../utils'

// Types
export const allowedMoveStates = ['moved', 'moving'] as const

export type MoveState = typeof allowedMoveStates[number]

interface MoveProps
{
  draggable?: boolean
}

export const makeMoveProps = propsFactory({
  draggable: Boolean,
}, 'move')

export function useMove (props: MoveProps = {}) {
  const moveState = ref<MoveState>('moved')
  const movingElement = ref<HTMLElement | null>(null)

  const startingPosition = ref({ left: 0, top: 0 })
  const movingPosition = ref({ left: 0, top: 0 })
  const movingOffsetPosition = computed(() => ({
    left: movingPosition.value.left - startingPosition.value.left,
    top: movingPosition.value.top - startingPosition.value.top,
  }))

  function start (event: MouseEvent | TouchEvent) {
    if (!movingElement.value) movingElement.value = event.target as HTMLElement
    startingPosition.value = getEventClientPosition(event)
    movingPosition.value = getEventClientPosition(event)

    if (props.draggable) {
      movingElement.value?.setAttribute('draggable', 'true')
      movingElement.value?.addEventListener('dragstart', dragstart)
      movingElement.value?.addEventListener('drag', move)
      movingElement.value?.addEventListener('dragend', end)
    } else {
      event.preventDefault()
      event.stopPropagation()
    }

    if (event instanceof MouseEvent) {
      if (!props.draggable) window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', end)
    } else if (event instanceof TouchEvent) {
      if (!props.draggable) window.addEventListener('touchmove', move)
      window.addEventListener('touchend', end)
    }

    moveState.value = 'moving'
  }

  function move (event: DragEvent | MouseEvent | TouchEvent) {
    movingPosition.value = getEventClientPosition(event)
    moveState.value = 'moving'
  }

  function end (event: DragEvent | MouseEvent | TouchEvent) {
    if (props.draggable) movingElement.value?.removeAttribute('draggable')

    if (event instanceof DragEvent) {
      movingElement.value?.removeEventListener('dragstart', dragstart)
      movingElement.value?.removeEventListener('drag', move)
      movingElement.value?.removeEventListener('dragend', end)
    }

    if (event instanceof MouseEvent) {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', end)
    } else if (event instanceof TouchEvent) {
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', end)
    }

    moveState.value = 'moved'
    movingElement.value = null
  }

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

  function dragstart (event: DragEvent) {
    if (!event.dataTransfer) return
    event.dataTransfer.setData('text/plain', movingElement.value?.textContent || '')
    event.dataTransfer.effectAllowed = 'move'
  }

  return {
    moveState,
    movingOffsetPosition,
    movingElement,
    moveOn: {
      touchstart: start,
      mousedown: start,
    },
  }
}