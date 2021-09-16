import { getCurrentInstance, watchEffect } from 'vue'

import { propsFactory } from '../utils'
import { useDrag } from './drag'

export const allowedResizeHandles = [
  'top',
  'top-left',
  'left',
  'bottom',
  'bottom-left',
  'top-right',
  'right',
  'bottom-right'
] as const

interface DragResizeProps
{
  width: number
  height: number
  handles: string[]
}

export const makeDragResizeProps = propsFactory({
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  handles: {
    type: Array,
    default: allowedResizeHandles
  }
}, 'drag-resize')

export function useDragResize (props: DragResizeProps) {
  const vm = getCurrentInstance()

  const handles = props.handles.map(name => {
    const { state, on } = useDrag({
      top: props.height,
      left: props.width,
    })

    watchEffect(() => {
      const width = state.value.x + state.value.moveX - state.value.startX
      const height = state.value.y + state.value.moveY - state.value.startY

      if (width) {
        if (name.indexOf('left') > -1) {
          vm?.emit('update:width', width)
        } else if (name.indexOf('right') > -1) {
          vm?.emit('update:width', width)
        }
      }

      if (height) {
        if (name.indexOf('top') > -1) {
          vm?.emit('update:height', height)
        } else if (name.indexOf('bottom') > -1) {
          vm?.emit('update:height', height)
        }
      }
    })

    return { name, on }
  })

  return {
    handles
  }
}