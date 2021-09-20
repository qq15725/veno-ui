// Utils
import { PropType, ref } from 'vue'
import { propsFactory } from '../utils'

// Types
export const allowedDragAreaStates = ['dropped', 'entered', 'left'] as const

export type DragAreaState = typeof allowedDragAreaStates[number]

export interface DragAreaProps
{
  allowedTypes?: string[]
}

export const makeDragAreaProps = propsFactory({
  allowedTypes: Array as PropType<string[]>,
}, 'drag-area')

export function useDragArea (props: DragAreaProps = {}) {
  const dragAreaState = ref<DragAreaState>('left')
  const dragAreaEvent = ref<DragEvent | null>(null)

  function drop (event: DragEvent) {
    event.preventDefault()
    dragAreaEvent.value = event
    dragAreaState.value = 'dropped'
  }

  function enter (event: DragEvent) {
    dragAreaEvent.value = event
    dragAreaState.value = 'entered'
  }

  function leave (event: DragEvent) {
    dragAreaEvent.value = null
    dragAreaState.value = 'left'
  }

  function allow (event: DragEvent) {
    if (props.allowedTypes) {
      return event.dataTransfer?.types.reduce<boolean>((res, type) => {
        return res || !!props.allowedTypes?.includes(type)
      }, false)
    }
    event.preventDefault()
  }

  return {
    dragAreaState,
    dragAreaEvent,
    dragAreaOn: {
      drop,
      dragenter: enter,
      dragleave: leave,
      dragover: allow,
    }
  }
}