export {}

import type { VNode } from 'vue'

declare global
{
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

