import type { ComponentPublicInstance, FunctionalComponent } from 'vue'
import type { VNodeChild } from 'vue'

declare global
{
  namespace JSX
  {
    interface ElementChildrenAttribute
    {
      $children: any
    }
  }
}

declare module 'vue'
{
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>
}

declare module '@vue/runtime-dom'
{
  export interface HTMLAttributes
  {
    $children?: VNodeChild
  }

  export interface SVGAttributes
  {
    $children?: VNodeChild
  }
}