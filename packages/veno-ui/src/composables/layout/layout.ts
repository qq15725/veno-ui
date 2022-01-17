// Utils
import { computed, inject, provide, reactive } from 'vue'
import { convertToUnit, propsFactory, getCurrentInstanceName } from '../../utils'

// Types
import type { InjectionKey, Prop, Ref, ExtractPropTypes } from 'vue'
import type {
  LayoutItemProps,
  LayoutSide,
  LayoutLayer,
  LayoutItem,
  LayoutProvider
} from './types'

export const LayoutKey: InjectionKey<LayoutProvider> = Symbol.for('veno-ui:layout')

export const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => ([]),
  } as Prop<string[]>,
  fullHeight: Boolean,
  layerZIndex: {
    type: [String, Number],
    default: 0
  },
}, 'layout')

export type LayoutProps = ExtractPropTypes<ReturnType<typeof makeLayoutProps>>

export function provideLayout (
  props: LayoutProps,
  name = getCurrentInstanceName()
) {
  const itemIds = reactive<string[]>([])
  const itemMap = new Map<string, Ref<LayoutItemProps>>()
  const handled = computed(() => (
    itemIds
      .map(id => {
        const item = itemMap.get(id)!.value
        return {
          id,
          size: Number(item.size),
          position: item.position ?? 'absolute',
          side: item.side ?? 'left',
          active: !!item.active,
          priority: Number(item.priority ?? 0),
          layoutSize: Number(item.layoutSize ?? item.size),
        }
      })
      .sort((a, b) => b.priority - a.priority)
      .reduce<{ items: LayoutItem[], layer: LayoutLayer }>(
        ({ items, layer }, item) => ({
          items: [...items, { ...layer, ...item, }],
          layer: {
            ...layer,
            [item.side]: layer[item.side] + (item.active ? item.layoutSize : 0)
          }
        }),
        { items: [], layer: { top: 0, right: 0, bottom: 0, left: 0 } }
      )
  ))
  const items = computed(() => handled.value.items)

  const getLayoutItem = (id: string) => items.value.find(item => item.id === id)

  const computedOverlaps = computed(() => {
    const overlaps = props.overlaps ?? []
    const map = new Map<string, { side: LayoutSide, amount: number }>()
    for (const overlap of overlaps.filter(item => item.includes(':'))) {
      const [top, bottom] = overlap.split(':')
      const topLayoutItem = getLayoutItem(top)
      const bottomLayoutItem = getLayoutItem(bottom)
      if (!topLayoutItem || !bottomLayoutItem) continue
      const { side: topAlign, layoutSize: topAmount } = topLayoutItem
      const { side: bottomAlign, layoutSize: bottomAmount } = bottomLayoutItem
      if (!topAlign || !bottomAlign || !topAmount || !bottomAmount) continue
      map.set(bottom, { side: topAlign, amount: topAmount })
      map.set(top, { side: bottomAlign, amount: -bottomAmount })
    }
    return map
  })

  provide(LayoutKey, {
    register: (id, itemProps) => {
      itemMap.set(id, itemProps)
      itemIds.push(id)

      return computed(() => {
        const index = items.value.findIndex(i => i.id === id)
        if (index < 0) throw new Error(`Layout item "${ id }" is missing from layout prop`)
        const item = items.value[index]
        if (!item) throw new Error(`Could not find layout item "${ id }`)
        const overlap = computedOverlaps.value.get(id)
        if (overlap) item[overlap.side] += overlap.amount
        const isHorizontal = item.side === 'left' || item.side === 'right'
        const isOppositeHorizontal = item.side === 'right'
        const isOppositeVertical = item.side === 'bottom'
        return {
          [item.side]: 0,
          height: isHorizontal ? `calc(100% - ${ item.top }px - ${ item.bottom }px)` : `${ item.size }px`,
          marginLeft: isOppositeHorizontal ? undefined : `${ item.left }px`,
          marginRight: isOppositeHorizontal ? `${ item.right }px` : undefined,
          marginTop: item.side !== 'bottom' ? `${ item.top }px` : undefined,
          marginBottom: item.side !== 'top' ? `${ item.bottom }px` : undefined,
          width: !isHorizontal ? `calc(100% - ${ item.left }px - ${ item.right }px)` : `${ item.size }px`,
          zIndex: Number(props.layerZIndex) + items.value.length - index,
          transform: `translate${ isHorizontal ? 'X' : 'Y' }(${ (item.active ? 0 : -110) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1) }%)`,
          position: item.position
        }
      })
    },
    unregister: (id: string) => {
      itemIds.splice(itemIds.indexOf(id), 1)
      itemMap.delete(id)
    },
    mainStyles: computed(() => {
      const mainLayer = handled.value.layer
      return {
        position: 'relative',
        paddingLeft: convertToUnit(mainLayer.left),
        paddingRight: convertToUnit(mainLayer.right),
        paddingTop: convertToUnit(mainLayer.top),
        paddingBottom: convertToUnit(mainLayer.bottom),
      }
    }),
    getLayoutItem,
    items,
  })

  return {
    layoutClasses: computed(() => ({
      [`${ name }--full-height`]: props.fullHeight
    })),
    getLayoutItem,
    items,
  }
}

export function useLayout (): LayoutProvider {
  const provider = inject(LayoutKey)
  if (!provider) throw new Error('[VenoUi] Could not find layout instance')
  return provider
}
