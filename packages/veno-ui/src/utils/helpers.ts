// Types
import type {
  ComponentInternalInstance,
  VNodeChild,
  InjectionKey,
} from 'vue'

export function findChildren (vnode?: VNodeChild): ComponentInternalInstance[] {
  if (!vnode || typeof vnode !== 'object') {
    return []
  }

  if (Array.isArray(vnode)) {
    return vnode
      .map(child => findChildren(child))
      .filter(v => v)
      .flat(1)
  } else if (Array.isArray(vnode.children)) {
    return vnode.children
      .map(child => findChildren(child))
      .filter(v => v)
      .flat(1)
  } else if (vnode.component) {
    return [vnode.component, ...findChildren(vnode.component?.subTree)]
      .filter(v => v)
      .flat(1)
  }

  return []
}

export function findChildrenWithProvide (provide: InjectionKey<any>, vnode?: VNodeChild): ComponentInternalInstance[] {
  return findChildren(vnode)
    .slice(1) // First one is group component itself
    .filter(cmp => !!cmp.provides[provide as any]) // TODO: Fix in TS 4.4?
}