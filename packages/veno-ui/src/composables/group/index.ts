// Utils
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  toRef,
} from 'vue'
import { consoleWarn, deepEqual, findChildren, getUid, propsFactory, wrapInArray } from '../../utils'

// Composables
import { useProxiedModel } from '../proxied-model'

// Types
import type {
  ComponentInternalInstance, ExtractPropTypes, InjectionKey, PropType, Ref,
  UnwrapRef,
} from 'vue'

interface GroupItem {
  id: string
  value: Ref<unknown>
  disabled: Ref<boolean | undefined>
}

interface GroupProps {
  disabled?: boolean
  modelValue?: unknown
  multiple?: boolean
  mandatory?: boolean | 'force'
  max?: number
  selectedClass?: string
  'onUpdate:modelValue': ((val: unknown) => void) | undefined
}

export interface GroupInstance {
  vm: ComponentInternalInstance | null
  register: (item: GroupItem, cmp: ComponentInternalInstance) => void
  unregister: (id: string) => void
  select: (id: string, value: boolean) => void
  selected: Ref<any[]>
  isSelected: (id: string) => boolean
  prev: () => void
  next: () => void
  selectedClass: Ref<string | undefined>
  items: Ref<{
    id: string
    value: unknown
    disabled: boolean | undefined
  }[]>
  disabled: Ref<boolean | undefined>
}

export interface GroupItemInstance {
  id: string
  isSelected: Ref<boolean>
  toggle: () => void
  select: (value: boolean) => void
  selectedClass: Ref<string | false | undefined>
  value: Ref<unknown>
  disabled: Ref<boolean | undefined>
  group: GroupInstance
}

export const makeGroupProps = propsFactory({
  /**
   * @zh 选择的值
   */
  modelValue: {
    type: [Number, Boolean, String, Array, Object],
    default: undefined,
  },

  /**
   * @zh 支持多选
   */
  multiple: Boolean,

  /**
   * @zh 是否强制选择
   */
  mandatory: [Boolean, String] as PropType<boolean | 'force'>,

  /**
   * @zh 最大值
   */
  max: Number,

  /**
   * @zh 选中后的 class
   */
  selectedClass: String,

  /**
   * @zh 是否禁用
   */
  disabled: Boolean,
}, 'group')

export const makeGroupItemProps = propsFactory({
  /**
   * @zh 选中后的值
   */
  value: null,

  /**
   * @zh 是否禁用
   */
  disabled: Boolean,

  /**
   * @zh 选中后的 class
   */
  selectedClass: String,
}, 'group-item')

type GroupItemProps = ExtractPropTypes<ReturnType<typeof makeGroupItemProps>>

// Composables
export function useGroupItem(
  props: GroupItemProps,
  injectKey: InjectionKey<GroupInstance>,
  required?: true,
): GroupItemInstance
export function useGroupItem(
  props: GroupItemProps,
  injectKey: InjectionKey<GroupInstance>,
  required: false,
): GroupItemInstance | null
export function useGroupItem(
  props: GroupItemProps,
  injectKey: InjectionKey<GroupInstance>,
  required = true,
): GroupItemInstance | null {
  const vm = getCurrentInstance()

  if (!vm) {
    throw new Error(
      '[VenoUi] useGroupItem composable must be used inside a component setup function',
    )
  }

  const group = inject(injectKey, null)

  if (!group) {
    if (!required) return group

    throw new Error(`[VenoUi] Could not find useGroup injection with symbol ${ injectKey.description }`)
  }

  const id = `ve-group-item-${ getUid() }`
  const value = toRef(props, 'value')
  const disabled = computed(() => group.disabled.value || props.disabled)

  group.register({
    id,
    value,
    disabled,
  }, vm)

  onBeforeUnmount(() => group.unregister(id))

  const isSelected = computed(() => group.isSelected(id))

  const selectedClass = computed(() => isSelected.value && (group.selectedClass.value ?? props.selectedClass))

  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: (value: boolean) => group.select(id, value),
    selectedClass,
    value,
    disabled,
    group,
  }
}

