// Utils
import { Transition, TransitionGroup, defineComponent, h } from 'vue'

// Types
import type { FunctionalComponent, Prop } from 'vue'

export function createCssTransition(
  name: string,
  origin = 'top center 0',
  mode?: string,
) {
  // eslint-disable-next-line vue/one-component-per-file
  return defineComponent({
    name,

    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: {
        type: String,
        default: mode,
      },
      origin: {
        type: String,
        default: origin,
      },
      onBeforeEnter: Function,
      onLeave: Function,
      onAfterLeave: Function,
    },

    setup(props, { slots, attrs }) {
      return () => {
        const tag = props.group ? TransitionGroup : Transition

        return h(tag as FunctionalComponent, {
          name,
          mode: props.mode,
          onBeforeEnter(el: HTMLElement) {
            el.style.transformOrigin = props.origin
            props.onBeforeEnter?.(el)
          },
          onLeave(el: HTMLElement) {
            if (props.leaveAbsolute) {
              const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el
              el._transitionInitialStyles = {
                position: el.style.position,
                top: el.style.top,
                left: el.style.left,
                width: el.style.width,
                height: el.style.height,
              }
              el.style.position = 'absolute'
              el.style.top = `${ offsetTop }px`
              el.style.left = `${ offsetLeft }px`
              el.style.width = `${ offsetWidth }px`
              el.style.height = `${ offsetHeight }px`
            }

            if (props.hideOnLeave) {
              (el as any)._initialDisplay = el.style.display
              el.style.display = 'none'
            }

            props.onLeave?.(el)
          },
          onAfterLeave(el: HTMLElement) {
            if (props.leaveAbsolute && el?._transitionInitialStyles) {
              const { position, top, left, width, height } = el._transitionInitialStyles
              delete el._transitionInitialStyles
              el.style.position = position || ''
              el.style.top = top || ''
              el.style.left = left || ''
              el.style.width = width || ''
              el.style.height = height || ''
            }

            if (props.hideOnLeave && el) {
              el.style.display = (el as any)._initialDisplay || ''
            }

            props.onAfterLeave?.(el)
          },
          ...attrs,
        }, slots.default)
      }
    },
  })
}

export function createJavascriptTransition(
  name: string,
  functions: Record<string, any>,
  mode = 'in-out',
) {
  // eslint-disable-next-line vue/one-component-per-file
  return defineComponent({
    name,

    props: {
      group: Boolean,
      mode: {
        type: String,
        default: mode,
      } as Prop<'in-out' | 'out-in' | 'default'>,
      onBeforeEnter: Function,
      onLeave: Function,
      onAfterLeave: Function,
    },

    setup(props, { slots }) {
      return () => {
        const tag = props.group ? TransitionGroup : Transition
        return h(tag as FunctionalComponent, {
          name,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...functions,
          onBeforeEnter(el: HTMLElement) {
            functions.onBeforeEnter?.(el)
            props.onBeforeEnter?.(el)
          },
          onLeave(el: HTMLElement) {
            functions.onLeave?.(el)
            props.onLeave?.(el)
          },
          onAfterLeave(el: HTMLElement) {
            functions.onAfterLeave?.(el)
            props.onAfterLeave?.(el)
          },
        }, slots.default)
      }
    },
  })
}
