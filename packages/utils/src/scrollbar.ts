/**
 * 获取当前元素的父级滚动元素
 *
 * @param el
 */
export function getScrollParent(el?: HTMLElement) {
  while (el) {
    if (hasScrollbar(el)) return el
    el = el.parentElement!
  }

  return document.scrollingElement as HTMLElement
}

/**
 * 获取当前元素的所有父级滚动元素
 *
 * @param el
 */
export function getScrollParents(el?: HTMLElement) {
  const elements: HTMLElement[] = []

  while (el) {
    if (hasScrollbar(el)) elements.push(el)
    el = el.parentElement!
  }

  return elements
}

/**
 * 判断元素是否存在滚动条
 *
 * @param el
 */
export function hasScrollbar(el?: Element | null) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false

  const style = window.getComputedStyle(el)

  return style.overflowY === 'scroll'
    || (
      (style.overflowY === 'auto' || style.overflowY === 'overlay')
      && el.scrollHeight > el.clientHeight
    )
}

/**
 * 获取滚动条的宽度
 *
 * @param el
 */
export function getScrollbarWidth(el?: HTMLElement | null) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0

  if (el.tagName === 'HTML') {
    return window.innerWidth - document.documentElement.offsetWidth
  }

  const style = window.getComputedStyle(el)

  return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth)
}
