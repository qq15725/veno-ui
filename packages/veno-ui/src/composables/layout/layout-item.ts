// Utils
import { onBeforeUnmount } from 'vue'
import { getUid, propsFactory } from '../../utils'
import { useLayout } from './layout'

// Types
import type { LayoutItemProps } from './types'
import type { Ref, PropType } from 'vue'

export const makeLayoutItemProps = propsFactory({
  modelValue: {
    type: Boolean,
    default: true,
  },
  name: String,
  position: {
    type: String as PropType<'absolute' | 'fixed'>,
    default: 'absolute',
  },
  anchor: {
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    default: 'left'
  },
  priority: {
    type: [String, Number],
    default: 0
  },
}, 'layout-item')

export function useLayoutItem (props: Ref<LayoutItemProps & { name?: string }>) {
  const provider = useLayout()
  const id = props.value.name ?? `layout-item-${ getUid() }`
  onBeforeUnmount(() => provider.unregister(id))
  return {
    layoutItemStyles: provider.register(id, props)
  }
}