export function useGroup(
  props: GroupProps,
  injectKey: InjectionKey<GroupInstance>,
) {
  let isUnmounted = false
  const items = ref<GroupItem[]>([])
  const selected = useProxiedModel(
    props,
    'modelValue',
    [],
    v => {
      if (v == null) return []

      return getIds(items.value, wrapInArray(v))
    },
    v => {
      const arr = getValues(items.value, v)

      return props.multiple ? arr : arr[0]
    },
  )

  const groupVm = getCurrentInstance()

  function register(item: GroupItem, vm: ComponentInternalInstance) {
    // Is there a better way to fix this typing?
    const unwrapped = item as unknown as UnwrapRef<GroupItem>
    const index = findChildren(groupVm?.vnode)
      .slice(1) // First one is group component itself
      // @ts-expect-error
      .filter(cmp => !!cmp.provides[injectKey as any])
      .indexOf(vm)
    if (index > -1) items.value.splice(index, 0, unwrapped)
    else items.value.push(unwrapped)
  }

  function unregister(id: string) {
    if (isUnmounted) return

    selected.value = selected.value.filter(v => v !== id)

    forceMandatoryValue()

    const index = items.value.findIndex(item => item.id === id)
    items.value.splice(index, 1)
  }

  // If mandatory and nothing is selected, then select first non-disabled item
  function forceMandatoryValue() {
    const item = items.value.find(item => !item.disabled)
    if (item && props.mandatory === 'force' && !selected.value.length) {
      selected.value = [item.id]
    }
  }

  onMounted(() => {
    forceMandatoryValue()
  })

  onBeforeUnmount(() => {
    isUnmounted = true
  })

  function select(id: string, isSelected: boolean) {
    const item = items.value.find(item => item.id === id)
    if (isSelected && item?.disabled) return

    if (props.multiple) {
      const internalValue = selected.value.slice()
      const index = internalValue.findIndex(v => v === id)

      // We can't remove value if group is
      // mandatory, value already exists,
      // and it is the only value
      if (
        props.mandatory
        && index > -1
        && internalValue.length <= 1
      ) return

      // We can't add value if it would
      // cause max limit to be exceeded
      if (
        props.max != null
        && index < 0
        && internalValue.length + 1 > props.max
      ) return

      if (index < 0 && isSelected) internalValue.push(id)
      else if (index >= 0 && !isSelected) internalValue.splice(index, 1)

      selected.value = internalValue
    } else {
      if (props.mandatory && selected.value.includes(id)) return

      selected.value = isSelected ? [id] : []
    }
  }

  function step(offset: number) {
    // getting an offset from selected value obviously won't work with multiple values
    if (props.multiple) consoleWarn('This method is not supported when using "multiple" prop')

    if (!selected.value.length) {
      const item = items.value.find(item => !item.disabled)
      item && (selected.value = [item.id])
    } else {
      const currentId = selected.value[0]
      const currentIndex = items.value.findIndex(i => i.id === currentId)

      let newIndex = (currentIndex + offset) % items.value.length
      let newItem = items.value[newIndex]

      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.value.length
        newItem = items.value[newIndex]
      }

      if (newItem.disabled) return

      selected.value = [items.value[newIndex].id]
    }
  }

  const state = {
    vm: groupVm,
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, 'disabled'),
    prev: () => step(items.value.length - 1),
    next: () => step(1),
    isSelected: (id: string) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items,
  }

  provide(injectKey, state)

  return state
}

function getIds(items: UnwrapRef<GroupItem[]>, modelValue: any[]) {
  const ids = []
  for (const item of items) {
    if (item.value != null) {
      if (modelValue.find(value => deepEqual(value, item.value)) != null) {
        ids.push(item.id)
      }
    } else if (modelValue.includes(item.id)) {
      ids.push(item.id)
    }
  }

  return ids
}

function getValues(items: UnwrapRef<GroupItem[]>, ids: any[]) {
  const values = []

  for (const item of items) {
    if (ids.includes(item.id)) {
      values.push(item.value != null ? item.value : item.id)
    }
  }

  return values
}
