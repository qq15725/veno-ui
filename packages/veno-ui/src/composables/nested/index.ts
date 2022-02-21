// Utils
import { getUid, propsFactory } from '../../utils'
import { computed, inject, onBeforeUnmount, provide, ref } from 'vue'
import { multipleOpenStrategy, singleOpenStrategy } from './open-strategies'
import { classicSelectStrategy, independentSelectStrategy, leafSelectStrategy } from './select-strategies'
import { classicActiveStrategy } from './active-strategies'

// Composables
import { useProxiedModel } from '../proxied-model'

// Types
import type { InjectionKey, Prop, Ref } from 'vue'
import type { SelectStrategyFn } from './select-strategies'
import type { OpenStrategyFn } from './open-strategies'
import type { ActiveStrategyFn } from './active-strategies'

export type SelectStrategy = 'single-leaf' | 'leaf' | 'independent' | 'classic' | SelectStrategyFn
export type OpenStrategy = 'single' | 'multiple' | OpenStrategyFn
export type ActiveStrategy = 'single' | 'multiple' | ActiveStrategyFn

export interface NestedProps {
  selectStrategy: SelectStrategy | undefined
  openStrategy: OpenStrategy | undefined
  activeStrategy: ActiveStrategy | undefined
  selected: string[] | undefined
  opened: string[] | undefined
  active: string[] | undefined
  deleteAfterUnmount: boolean
  'onUpdate:selected': ((val: string[]) => void) | undefined
  'onUpdate:opened': ((val: string[]) => void) | undefined
  'onUpdate:active': ((val: string[]) => void) | undefined
}

type NestedInstance = {
  id: Ref<string | null>
  root: {
    children: Ref<Map<string, string[]>>
    parents: Ref<Map<string, string>>
    opened: Ref<Set<string>>
    active: Ref<Set<string>>
    selected: Ref<Map<string, 'on' | 'off' | 'indeterminate'>>
    selectedValues: Ref<string[]>
    register: (id: string, parentId: string | null, isGroup?: boolean) => void
    unregister: (id: string) => void
    open: (id: string, value: boolean, event?: Event) => void
    select: (id: string, value: boolean, event?: Event) => void
    activate: (id: string, value: boolean, event?: Event) => void
  }
}

const NestedKey: InjectionKey<NestedInstance> = Symbol.for('veno-ui:nested')

const emptyNested: NestedInstance = {
  id: ref(null),
  root: {
    register: () => null,
    unregister: () => null,
    parents: ref(new Map()),
    children: ref(new Map()),
    open: () => null,
    select: () => null,
    opened: ref(new Set()),
    selected: ref(new Map()),
    active: ref(new Set()),
    activate: () => null,
    selectedValues: ref([]),
  },
}

export const makeNestedProps = propsFactory({
  selectStrategy: [String, Function] as Prop<SelectStrategy>,
  openStrategy: [String, Function] as Prop<OpenStrategy>,
  activeStrategy: [String, Function] as Prop<ActiveStrategy>,
  opened: Array as Prop<string[]>,
  selected: Array as Prop<string[]>,
  active: Array as Prop<string[]>,

  /**
   * @zh 卸载 DOM 后删除
   */
  deleteAfterUnmount: {
    type: Boolean,
    default: true,
  },
}, 'nested')

