// Utils
import { inject, onScopeDispose, ref } from 'vue'

// Types
import type { InjectionKey, Ref } from 'vue'

export interface DraggableSortableGroupItem
{
  findContains: (el: HTMLElement | undefined) => { key: any, el: HTMLElement } | undefined
  put: Ref<boolean>
  group: Ref<string | undefined>
  clone: (key: any) => any
  enter: (key: any, value: any, from: {
    id: string,
    key: any,
    position: { left: number, top: number }
  }) => Promise<void>
  leave: (key: any) => Promise<void>
}

export const DraggableSortableGroupKey: InjectionKey<ReturnType<typeof createDraggableSortableGroup>> = Symbol.for('veno-ui:draggable-sortable-group')

export function createDraggableSortableGroup () {
  const items = new Map<string, DraggableSortableGroupItem>()
  const swapping = ref(false)

  const find = (targetId: string, targetEl: HTMLElement) => {
    for (let [id, item] of items) {
      if (id !== targetId) {
        const res = item.findContains(targetEl)
        if (res) {
          return [item, id, res.key, res.el]
        }
      }
    }
    return [undefined, undefined, undefined, undefined]
  }

  return {
    register: (id: string, item: DraggableSortableGroupItem) => items.set(id, item),
    unregister: (id: string) => items.delete(id),
    trySwap: async (
      from: { id: string, key: any, position: { left: number, top: number } },
      to: { el: HTMLElement }
    ) => {
      if (swapping.value) return

      const [toItem, toParentId, toParentKey] = find(from.id, to.el)

      if (from.id === toParentId || !toItem?.group.value) return

      const fromItem = items.get(from.id)

      if (!fromItem?.group.value || toItem.group.value !== fromItem.group.value) return

      swapping.value = true

      const value = fromItem.clone(from.key)

      if (fromItem.put.value && toItem.put.value) {
        await fromItem.leave(from.key)
      }

      if (toItem.put.value) {
        await toItem.enter(toParentKey, value, from)
      }
      swapping.value = false
    },
  }
}

export function useDraggableSortableGroupItem (id: string, item: DraggableSortableGroupItem) {
  const group = inject(DraggableSortableGroupKey)

  group?.register(id, item)

  onScopeDispose(() => {
    group?.unregister(id)
  })

  return group
}
