import {
  reactive,
  ref,
  toRaw,
  toRef,
  provide,
  inject,
  watch,
  getCurrentInstance,
  onBeforeUnmount,
} from 'vue'

import { propsFactory, getUid, mergeDeep } from '../utils'

import type { InjectionKey, Ref, UnwrapRef } from 'vue'
import type { UnwrapNestedRefs } from '@vue/reactivity'

interface DragsortGroupProvide
{
  register: (item: DragsortItem) => void
  unregister: (id: number) => void
  items: UnwrapNestedRefs<DragsortItem[]>
  selected: Ref<number | null>
  select: (id: number) => void
  moveTo: (target: { id: number, index?: number }) => void
}

interface DragsortItem
{
  id: number
  selected: Ref<number | null>
  put: Ref<boolean>
  group: Ref<string | undefined>
  items: Ref<any[]>
  clone: Ref<(v: any) => any>
  updateModelValue: () => void
}

interface DragsortProps
{
  modelValue: any[]
  put: boolean
  group?: string
  clone: (v: any) => any
}

export const makeDragsortProps = propsFactory({
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
    type: Function,
    default: (val: any) => val,
  },
}, 'dragsort')

export const DragSortGroupSymbol: InjectionKey<DragsortGroupProvide> = Symbol.for('veno-ui:drag-sort-group')

export function useDragsort (
  props: DragsortProps,
  injectKey = DragSortGroupSymbol
) {
  const id = getUid()
  const selected = ref<number | null>(null)
  const put = toRef(props, 'put')
  const group = toRef(props, 'group')
  const clone = toRef(props, 'clone')
  const items = ref<Record<string, any>[]>([])

  watch(
    () => props.modelValue,
    value => {
      if (items.value !== value) {
        items.value = [...toRaw(value)]
      }
    },
    { immediate: true, deep: true }
  )

  const provide = inject(injectKey, null)

  if (provide) {
    provide.register({
      id,
      selected,
      put,
      group,
      items,
      clone,
      updateModelValue,
    })

    onBeforeUnmount(() => {
      provide.unregister(id)
    })
  }

  const vm = getCurrentInstance()

  function updateModelValue () {
    vm?.emit('update:modelValue', [
      ...toRaw(items.value).map(v => mergeDeep({}, v))
    ])
  }

  function swap (index: number) {
    if (selected.value === null) return

    [
      items.value[selected.value],
      items.value[index],
      selected.value,
    ] = [
      items.value[index],
      items.value[selected.value],
      index,
    ]
  }

  function makeDragAreaOn (index?: number) {
    function dragenter (e: DragEvent) {
      if (selected.value === index) return

      if (selected.value !== null && index !== undefined) {
        if (put.value) {
          swap(index)
        }
      } else if (provide) {
        provide.moveTo({ id, index })
      }
    }

    function dragover (e: DragEvent) {
      e.preventDefault()
    }

    return {
      dragenter,
      dragover,
    }
  }

  function makeDragOn (index: number) {
    function mousedown (e: MouseEvent) {
      selected.value = index
      if (provide) provide.select(id)
      if (!vm?.vnode.el) {
        return
      }
      const vnodeEl = vm.vnode.el.nodeType === 1
        ? vm.vnode.el
        : vm.vnode.el.parentElement
      const el = vnodeEl.children[index] as HTMLElement
      el.setAttribute('draggable', 'true')
      el.addEventListener('dragstart', dragstart)
      el.addEventListener('dragend', dragend)
      window.addEventListener('mouseup', mouseup)

      function mouseup () {
        window.removeEventListener('mouseup', mouseup)
        el.removeAttribute('draggable')
      }
    }

    function dragstart (e: DragEvent) {
      if (!e.dataTransfer) return

      const el = e.target as HTMLElement

      e.dataTransfer.setData('Text', el.textContent || '')
      e.dataTransfer.effectAllowed = 'move'
    }

    function dragend (e: DragEvent) {
      if (selected.value !== null) {
        selected.value = null
        updateModelValue()
      }

      const el = e.target as HTMLElement
      el.removeAttribute('draggable')
      el.removeEventListener('dragstart', dragstart)
      el.removeEventListener('dragend', dragend)
    }

    return {
      mousedown
    }
  }

  function makeOn (index: number) {
    return {
      ...makeDragOn(index),
      ...makeDragAreaOn(index),
    }
  }

  return {
    items,
    makeDragOn,
    makeDragAreaOn,
    makeOn,
  }
}

export function createDragsortGroup (injectKey = DragSortGroupSymbol) {
  const items = reactive<DragsortItem[]>([])
  const selected = ref<number | null>(null)

  function register (item: DragsortItem) {
    items.push(item as unknown as UnwrapRef<DragsortItem>)
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

  function moveTo (target: { id: number, index?: number }) {
    if (selected.value === null) return

    const item = find(target.id)

    if (!item || item.group === undefined) return

    const selectedItem = find(selected.value)

    if (
      !selectedItem
      || selectedItem.group === undefined
      || item.group !== selectedItem.group
      || selectedItem.selected === null
    ) return

    const value = selectedItem.clone(selectedItem.items[selectedItem.selected])

    if (selectedItem.put && item.put) {
      selectedItem.items.splice(selectedItem.selected, 1)
      selectedItem.updateModelValue()
    }

    if (item.put) {
      if (target.index !== undefined) {
        item.items.splice(target.index, 0, value)
        item.selected = target.index
      } else {
        item.items.push(value)
        item.selected = 0
      }
      select(item.id)
      item.updateModelValue()
    }
  }

  const state = {
    register,
    unregister,
    items,
    selected,
    select,
    moveTo,
  }

  provide(injectKey, state)

  return state
}
