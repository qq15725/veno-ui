// Utils
import { computed, onActivated, onBeforeUnmount, onDeactivated, ref } from 'vue'
import { getCurrentInstance, getUid, propsFactory } from '../../utils'
import { useLayout } from './layout'

// Types
import type { LayoutItemProps } from './types'
import type { PropType, Ref } from 'vue'

export const makeLayoutItemProps = propsFactory({
  modelValue: {
    type: Boolean as PropType<boolean | null>,
    default: true,
  },
  name: String,
  position: {
    type: String as PropType<'absolute' | 'fixed'>,
    default: 'absolute',
  },
  anchor: {
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    default: 'left',
  },
  priority: {
    type: [String, Number],
    default: 0,
  },
}, 'layout-item')

export function useLayoutItem(props: Ref<LayoutItemProps & { name?: string }>) {
  const layout = useLayout()
  const id = props.value.name ?? `layout-item-${ getUid() }`
  const vm = getCurrentInstance('useLayoutItem')
  const isKeptAlive = ref(false)
  const {
    layoutItemStyles,
    layoutItemScrimStyles,
  } = layout.register(vm, id, computed(() => ({
    ...props.value,
    active: !isKeptAlive.value && props.value.active,
  })))
  onDeactivated(() => isKeptAlive.value = true)
  onActivated(() => isKeptAlive.value = false)
  onBeforeUnmount(() => layout.unregister(id))
  return {
    layoutItemStyles,
    layoutRect: layout.layoutRect,
    layoutItemScrimStyles,
  }
}
