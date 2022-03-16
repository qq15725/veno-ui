/**
 * 判断 el 是否为 fixed 定位
 * 
 * @param el
 */
export function isFixedPosition (el?: HTMLElement) {
  while (el) {
    if (window.getComputedStyle(el).position === 'fixed') {
      return true
    }
    el = el.offsetParent as HTMLElement
  }
  return false
}
