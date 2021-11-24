import type { ParsedAnchor } from './anchor'
import type { Box } from './box'

type Point = { x: number, y: number }

declare class As<T extends string>
{
  private as: T
}

type ElementPoint = Point & As<'element'>
type ViewportPoint = Point & As<'viewport'>
type Offset = Point & As<'offset'>

/** Convert a point in local space to viewport space */
export function elementToViewport (point: ElementPoint, offset: Offset | Box) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y,
  } as ViewportPoint
}

/** Convert a point in viewport space to local space */
export function viewportToElement (point: ViewportPoint, offset: Offset | Box) {
  return {
    x: point.x - offset.x,
    y: point.y - offset.y,
  } as ElementPoint
}

/** Get the difference between two points */
export function getOffset<T extends Point> (a: T, b: T) {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  } as Offset
}

/** Convert an anchor object to a point in local space */
export function anchorToPoint (anchor: ParsedAnchor, box: Box): ViewportPoint {
  const { side, align } = anchor
  let x, y: number = 0

  if (side === 'top' || side === 'bottom') {
    switch (side) {
      case 'top':
        y = 0
        break
      case 'bottom':
        y = box.height
        break
    }

    switch (align) {
      case 'start':
        x = 0
        break
      case 'center':
        x = box.width / 2
        break
      case 'end':
        x = box.width
        break
    }
  } else if (side === 'start' || side === 'end') {
    switch (side) {
      case 'start':
        x = 0
        break
      case 'end':
        x = box.width
        break
    }

    switch (align) {
      case 'top':
        y = 0
        break
      case 'center':
        y = box.height / 2
        break
      case 'bottom':
        y = box.height
        break
    }
  } else {
    x = box.width / 2
    y = box.height / 2
  }

  return elementToViewport({ x, y } as ElementPoint, box)
}
