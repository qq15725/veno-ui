// Utils
import { computed, ref, toHandlers, watch } from 'vue'
import { SUPPORTS_TOUCH, getCurrentInstanceName, propsFactory } from '@veno-ui/utils'

// Composables
import { usePointer } from '../pointer'

// Types
import type { ExtractPropTypes, PropType, Ref } from 'vue'

export const SUPPORTED_DIRECTIONS = [
  'top',
  'top-left',
  'left',
  'bottom',
  'bottom-left',
  'top-right',
  'right',
  'bottom-right',
] as const

export const makeDraggableResizableProps = propsFactory({
  /**
   * @zh 可以调整尺寸
   */
  resizable: {
    type: Boolean,
    default: true,
  },

  /**
   * @zh 可调整尺寸的锚点
   */
  resizableAnchors: {
    type: Array as PropType<typeof SUPPORTED_DIRECTIONS[number][]>,
    default: SUPPORTED_DIRECTIONS,
  },

  /**
   * @zh 显示调整尺寸每个锚点的控件
   */
  showResizableAnchor: Boolean,
}, 'draggable-resizable')

export function useDraggableResizable(
  props: ExtractPropTypes<ReturnType<typeof makeDraggableResizableProps>>,
  name = getCurrentInstanceName(),
) {
  const active = ref<typeof props['resizableAnchors'][number]>()
  const isResizing = ref(false)
  const previous = ref({ left: 0, top: 0, width: 0, height: 0 })
  const current = ref({ left: 0, top: 0, width: 0, height: 0 })
  const resizement = computed(() => ({
    left: current.value.left - previous.value.left,
    top: current.value.top - previous.value.top,
    width: current.value.width - previous.value.width,
    height: current.value.height - previous.value.height,
  }))

  const {
    isPointerDown,
    pointerDownEl,
    pointerEvents,
    pointerMovement,
  } = usePointer({
    pointerDownPreventDefault: SUPPORTS_TOUCH,
    pointerDownStopPropagation: true,
    pointerMovePreventDefault: true,
  })

  const getElAnchor = (el: HTMLElement | undefined) => {
    return el!.dataset.resizableAnchor as typeof props['resizableAnchors'][number]
  }

  watch(isPointerDown, val => {
    if (val) {
      active.value = getElAnchor(pointerDownEl.value)
    } else {
      active.value = undefined
      isResizing.value = false
      previous.value = { ...current.value }
    }
  })

  watch(pointerMovement, val => {
    if (!active.value || !val) return
    if (!isResizing.value) isResizing.value = true

    const value = { ...current.value }

    if (active.value.includes('left')) {
      value.left = previous.value.left + val.left
      value.width = previous.value.width - val.left
    } else if (active.value.includes('right')) {
      value.width = previous.value.width + val.left
    }

    if (active.value.includes('top')) {
      value.top = previous.value.top + val.top
      value.height = previous.value.height - val.top
    } else if (active.value.includes('bottom')) {
      value.height = previous.value.height + val.top
    }

    current.value = value
  })

  return {
    isResizing,
    resizement,
    genResizableAnchors: (anchorProps?: Record<string, any>, hide?: Ref<boolean>) => {
      return props.resizableAnchors.map(anchor => {
        return (
          <div
            { ...toHandlers(pointerEvents.value) }
            { ...anchorProps }
            key={ anchor }
            data-resizable-anchor={ anchor }
            class={ [
              `${ name }__resizable-anchor`,
              `${ name }__resizable-anchor--${ anchor }`,
              {
                [`${ name }__resizable-anchor--control`]: props.showResizableAnchor,
                [`${ name }__resizable-anchor--hide`]: (isResizing.value || hide?.value) && anchor !== active.value,
              },
            ] }
          />
        )
      })
    },
  }
}
