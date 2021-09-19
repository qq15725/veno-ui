import {
  ref,
} from 'vue'

export const allowedDragAreaStates = [
  'dropped',
  'entered',
  'left',
] as const

export type DragAreaState = typeof allowedDragAreaStates[number]

export function useDragArea () {
  const dragAreaState = ref<DragAreaState>('left')

  function drop (event: DragEvent) {
    event.preventDefault()
    dragAreaState.value = 'dropped'
  }

  function enter (e: DragEvent) {
    dragAreaState.value = 'entered'
  }

  function leave (e: DragEvent) {
    dragAreaState.value = 'left'
  }

  function over (event: DragEvent) {
    event.preventDefault()
  }

  return {
    dragAreaState,
    dragAreaOn: {
      drop,
      dragenter: enter,
      dragleave: leave,
      dragover: over,
    }
  }
}