// Types
import type { ComponentInternalInstance, ComponentPublicInstance } from 'vue'

export type Selector = 'parent' | string | Element | ComponentPublicInstance

export function querySelector(
  selector: Selector,
  vm?: ComponentInternalInstance | null,
): HTMLElement | undefined {
  let el
  if (selector === 'parent') {
    el = vm?.proxy?.$el?.parentNode
  } else if (typeof selector === 'string') {
    // Selector
    el = document.querySelector(selector)
  } else if ('$el' in selector) {
    // Component (ref)
    el = selector.$el
  } else if (selector) {
    // HTMLElement | Element
    el = selector
  }

  // The el should only be a valid element (Ignore comments and text nodes)
  return el?.nodeType === Node.ELEMENT_NODE ? el : undefined
}
