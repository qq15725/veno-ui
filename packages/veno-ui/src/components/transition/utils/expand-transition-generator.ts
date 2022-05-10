// Utils
import { camelize } from 'vue'

interface HTMLExpandElement extends HTMLElement {
  _parent?: (Node & ParentNode & HTMLElement) | null
  _initialStyle?: {
    transition: string
    overflow: string
    height?: string | null
    width?: string | null
  }
}

export function expandTransitionGenerator(expandedParentClass = '', x = false) {
  const sizeProperty = x ? 'width' : 'height' as 'width' | 'height'
  const offsetProperty = camelize(`offset-${ sizeProperty }`) as 'offsetHeight' | 'offsetWidth'

  return {
    onBeforeEnter(el: HTMLExpandElement) {
      el._parent = el.parentNode as (Node & ParentNode & HTMLElement) | null
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty],
      }
    },

    onEnter(el: HTMLExpandElement) {
      const initialStyle = el._initialStyle!

      el.style.setProperty('transition', 'none', 'important')
      // Hide overflow to account for collapsed margins in the calculated height
      el.style.overflow = 'hidden'
      const offset = `${ el[offsetProperty] }px`

      el.style[sizeProperty] = '0'

      void el.offsetHeight // force reflow

      el.style.transition = initialStyle.transition

      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass)
      }

      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset
      })
    },

    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,

    onLeave(el: HTMLExpandElement) {
      el._initialStyle = {
        transition: '',
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty],
      }

      el.style.overflow = 'hidden'
      el.style[sizeProperty] = `${ el[offsetProperty] }px`
      void el.offsetHeight // force reflow

      requestAnimationFrame(() => (el.style[sizeProperty] = '0'))
    },

    onAfterLeave,
    onLeaveCancelled: onAfterLeave,
  }

  function onAfterLeave(el: HTMLExpandElement) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass)
    }
    resetStyles(el)
  }

  function resetStyles(el: HTMLExpandElement) {
    const size = el._initialStyle![sizeProperty]
    el.style.overflow = el._initialStyle!.overflow
    if (size != null) el.style[sizeProperty] = size
    delete el._initialStyle
  }
}

export function fadeInExpandTransitionGenerator(x = false, reverse = false) {
  return {
    onBeforeLeave: (el: HTMLElement) => {
      if (x) {
        el.style.maxWidth = `${ el.offsetWidth }px`
      } else {
        el.style.maxHeight = `${ el.offsetHeight }px`
      }
      void el.offsetWidth
    },
    onLeave: (el: HTMLElement) => {
      if (x) {
        el.style.maxWidth = '0'
      } else {
        el.style.maxHeight = '0'
      }
      void el.offsetWidth
    },
    onAfterLeave: (el: HTMLElement) => {
      if (x) {
        el.style.maxWidth = ''
      } else {
        el.style.maxHeight = ''
      }
    },
    onEnter: (el: HTMLElement) => {
      el.style.transition = 'none'
      if (x) {
        const memorizedWidth = el.offsetWidth
        el.style.maxWidth = '0'
        void el.offsetWidth
        el.style.transition = ''
        el.style.maxWidth = `${ memorizedWidth }px`
      } else {
        if (reverse) {
          el.style.maxHeight = `${ el.offsetHeight }px`
          void el.offsetHeight
          el.style.transition = ''
          el.style.maxHeight = '0'
        } else {
          const memorizedHeight = el.offsetHeight
          el.style.maxHeight = '0'
          void el.offsetWidth
          el.style.transition = ''
          el.style.maxHeight = `${ memorizedHeight }px`
        }
      }
      void el.offsetWidth
    },
    onAfterEnter: (el: HTMLElement) => {
      if (x) {
        el.style.maxWidth = ''
      } else {
        if (!reverse) {
          el.style.maxHeight = ''
        }
      }
    },
  }
}
