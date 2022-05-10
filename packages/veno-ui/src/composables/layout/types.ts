import type { ComponentInternalInstance, Ref } from 'vue'

export interface LayoutInstance {
  register: (
    vm: ComponentInternalInstance,
    id: string,
    props: Ref<LayoutItemProps & { name?: string }>
  ) => {
    layoutItemStyles: Ref<Record<string, unknown>>
    layoutItemScrimStyles: Ref<Record<string, unknown>>
  }
  unregister: (id: string) => void
  mainStyles: Ref<Record<string, unknown>>
  getLayoutItem: (id: string) => LayoutItem | undefined
  items: Ref<LayoutItem[]>
  layoutRect: Ref<DOMRectReadOnly | undefined>
  rootZIndex: Ref<number>
  overlays: Ref<number[]>
}

export interface LayoutItem extends Required<LayoutItemProps>, LayoutLayer {
  id: string
  size: number
  layoutSize: number
  priority: number
  active: boolean
}

export interface LayoutLayer {
  top: number
  right: number
  bottom: number
  left: number
}

export interface LayoutItemProps {
  position?: 'absolute' | 'fixed'
  anchor?: LayoutAnchor
  active?: boolean
  size: string | number
  layoutSize?: string | number
  priority?: string | number
  disableTransition?: boolean
}

export type LayoutAnchor = 'top' | 'right' | 'bottom' | 'left'