export const useNested = (props: NestedProps) => {
  let isUnmounted = false
  const children = ref(new Map<string, string[]>())
  const parents = ref(new Map<string, string>())

  const opened = useProxiedModel(props, 'opened', props.opened, v => new Set(v), v => [...v.values()])
  const active = useProxiedModel(props, 'active', props.active, v => new Set(v), v => [...v.values()])

  // 激活时使用的策略
  const activeStrategy = computed(() => {
    if (typeof props.activeStrategy === 'object') return props.activeStrategy

    switch (props.activeStrategy) {
      case 'single': return classicActiveStrategy(true)
      case 'multiple':
      default:
        return classicActiveStrategy()
    }
  })

  // 选择时使用的策略
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === 'object') return props.selectStrategy

    switch (props.selectStrategy) {
      case 'single-leaf': return leafSelectStrategy(true)
      case 'leaf': return leafSelectStrategy()
      case 'independent': return independentSelectStrategy
      case 'classic':
      default: return classicSelectStrategy
    }
  })

  // 打开时使用的策略
  const openStrategy = computed(() => {
    if (typeof props.openStrategy === 'function') return props.openStrategy

    switch (props.openStrategy) {
      case 'single': return singleOpenStrategy
      case 'multiple':
      default: return multipleOpenStrategy
    }
  })

  const selected = useProxiedModel(
    props,
    'selected',
    props.selected,
    v => selectStrategy.value.in(v, children.value, parents.value),
    v => selectStrategy.value.out(v, children.value, parents.value),
  )

  onBeforeUnmount(() => {
    isUnmounted = true
  })

  const nested: NestedInstance = {
    id: ref(null),
    root: {
      opened,
      selected,
      active,
      selectedValues: computed(() => {
        const arr = []

        for (const [key, value] of selected.value.entries()) {
          if (value === 'on') arr.push(key)
        }

        return arr
      }),
      register: (id, parentId, isGroup) => {
        parentId && parents.value.set(id, parentId)

        isGroup && children.value.set(id, [])

        if (parentId != null) {
          children.value.set(parentId, [...children.value.get(parentId) || [], id])
        }
      },
      unregister: id => {
        if (isUnmounted) return

        children.value.delete(id)
        const parent = parents.value.get(id)
        if (parent) {
          const list = children.value.get(parent) ?? []
          children.value.set(parent, list.filter(child => child !== id))
        }
        parents.value.delete(id)
        opened.value.delete(id)

        if (props.deleteAfterUnmount) {
          active.value.delete(id)
          selected.value.delete(id)
        }
      },
      open: (id, value, event) => {
        const newOpened = openStrategy.value({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event,
        })

        newOpened && (opened.value = newOpened)
      },
      select: (id, value, event) => {
        const newSelected = selectStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          children: children.value,
          parents: parents.value,
          event,
        })

        newSelected && (selected.value = newSelected)
      },
      activate: (id, value, event) => {
        const newActive = activeStrategy.value({
          id,
          value,
          active: new Set(active.value),
          children: children.value,
          parents: parents.value,
          event,
        })

        newActive && (active.value = newActive)
      },
      children,
      parents,
    },
  }

  provide(NestedKey, nested)

  return nested.root
}

export const useNestedItem = (id: Ref<string | undefined>) => {
  const parent = inject(NestedKey, emptyNested)

  const computedId = computed(() => id.value ?? getUid().toString())

  const item = {
    ...parent,
    id: computedId,
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
    select: (selected: boolean, e: Event) => parent.root.select(computedId.value, selected, e),
    isSelected: computed(() => parent.root.selected.value.get(computedId.value) === 'on'),
    activate: (activated: boolean, e: Event) => parent.root.activate(computedId.value, activated, e),
    isActive: computed(() => parent.root.active.value.has(computedId.value)),
  }

  parent.root.register(computedId.value, parent.id.value, false)

  onBeforeUnmount(() => {
    parent.root.unregister(computedId.value)
  })

  return item
}

export const useNestedGroup = (props: { value: string }) => {
  const parent = inject(NestedKey, emptyNested)

  const id = computed(() => props.value ?? getUid().toString())

  const group = {
    ...parent,
    id,
    open: (open: boolean, e: Event) => parent.root.open(id.value, open, e),
    isOpen: computed(() => parent.root.opened.value.has(id.value)),
    isSelected: computed(() => parent.root.selected.value.get(id.value) === 'on'),
    isIndeterminate: computed(() => parent.root.selected.value.get(id.value) === 'indeterminate'),
  }

  parent.root.register(id.value, parent.id.value, true)

  onBeforeUnmount(() => {
    parent.root.unregister(id.value)
  })

  provide(NestedKey, group)

  return group
}
