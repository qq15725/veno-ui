declare module '~veno-ui/icons'
{
  import type { DefineComponent } from 'vue'
  const def: Record<string, DefineComponent>
  export default def
}

declare module '~veno-ui/icons/*'
{
  import type { DefineComponent } from 'vue'
  const def: DefineComponent
  export default def
}