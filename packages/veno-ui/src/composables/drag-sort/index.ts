// Utils
import {
  ref,
  toRef,
  inject,
  watchEffect,
  getCurrentInstance,
  onBeforeUnmount,
  watch,
} from 'vue'

// Composables
import { useMove } from '../move'
import { useDragArea } from '../drag-area'
import { propsFactory, getUid } from '../../utils'

// Types
import type { InjectionKey, PropType, Ref, UnwrapRef } from 'vue'

interface DragSortInstance
{
  register: (item: DragSortItem) => void
  unregister: (id: number) => void
  items: Ref<UnwrapRef<DragSortItem[]>>
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

export const DragSortKey: InjectionKey<DragSortInstance> = Symbol.for('veno-ui:drag-sort')

export function useDragSort (props: DragSortProps) {
  const id = getUid()
  const selected = ref<number | null>(null)
  const put = toRef(props, 'put')
  const group = toRef(props, 'group')
  const items = ref<any[]>([])
  const state = ref<Record<string, any> | null>(null)

  watchEffect(() => items.value = [...props.modelValue])

  const provide = inject(DragSortKey, null)

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

  // drop
  function makeDragArea (index?: number) {
    const { dragAreaState, dragAreaOn } = useDragArea()

    watch(dragAreaState, state => {
      switch (state) {
        case 'entered':
          if (selected.value === index) return

          if (selected.value !== null
            && index !== undefined
            && put.value) {
            move(selected.value, index)
            selected.value = index
          }

          if (provide) provide.dragenter(id, index)
          break
        case 'left':
          if (selected.value === index) return

          if (provide) provide.dragleave(id, index)
          break
        case 'dropped':
          //
          break
      }
    })

    return {
      dragAreaOn,
    }
  }

  function makeDrag (index: number) {
    const { moveOn, moveState, movingElement } = useMove({ draggable: true })

    watch(moveState, state => {
      switch (state) {
        case 'moving':
          selected.value = index
          if (provide) provide.select(id)
          break
        case 'moved':
          selected.value = null
          emit()
          break
      }
    })

    return {
      dragNode: movingElement,
      dragOn: moveOn,
    }
  }

  return {
    items,
    makeDrag,
    makeDragArea,
  }
}

export function createDragSort () {
  const items = ref<DragSortItem[]>([])
  const selected = ref<number | null>(null)

  function register (item: DragSortItem) {
    items.value.push(item as unknown as UnwrapRef<DragSortItem>)
  }

  function unregister (id: number) {
    items.value.splice(items.value.findIndex(item => item.id === id), 1)
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
    return items.value.find(v => v.id === id)
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

  return {
    register,
    unregister,
    items,
    selected,
    select,
    dragenter,
    dragleave,
  }
}
