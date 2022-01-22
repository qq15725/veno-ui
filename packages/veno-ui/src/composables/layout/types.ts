import type { Ref } from 'vue'

export type LayoutAnchor = 'top' | 'right' | 'bottom' | 'left'

export interface LayoutItemProps
{
  position?: 'absolute' | 'fixed'
  anchor?: LayoutAnchor
  active?: boolean
  size: string | number
  layoutSize?: string | number
  priority?: string | number
  disableTransition?: boolean
}

export interface LayoutLayer
{
  top: number
  right: number
  bottom: number
  left: number
}

export interface LayoutItem extends Required<LayoutItemProps>, LayoutLayer
{
  id: string
  size: number
  layoutSize: number
  priority: number
  active: boolean
}

export interface LayoutProvider
{
  register: (id: string, props: Ref<LayoutItemProps & { name?: string }>) => Ref<Record<string, unknown>>
  unregister: (id: string) => void
  mainStyles: Ref<Record<string, unknown>>
  getLayoutItem: (id: string) => LayoutItem | undefined
  items: Ref<LayoutItem[]>
}