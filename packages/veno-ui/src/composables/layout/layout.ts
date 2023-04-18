// Utils
import { computed, inject, provide, reactive, ref } from 'vue'
import {
  convertToUnit,
  getCurrentInstance,
  getCurrentInstanceName,
  propsFactory,
} from '@veno-ui/utils'
import { findChildrenWithProvide } from '../../utils'

// Composables
import { useResizeObserver } from '../resize-observer'

// Types
import type { ExtractPropTypes, InjectionKey, Prop, Ref } from 'vue'
import type {
  LayoutAnchor,
  LayoutInstance,
  LayoutItem,
  LayoutItemProps,
  LayoutLayer,
} from './types'

export const LayoutKey: InjectionKey<LayoutInstance> = Symbol.for('veno-ui:layout')

export const ROOT_ZINDEX = 1000

export const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => ([]),
  } as Prop<string[]>,
  fullHeight: Boolean,
}, 'layout')

export function provideLayout(
  props: ExtractPropTypes<ReturnType<typeof makeLayoutProps>>,
  name = getCurrentInstanceName(),
) {
  const rootVm = getCurrentInstance('provideLayout')
  const parentLayout = inject(LayoutKey, null)
  const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX)
  const itemIds = reactive<string[]>([])
  const itemMap = new Map<string, Ref<LayoutItemProps>>()
  const { resizeRef, contentRect: layoutRect } = useResizeObserver()
  const overlays = ref<number[]>([])

  function generate() {
    return (
      itemIds
        .map(id => {
          const item = itemMap.get(id)!.value
          return {
            id,
            size: Number(item.size),
            position: item.position ?? 'absolute',
            anchor: item.anchor ?? 'left',
            active: !!item.active,
            priority: Number(item.priority ?? 0),
            layoutSize: Number(item.layoutSize ?? item.size),
            disableTransition: Boolean(item.disableTransition),
          }
        })
        .sort((a, b) => b.priority - a.priority)
        .reduce<{ items: LayoutItem[]; layer: LayoutLayer }>(
          ({ items, layer }, item) => ({
            items: [...items, { ...layer, ...item }],
            layer: {
              ...layer,
              [item.anchor]: layer[item.anchor] + (item.active ? item.layoutSize : 0),
            },
          }),
          {
            items: [],
            layer: { top: 0, right: 0, bottom: 0, left: 0 },
          },
        )
    )
  }

  const items = computed(() => generate().items)

  const getLayoutItem = (id: string) => items.value.find(item => item.id === id)

  const computedOverlaps = computed(() => {
    const overlaps = props.overlaps ?? []
    const map = new Map<string, { anchor: LayoutAnchor; amount: number }>()
    for (const overlap of overlaps.filter(item => item.includes(':'))) {
      const [top, bottom] = overlap.split(':')
      const topLayoutItem = getLayoutItem(top)
      const bottomLayoutItem = getLayoutItem(bottom)
      if (!topLayoutItem || !bottomLayoutItem) continue
      const { anchor: topAlign, layoutSize: topAmount } = topLayoutItem
      const { anchor: bottomAlign, layoutSize: bottomAmount } = bottomLayoutItem
      if (!topAlign || !bottomAlign || !topAmount || !bottomAmount) continue
      map.set(bottom, { anchor: topAlign, amount: topAmount })
      map.set(top, { anchor: bottomAlign, amount: -bottomAmount })
    }
    return map
  })

  const transitionEnabled = computed(() => !items.value.some(ref => ref.disableTransition))

  provide(LayoutKey, {
    register: (vm, id, itemProps) => {
      itemMap.set(id, itemProps)
      const instances = findChildrenWithProvide(LayoutKey, rootVm?.vnode)
      const instanceIndex = instances.indexOf(vm)
      if (instanceIndex > -1) {
        itemIds.splice(instanceIndex, 0, id)
      } else {
        itemIds.push(id)
      }

      const layoutItemStyles = computed(() => {
        const { items } = generate()
        const index = items.findIndex(i => i.id === id)
        const item = items[index]
        if (!item) throw new Error(`Could not find layout item "${ id }`)
        const overlap = computedOverlaps.value.get(id)
        if (overlap) item[overlap.anchor] += overlap.amount
        const isHorizontal = item.anchor === 'left' || item.anchor === 'right'
        const isOppositeHorizontal = item.anchor === 'right'
        const isOppositeVertical = item.anchor === 'bottom'
        return {
          [item.anchor]: item.anchor === 'right' ? 'calc(0px + var(--ve-scrollbar-offset, 0px))' : '0px',
          height: isHorizontal ? `calc(100% - ${ item.top }px - ${ item.bottom }px)` : `${ item.size }px`,
          marginLeft: isOppositeHorizontal ? undefined : `${ item.left }px`,
          marginRight: isOppositeHorizontal ? `${ item.right }px` : undefined,
          marginTop: item.anchor !== 'bottom' ? `${ item.top }px` : undefined,
          marginBottom: item.anchor !== 'top' ? `${ item.bottom }px` : undefined,
          width: !isHorizontal ? `calc(100% - ${ item.left }px - ${ item.right }px)` : `${ item.size }px`,
          zIndex: rootZIndex.value + (items.length * 2) - (index * 2),
          transform: `translate${ isHorizontal ? 'X' : 'Y' }(${ (item.active ? 0 : -110) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1) }%)`,
          position: item.position === 'absolute' || rootZIndex.value !== ROOT_ZINDEX
            ? 'absolute'
            : 'fixed',
          ...(transitionEnabled.value ? undefined : { transition: 'none' }),
        }
      })
      const layoutItemScrimStyles = computed(() => ({
        zIndex: layoutItemStyles.value.zIndex - 1,
        position: rootZIndex.value === ROOT_ZINDEX ? 'fixed' : 'absolute',
      }))

      return {
        layoutItemStyles,
        layoutItemScrimStyles,
      }
    },
    unregister: (id: string) => {
      itemIds.splice(itemIds.indexOf(id), 1)
      itemMap.delete(id)
    },
    mainStyles: computed(() => {
      const { layer } = generate()
      return {
        position: 'relative',
        paddingLeft: convertToUnit(layer.left),
        paddingRight: convertToUnit(layer.right),
        paddingTop: convertToUnit(layer.top),
        paddingBottom: convertToUnit(layer.bottom),
        ...(transitionEnabled.value ? undefined : { transition: 'none' }),
      }
    }),
    getLayoutItem,
    items,
    layoutRect,
    rootZIndex,
    overlays,
  })

  return {
    layoutClasses: computed(() => ({
      [`${ name }--full-height`]: props.fullHeight,
    })),
    layoutStyles: computed(() => ({
      zIndex: rootZIndex.value,
    })),
    getLayoutItem,
    items,
    layoutRect,
    layoutRef: resizeRef,
  }
}

export function useLayout(): LayoutInstance {
  const layout = inject(LayoutKey)
  if (!layout) throw new Error('[VenoUi] Could not find layout instance')
  return layout
}
