export function getScrollParent (el?: HTMLElement) {
  while (el) {
    if (hasScrollbar(el)) return el
    el = el.parentElement!
  }

  return document.scrollingElement as HTMLElement
}

export function getScrollParents (el?: HTMLElement) {
  const elements: HTMLElement[] = []

  while (el) {
    if (hasScrollbar(el)) elements.push(el)
    el = el.parentElement!
  }

  return elements
}

export function hasScrollbar (el?: Element | null) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false

  const style = window.getComputedStyle(el)

  return style.overflowY === 'scroll'
    || (
      (style.overflowY === 'auto' || style.overflowY === 'overlay')
      && el.scrollHeight > el.clientHeight
    )
}

export function getScrollbarWidth (el?: HTMLElement | null) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0

  if (el.tagName === 'HTML') {
    return window.innerWidth - document.documentElement.offsetWidth
  }

  const style = window.getComputedStyle(el)

  return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth)
}
