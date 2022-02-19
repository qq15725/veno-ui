import type { ComponentPublicInstance, FunctionalComponent } from 'vue'

declare global
{
  namespace JSX
  {
    interface ElementChildrenAttribute
    {
      $children
    }
  }
}

declare module 'vue'
{
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>
}

declare module '@vue/runtime-dom'
{
  import type { VNodeChild } from '@vue/runtime-core'

  export interface HTMLAttributes
  {
    $children?: VNodeChild
  }

  export interface SVGAttributes
  {
    $children?: VNodeChild
  }
}