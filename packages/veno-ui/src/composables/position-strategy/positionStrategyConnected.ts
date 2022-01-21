// Utils
import { computed, nextTick, onScopeDispose, watch } from 'vue'
import {
  Box,
  convertToUnit,
  getScrollParent,
  isFixedPosition,
  nullifyTransforms,
  oppositeAnchor,
  parseAnchor,
  physicalAnchor,
  anchorToPoint,
  getOffset
} from '../../utils'

// Types
import type { Ref } from 'vue'
import type { PositionStrategyData, PositionStrategyProps } from './positionStrategy'

/**
 * 连接的定位策略
 *
 * @param data
 * @param props
 * @param contentStyles
 * @param anchorClasses
 */
export function positionStrategyConnected (
  data: PositionStrategyData,
  props: PositionStrategyProps,
  contentStyles: Ref<Record<string, string>>,
  anchorClasses: Ref<string[]>
) {
  if (!data.activatorEl.value) return
  const activatorFixed = isFixedPosition(data.activatorEl.value)
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: 'fixed',
    })
  }
  const preferredAnchor = computed(() => parseAnchor(props.anchor))
  const preferredOrigin = computed(() => {
    switch (props.origin) {
      case 'overlap':
        return preferredAnchor.value
      case 'auto':
        return oppositeAnchor(preferredAnchor.value)
      default:
        return parseAnchor(props.origin)
    }
  })
  const doesOverlap = computed(() => {
    return preferredAnchor.value.side === preferredOrigin.value.side
  })

  const configuredMaxHeight = computed(() => {
    const val = parseFloat(String(props.maxHeight!))
    return isNaN(val) ? Infinity : val
  })
  const configuredMinWidth = computed(() => {
    const val = parseFloat(String(props.minWidth!))
    return isNaN(val) ? Infinity : val
  })

  let observe = false
  const observer = new ResizeObserver(() => {
    if (observe) {
      updatePosition()
    }
  })
  observer.observe(data.activatorEl.value!)
  // observer.observe(data.contentEl.value!)

  onScopeDispose(() => {
    observer.disconnect()
  })

  watch(
    () => [preferredAnchor.value, preferredOrigin.value, props.offset],
    () => updatePosition(),
    { immediate: !activatorFixed }
  )

  if (activatorFixed) nextTick(() => updatePosition())

  requestAnimationFrame(() => {
    if (contentStyles.value.maxHeight) {
      updatePosition()
    }
  })

  // eslint-disable-next-line max-statements
  function updatePosition () {
    observe = false
    requestAnimationFrame(() => {
      requestAnimationFrame(() => observe = true)
    })

    const targetBox = data.activatorEl.value!.getBoundingClientRect()
    // TODO: offset shouldn't affect width
    if (props.offset) {
      targetBox.x -= +props.offset
      targetBox.y -= +props.offset
      targetBox.width += +props.offset * 2
      targetBox.height += +props.offset * 2
    }

    let contentBox
    {
      const scrollables = new Map<Element, [number, number]>()
      data.contentEl.value!.querySelectorAll('*').forEach(el => {
        const x = el.scrollLeft
        const y = el.scrollTop
        if (x || y) {
          scrollables.set(el, [x, y])
        }
      })

      const initialMaxWidth = data.contentEl.value!.style.maxWidth
      const initialMaxHeight = data.contentEl.value!.style.maxHeight
      data.contentEl.value!.style.removeProperty('max-width')
      data.contentEl.value!.style.removeProperty('max-height')

      contentBox = nullifyTransforms(data.contentEl.value!)
      contentBox.x -= parseFloat(data.contentEl.value!.style.left) || 0
      contentBox.y -= parseFloat(data.contentEl.value!.style.top) || 0

      data.contentEl.value!.style.maxWidth = initialMaxWidth
      data.contentEl.value!.style.maxHeight = initialMaxHeight
      scrollables.forEach((position, el) => {
        el.scrollTo(...position)
      })
    }
    const maxHeight = configuredMaxHeight.value
    const contentWidth = Math.max(configuredMinWidth.value, contentBox.width)
    const contentHeight = Math.min(maxHeight, contentBox.height)
    contentBox = new Box({
      ...contentBox,
      height: Math.min(contentHeight, maxHeight),
    })

    const scrollParent = getScrollParent(data.contentEl.value)
    const viewportWidth = scrollParent.clientWidth
    const viewportHeight = Math.min(scrollParent.clientHeight, window.innerHeight)
    const viewportMargin = 12

    const freeSpace = {
      top: targetBox.top - viewportMargin,
      bottom: viewportHeight - targetBox.bottom - viewportMargin,
      left: targetBox.left - viewportMargin,
      right: viewportWidth - targetBox.right - viewportMargin,
    }

    let anchor = preferredAnchor.value
    let origin = preferredOrigin.value
    {
      const { side } = anchor
      const { top, bottom, left, right } = freeSpace
      if (
        (side === 'top' && top < contentHeight && bottom > top)
        || (side === 'bottom' && bottom < contentHeight && top > bottom)
        || (side === 'start' && left < contentWidth && right > left)
        || (side === 'end' && right < contentWidth && left > right)
      ) {
        anchor = oppositeAnchor(anchor)
        origin = oppositeAnchor(anchor)
      }
    }

    const targetPoint = anchorToPoint(anchor, targetBox)
    const contentPoint = anchorToPoint(origin, contentBox)
    let { x, y } = getOffset(targetPoint, contentPoint)

    let maxWidth = null
    {
      if (doesOverlap.value || ['center', 'top', 'bottom'].includes(anchor.side)) {
        maxWidth = Math.min(
          viewportWidth,
          Math.max(targetBox.width, viewportWidth - viewportMargin * 2)
        )
      } else if (anchor.side === 'end') {
        maxWidth = freeSpace.right
      } else if (anchor.side === 'start') {
        maxWidth = freeSpace.left
      }
    }
    const minWidth = Math.min(configuredMinWidth.value, maxWidth!, targetBox.width)

    if (contentWidth !== Infinity) {
      if (anchor.side === 'top' || anchor.side === 'bottom') {
        const maxX = viewportWidth - Math.min(maxWidth ?? contentWidth, contentWidth) - viewportMargin
        if (x > maxX) {
          x = maxX
          anchor.align = 'end'
          origin = oppositeAnchor(anchor)
        } else if (x < 0) {
          x = 0
          anchor.align = 'start'
          origin = oppositeAnchor(anchor)
        }
      }
    }

    Object.assign(contentStyles.value, {
      '--ve-overlay-anchor-origin': physicalAnchor(anchor, data.activatorEl.value!),
      transformOrigin: physicalAnchor(origin, data.activatorEl.value!),
      top: convertToUnit(Math.round(y)),
      left: convertToUnit(Math.round(x)),
      minWidth: convertToUnit(minWidth),
      maxWidth: convertToUnit(maxWidth),
      maxHeight: convertToUnit(maxHeight),
    })

    anchorClasses.value = [
      `ve-overlay--side-${ anchor.side }`,
      `ve-overlay--align-${ anchor.align }`,
    ]
  }

  return { updatePosition }
}