import type { VNode } from 'vue'
import type { Events } from '@vue/runtime-dom'

declare global {
  interface HTMLCollection {
    [Symbol.iterator] (): IterableIterator<Element>
  }

  interface Element {
    _ripple?: {
      enabled?: boolean
      centered?: boolean
      class?: string
      circle?: boolean
      touched?: boolean
      isTouch?: boolean
      showTimer?: number
      showTimerCommit?: (() => void) | null
    }

    _intersect?: {
      init: boolean
      observer: IntersectionObserver
    }

    _onResize?: {
      handler: () => void
      options: AddEventListenerOptions
    }

    _clickOutside?: {
      lastMousedownWasOutside: boolean
      onClick: EventListener
      onMousedown: EventListener
    }

    _transitionInitialStyles?: {
      position: string
      top: string
      left: string
      width: string
      height: string
    }
  }

  namespace JSX {
    interface Element extends VNode {
    }

    interface IntrinsicAttributes {
      [name: string]: any
    }
  }

  function parseInt(s: string | number, radix?: number): number
  function parseFloat(string: string | number): number

  export const __VENOUI_VERSION__: string
  export const __VENOUI_NAME__: string
}

declare module '@vue/runtime-core' {
  export interface ComponentInternalInstance {
    ctx: Record<string, unknown>
    provides: Record<string, unknown>
  }
}

declare module '@vue/runtime-dom' {
  type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

  type Combine<T extends string> = T | {
    [K in T]: {
      [L in Exclude<T, K>]: `${ K }${ Exclude<T, K> }` | `${ K }${ L }${ Exclude<T, K | L> }`
    }[Exclude<T, K>]
  }[T]

  type Modifiers = Combine<'Passive' | 'Capture' | 'Once'>

  type ModifiedEvents = UnionToIntersection<{
    [K in keyof Events]: { [L in `${ K }${ Modifiers }`]: Events[K] }
  }[keyof Events]>

  type EventHandlers<E> = {
    [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
  }

  export interface HTMLAttributes extends EventHandlers<ModifiedEvents> {
  }

  type CustomProperties = {
    [k in `--${ string }`]: any
  }

  export interface CSSProperties extends CustomProperties {
  }
}

