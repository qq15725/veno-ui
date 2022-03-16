import { Box } from './box'

/**
 * 获取 el transform 后的盒模型
 *
 * @see https://stackoverflow.com/a/57876601/2074736
 *
 * @param el
 */
export function nullifyTransforms (el: HTMLElement): Box {
  const rect = el.getBoundingClientRect()
  const style = getComputedStyle(el)
  const tx = style.transform

  if (tx) {
    let ta, sx, sy, dx, dy
    if (tx.startsWith('matrix3d(')) {
      ta = tx.slice(9, -1).split(/, /)
      sx = +ta[0]
      sy = +ta[5]
      dx = +ta[12]
      dy = +ta[13]
    } else if (tx.startsWith('matrix(')) {
      ta = tx.slice(7, -1).split(/, /)
      sx = +ta[0]
      sy = +ta[3]
      dx = +ta[4]
      dy = +ta[5]
    } else {
      return new Box(rect)
    }

    const to = style.transformOrigin
    const x = rect.x - dx - (1 - sx) * parseFloat(to)
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1))
    const w = sx ? rect.width / sx : el.offsetWidth
    const h = sy ? rect.height / sy : el.offsetHeight

    return new Box({ x, y, width: w, height: h })
  } else {
    return new Box(rect)
  }
}
