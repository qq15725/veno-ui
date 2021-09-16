import {
  reactive,
  ref,
  toRef,
  provide,
  inject,
  watchEffect,
  getCurrentInstance,
  onBeforeUnmount,
} from 'vue'

import { propsFactory, getUid } from '../utils'

import type { VNode, InjectionKey, PropType, Ref, UnwrapRef } from 'vue'
import type { UnwrapNestedRefs } from '@vue/reactivity'

interface DragSortProvide
{
  register: (item: DragSortItem) => void
  unregister: (id: number) => void
  items: UnwrapNestedRefs<DragSortItem[]>
  selected: Ref<number | null>
  select: (id: number) => void
  dragenter: (id: number, index?: number) => void
  dragleave: (id: number, index?: number) => void
}

interface DragSortItem
{
  id: number
  selected: Ref<number | null>
  put: Ref<boolean>
  group: Ref<string | undefined>
  find: (index: number) => void
  add: (newIndex: number, item: any) => void
  remove: (oldIndex: number) => void
  emit: () => void
}

interface DragSortProps
{
  modelValue: any[]
  put: boolean
  group?: string
  clone: (v: any) => any
}

export const makeDragSortProps = propsFactory({
  modelValue: {
    type: Array,
    default: () => ([]),
  },
  put: {
    type: Boolean,
    default: true,
  },
  group: String,
  clone: {
    type: Function as PropType<(v: any) => any>,
    default: (v: any) => v,
  },
}, 'drag-sort')

export const DragSortProviderKey: InjectionKey<DragSortProvide> = Symbol.for('veno-ui:drag-sort-provide')

export function useDragSort (
  props: DragSortProps,
  injectKey = DragSortProviderKey
) {
  const id = getUid()
  const selected = ref<number | null>(null)
  const put = toRef(props, 'put')
  const group = toRef(props, 'group')
  const items = ref<any[]>([])
  const state = ref<Record<string, any> | null>(null)

  watchEffect(() => items.value = [...props.modelValue])

  const provide = inject(injectKey, null)

  if (provide) {
    provide.register({
      id,
      selected,
      put,
      group,
      find,
      add,
      remove,
      emit,
    })

    onBeforeUnmount(() => {
      provide.unregister(id)
    })
  }

  const vm = getCurrentInstance()

  function find (index: number) {
    return props.clone(items.value[index])
  }

  function add (newIndex: number, item: any) {
    items.value.splice(newIndex, 0, item)
    state.value = {
      added: { item, newIndex }
    }
  }

  function remove (oldIndex: number) {
    const item = items.value[oldIndex]
    items.value.splice(oldIndex, 1)
    state.value = {
      removed: { item, oldIndex }
    }
  }

  function move (oldIndex: number, newIndex: number) {
    const item = items.value[oldIndex]
    items.value.splice(
      newIndex,
      0,
      items.value.splice(oldIndex, 1)[0]
    )
    state.value = {
      moved: { item, oldIndex, newIndex }
    }
  }

  function emit () {
    vm?.emit('update:modelValue', items.value)

    if (state.value) {
      vm?.emit('change', state.value)
    }
  }

  function makeDragArea (index?: number) {
    function dragenter (e: DragEvent) {
      if (selected.value === index) return

      if (selected.value !== null
        && index !== undefined
        && put.value) {
        move(selected.value, index)
        selected.value = index
      }

      if (provide) provide.dragenter(id, index)
    }

    function dragleave (e: DragEvent) {
      if (selected.value === index) return

      if (provide) provide.dragleave(id, index)
    }

    function dragover (e: DragEvent) {
      e.preventDefault()
    }

    return {
      dragAreaOn: {
        dragenter,
        dragleave,
        dragover,
      },
    }
  }

  function makeDrag (index: number) {
    const dragNode = ref<VNode | null>(null)

    function mousedown (e: MouseEvent) {
      if (!dragNode.value || !dragNode.value.el) return
      dragNode.value.el.setAttribute('draggable', 'true')
      window.addEventListener('dragstart', dragstart)
      window.addEventListener('dragend', dragend)
      window.addEventListener('mouseup', function mouseup () {
        window.removeEventListener('mouseup', mouseup)
        dragNode.value?.el?.removeAttribute('draggable')
      })
      selected.value = index
      if (provide) provide.select(id)
    }

    function dragstart (e: DragEvent) {
      if (!e.dataTransfer) return
      e.dataTransfer.setData('Text', dragNode.value?.el?.textContent || '')
      e.dataTransfer.effectAllowed = 'move'
    }

    function dragend (e: DragEvent) {
      dragNode.value?.el?.removeAttribute('draggable')
      window.removeEventListener('dragstart', dragstart)
      window.removeEventListener('dragend', dragend)
      selected.value = null
      emit()
    }

    return {
      dragNode,
      dragOn: {
        mousedown,
      },
    }
  }

  return {
    items,
    makeDrag,
    makeDragArea,
  }
}

export function createDragSortProvider (injectKey = DragSortProviderKey) {
  const items = reactive<DragSortItem[]>([])
  const selected = ref<number | null>(null)

  function register (item: DragSortItem) {
    items.push(item as unknown as UnwrapRef<DragSortItem>)
  }

  function unregister (id: number) {
    items.splice(items.findIndex(item => item.id === id), 1)
  }

  function select (id: number) {
    if (selected.value && selected.value !== id) {
      const selectedItem = find(selected.value)
      if (selectedItem) {
        selectedItem.selected = null
      }
    }
    selected.value = id
  }

  function find (id: number) {
    return items.find(v => v.id === id)
  }

  function dragenter (id: number, index?: number) {
    if (selected.value === null || selected.value === id) return

    const item = find(id)

    if (!item || item.group === undefined) return

    const selectedItem = find(selected.value)

    if (
      !selectedItem
      || selectedItem.group === undefined
      || item.group !== selectedItem.group
      || selectedItem.selected === null
    ) return

    const value = selectedItem.find(selectedItem.selected)

    if (selectedItem.put && item.put) {
      selectedItem.remove(selectedItem.selected)
      selectedItem.emit()
    }

    if (item.put) {
      index = index || 0
      item.add(index, value)
      item.selected = index
      item.emit()
      select(item.id)
    }
  }

  function dragleave (id: number, index?: number) {
    // TODO
  }

  const state = {
    register,
    unregister,
    items,
    selected,
    select,
    dragenter,
    dragleave,
  }

  provide(injectKey, state)

  return state
}
