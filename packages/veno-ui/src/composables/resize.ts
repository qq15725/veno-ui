// Utils
import { ref, watch, computed } from 'vue'
import { propsFactory, convertToUnit } from '../utils'

// Composables
import { useDrag } from './drag'
import { useProxiedModel } from './proxied-model'
import { makePositionProps } from './position'
import { makeDimensionProps } from './dimensions'

// Types
import type { Ref, PropType } from 'vue'

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

export const allowedResizeStates = [
  'resized',
  'resizing'
] as const

export type ResizeState = typeof allowedResizeStates[number]

export interface ResizeModelValue
{
  width: number
  height: number
}

interface ResizeProps
{
  modelValue?: ResizeModelValue
  point: boolean
  handles: ResizeHandle[]
}

export const makeResizeProps = propsFactory({
  ...makePositionProps(),
  ...makeDimensionProps(),
  point: Boolean,
  modelValue: Object as PropType<ResizeModelValue>,
  handles: {
    type: Array as PropType<ResizeHandle[]>,
    default: allowedResizeHandles
  },
}, 'resize')

export function useResize (props: ResizeProps, name: string) {
  const rawSize = useProxiedModel(
    props,
    'modelValue',
    { width: 30, height: 30 },
    val => ({
      ...val,
      width: val?.width ?? 30,
      height: val?.height ?? 30,
    }),
    val => ({
      ...props.modelValue,
      ...val,
    })
  ) as Ref<NonNullable<ResizeModelValue>>
  const size = ref<ResizeModelValue>({
    width: rawSize.value.width,
    height: rawSize.value.height,
  })
  const resizeState = ref<ResizeState>('resized')
  const selected = ref<ResizeHandle | null>(null)

  const resizeHandles = props.handles.map(handle => {
    const { dragOn, draggedOffsetPosition, dragState } = useDrag()

    watch(dragState, state => {
      if (state === 'dragging') {
        resizeState.value = 'resizing'
        selected.value = handle
      } else {
        resizeState.value = 'resized'
        selected.value = null
        rawSize.value = {
          width: size.value.width,
          height: size.value.height,
        }
      }
    })

    watch(draggedOffsetPosition, offsetPosition => {
      if (handle !== selected.value) {
        return
      }

      let width = size.value.width
      let height = size.value.height

      if (handle.indexOf('left') > -1
        || handle.indexOf('right') > -1) {
        width = rawSize.value.width + offsetPosition.left
      }

      if (handle.indexOf('top') > -1
        || handle.indexOf('bottom') > -1) {
        height = rawSize.value.height + offsetPosition.top
      }

      size.value = { width, height }
    })

    const resizeHandleClasses = computed(() => {
      return {
        [`${ name }__handle`]: true,
        [`${ name }__handle--${ handle }`]: true,
        [`${ name }__handle--hide`]: resizeState.value === 'resizing' && handle !== selected.value,
      }
    })

    return { handle, resizeHandleClasses, dragOn }
  })

  const resizeStyles = computed(() => ({
    width: convertToUnit(size.value.width),
    height: convertToUnit(size.value.height),
  }))

  return {
    resizeState,
    selected,
    resizeHandles,
    resizeStyles,
  }
}