export {}

import type { ComponentPublicInstance, FunctionalComponent, VNode } from 'vue'

declare global
{
  interface Element
  {
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

  export type Dictionary<T> = Record<string, T>

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  }

  namespace JSX
  {
    interface Element extends VNode
    {
    }

    interface IntrinsicAttributes
    {
      [name: string]: any
    }
  }
}

declare module 'vue'
{
  export type JSXComponent<Props = any> = {
    new (): ComponentPublicInstance<Props>
  } | FunctionalComponent<Props>
}

declare module '@vue/runtime-core'
{
  export interface ComponentInternalInstance
  {
    ctx: Record<string, unknown>
    provides: Record<string, unknown>
  }
}

