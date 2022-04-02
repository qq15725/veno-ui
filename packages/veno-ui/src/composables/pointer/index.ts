// Utils
import { ref, onScopeDispose, computed, readonly } from 'vue'
import { propsFactory, SUPPORTS_TOUCH } from '../../utils'

// Types
import type { ExtractPropTypes } from 'vue'

export interface PointerPosition
{
  top: number
  left: number
}

export const makePointerProps = propsFactory({
  /**
   * @zh 指针按下-停止传播
   */
  pointerDownStopPropagation: Boolean,

  /**
   * @zh 指针按下-不触发默认行为
   */
  pointerDownPreventDefault: Boolean,

  /**
   * @zh 指针移动-不触发默认行为
   */
  pointerMovePreventDefault: Boolean,
}, 'pointer')

export const usePointer = (
  props: Partial<ExtractPropTypes<ReturnType<typeof makePointerProps>>> = {}
) => {
  const isPointerDown = ref(false)
  const isPointerMoving = ref(false)
  const pointerCurrentPosition = ref<PointerPosition>()
  const pointerDownAt = ref<number>()
  const pointerDownEl = ref<HTMLElement>()
  const pointerDownPosition = ref<PointerPosition>()
  const pointerMovement = computed(() => {
    if (!pointerCurrentPosition.value || !pointerDownPosition.value) return undefined
    return {
      left: pointerCurrentPosition.value.left - pointerDownPosition.value.left,
      top: pointerCurrentPosition.value.top - pointerDownPosition.value.top,
    }
  })
  const minDelay = computed(() => SUPPORTS_TOUCH ? 10 : 0)
  const maxDelay = computed(() => SUPPORTS_TOUCH ? 100 : 0)

  const unregisterListeners = () => {
    if (SUPPORTS_TOUCH) {
      document.removeEventListener('touchmove', pointerMove)
      document.removeEventListener('touchend', pointerUp)
    } else {
      document.removeEventListener('mousemove', pointerMove)
      document.removeEventListener('mouseup', pointerUp)
    }
  }

  const pointerDown = (e: MouseEvent | TouchEvent) => {
    if (props.pointerDownStopPropagation) e.stopPropagation()
    if (props.pointerDownPreventDefault) e.preventDefault()

    pointerDownAt.value = Date.now()
    if (e instanceof MouseEvent) {
      pointerDownEl.value = (e.target || e.relatedTarget) as HTMLElement
    } else {
      pointerDownEl.value = e.target as HTMLElement
    }
    pointerDownPosition.value = pointerCurrentPosition.value = getPointerPosition(e)
    isPointerDown.value = true

    if (SUPPORTS_TOUCH) {
      document.addEventListener('touchmove', pointerMove, { passive: !props.pointerMovePreventDefault })
      document.addEventListener('touchend', pointerUp, { passive: true })
    } else {
      document.addEventListener('mousemove', pointerMove)
      document.addEventListener('mouseup', pointerUp)
    }
  }

  const pointerMove = (e: MouseEvent | TouchEvent) => {
    if (isPointerMoving.value) {
      if (props.pointerMovePreventDefault) e.preventDefault()
      pointerCurrentPosition.value = getPointerPosition(e)
    } else {
      const time = Date.now() - pointerDownAt.value!
      if (time < minDelay.value) {
        return
      } else if (time < maxDelay.value) {
        unregisterListeners()
      } else if (distance(pointerDownPosition.value!, getPointerPosition(e)) > 0) {
        isPointerMoving.value = true
      }
    }
  }

  const pointerUp = (e: MouseEvent | TouchEvent) => {
    pointerCurrentPosition.value = getPointerPosition(e)
    pointerDownEl.value = undefined
    isPointerDown.value = false
    isPointerMoving.value = false
    unregisterListeners()
  }

  onScopeDispose(() => {
    unregisterListeners()
  })

  const availableEvents = {
    touchstartPassive: pointerDown,
    touchstart: pointerDown,
    mousedown: pointerDown,
  }

  return {
    isPointerDown: readonly(isPointerDown),
    isPointerMoving: readonly(isPointerMoving),
    pointerCurrentPosition: readonly(pointerCurrentPosition),
    pointerDown,
    pointerMove,
    pointerUp,
    pointerDownEl,
    pointerDownPosition: readonly(pointerDownPosition),
    pointerMovement: readonly(pointerMovement),
    pointerEvents: computed(() => {
      const events: Partial<typeof availableEvents> = {}

      if (SUPPORTS_TOUCH) {
        if (!props.pointerDownPreventDefault) {
          events.touchstartPassive = availableEvents.touchstartPassive
        } else {
          events.touchstart = availableEvents.touchstart
        }
      } else {
        events.mousedown = availableEvents.mousedown
      }

      return events
    })
  }
}

function distance (position1: PointerPosition, position2: PointerPosition) {
  return Math.sqrt((position2.left - position1.left) ** 2 + (position2.top - position1.top) ** 2)
}

function getPointerPosition (e: MouseEvent | TouchEvent): PointerPosition {
  return e instanceof TouchEvent
    ? e.touches.length > 0
      ? { left: e.touches[0].clientX, top: e.touches[0].clientY }
      : { left: 0, top: 0 }
    : { left: e.clientX, top: e.clientY }
}