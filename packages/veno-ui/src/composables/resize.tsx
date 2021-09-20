// Utils
import { ref, computed, watch } from 'vue'
import { propsFactory } from '../utils'

import { useMove } from '../composables/move'

// Types
import type { PropType } from 'vue'

export const allowedResizeStates = ['resized', 'resizing'] as const

export type ResizeStates = typeof allowedResizeStates[number]

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

export type ResizeHandle = typeof allowedResizeHandles[number]

interface ResizeProps
{
  resizeHandles: ResizeHandle[]
  resizeHandlePoint: boolean
}

export const makeResizeProps = propsFactory({
  resizeHandles: {
    type: Array as PropType<ResizeHandle[]>,
    default: allowedResizeHandles
  },
  resizeHandlePoint: Boolean,
}, 'resize')

export function useResize (props: ResizeProps, name: string) {
  const resizeState = ref<ResizeStates>('resized')
  const selectedResizeHandle = ref<ResizeHandle | null>(null)

  const startingPositionDimension = ref({ left: 0, top: 0, width: 0, height: 0 })
  const resizingPositionDimension = ref({ left: 0, top: 0, width: 0, height: 0 })
  const resizingOffsetPositionDimension = computed(() => ({
    left: resizingPositionDimension.value.left - startingPositionDimension.value.left,
    top: resizingPositionDimension.value.top - startingPositionDimension.value.top,
    width: resizingPositionDimension.value.width - startingPositionDimension.value.width,
    height: resizingPositionDimension.value.height - startingPositionDimension.value.height,
  }))

  const resizeHandles = computed(() => {
    return props.resizeHandles.map(resizeHandle => {
      const { moveState, moveOn, movingOffsetPosition } = useMove()

      watch(moveState, state => {
        switch (state) {
          case 'moving':
            resizeState.value = 'resizing'
            selectedResizeHandle.value = resizeHandle
            break
          case 'moved':
            resizeState.value = 'resized'
            selectedResizeHandle.value = null
            startingPositionDimension.value = { ...resizingPositionDimension.value }
            break
        }
      })

      watch(movingOffsetPosition, offsetPosition => {
        if (resizeHandle !== selectedResizeHandle.value) return

        const temp = { ...resizingPositionDimension.value }

        if (resizeHandle.indexOf('left') > -1) {
          temp.left = startingPositionDimension.value.left + offsetPosition.left
          temp.width = startingPositionDimension.value.width - offsetPosition.left
        } else if (resizeHandle.indexOf('right') > -1) {
          temp.width = startingPositionDimension.value.width + offsetPosition.left
        }

        if (resizeHandle.indexOf('top') > -1) {
          temp.top = startingPositionDimension.value.top + offsetPosition.top
          temp.height = startingPositionDimension.value.height - offsetPosition.top
        } else if (resizeHandle.indexOf('bottom') > -1) {
          temp.height = startingPositionDimension.value.height + offsetPosition.top
        }

        resizingPositionDimension.value = temp
      })

      const classes = computed(() => {
        return {
          [`${ name }__handle`]: true,
          [`${ name }__handle--${ resizeHandle }`]: true,
          [`${ name }__handle--point`]: props.resizeHandlePoint,
          [`${ name }__handle--hide`]: resizeState.value === 'resizing'
          && resizeHandle !== selectedResizeHandle.value,
        }
      })

      return { classes, on: moveOn }
    })
  })

  return {
    resizeState,
    resizingOffsetPositionDimension,
    selectedResizeHandle,
    resizeHandles,
  }
}