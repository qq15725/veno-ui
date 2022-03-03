// Utils
import { ref, toRef, watch, computed, nextTick } from 'vue'
import { propsFactory, convertToUnit, getCurrentInstanceName, getUid } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { usePointer } from '../pointer'
import { useDraggableSortableGroupItem } from '../draggable-sortable-group'

// Types
import type { ExtractPropTypes, PropType, VNode } from 'vue'
import type { DraggableSortableGroupItem } from '../draggable-sortable-group'

export const makeDraggableSortableProps = propsFactory({
  /**
   * @zh 移动项到另一组时克隆的方法
   */
  clone: Function as PropType<(v: any) => any>,

  /**
   * @zh 每项的 key
   */
  itemKey: {
    type: [String, Function],
    default: () => (v: any) => v,
  },

  /**
   * @zh 需要排序的列表
   */
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => [],
  },

  /**
   * @zh 移动项到另一个组时是否移除元素
   */
  put: {
    type: Boolean,
    default: true,
  },

  /**
   * @zh 组名
   */
  group: String,
}, 'draggable-sortable')

export function useDraggableSortable (
  props: ExtractPropTypes<ReturnType<typeof makeDraggableSortableProps>> & {
    'onUpdate:modelValue': ((val: any[]) => void) | undefined
  },
  name = getCurrentInstanceName()
) {
  const model = useProxiedModel(props, 'modelValue', props.modelValue)
  const modelEls = new Map<any, HTMLElement | undefined>()
  const modelIndexes = computed(() => {
    const indexes = new Map<any, number>()
    model.value.forEach((value, index) => indexes.set(
      typeof props.itemKey === 'function'
        ? props.itemKey(value, index)
        : value[props.itemKey],
      index
    ))
    return indexes
  })
  const ghost = ref<VNode>()
  const active = ref<any>()

  const indexToKey = (index: number) => {
    for (let [key, i] of modelIndexes.value) {
      if (index === i) return key
    }
    return undefined
  }
  const keyToIndex = (key: any) => modelIndexes.value.get(key)
  const keyToValue = (key: any) => model.value[modelIndexes.value.get(key)!]

  const {
    isPointerMoving,
    pointerDown,
    pointerUp,
    pointerDownEl,
    pointerCurrentPosition,
    pointerMovement,
    pointerEvents,
  } = usePointer({
    pointerMovePreventDefault: true,
  })
  const ghostBox = ref<DOMRect>()

  const id = `draggable-sortable-group-item-${ getUid() }`

  const item: DraggableSortableGroupItem = {
    findContains: target => {
      if (target) {
        for (let [key, el] of modelEls) {
          if (el === target || el?.contains(target)) {
            return { key, el }
          }
        }
      }
      return undefined
    },
    put: toRef(props, 'put'),
    group: toRef(props, 'group'),
    clone: (key) => {
      const value = keyToValue(key)!
      return props.clone?.(value) ?? value
    },
    enter: async (key, value, from) => {
      const index = keyToIndex(key)!
      model.value.splice(index, 0, value)
      await nextTick()
      pointerDown(new MouseEvent('mousedown', {
        clientY: from.position.top,
        clientX: from.position.left,
        relatedTarget: modelEls.get(indexToKey(index))
      }))
    },
    leave: async (key) => {
      model.value.splice(keyToIndex(key)!, 1)
      if (key === active.value) {
        pointerUp(new MouseEvent('mouseup', {
          clientY: pointerCurrentPosition.value!.top,
          clientX: pointerCurrentPosition.value!.left,
        }))
      }
    }
  }

  const group = useDraggableSortableGroupItem(id, item)

  watch(modelIndexes, () => modelEls.clear())

  watch(pointerDownEl, targetEl => {
    ghostBox.value = targetEl
      ? item.findContains(targetEl)?.el.getBoundingClientRect()
      : undefined
  })

  watch(isPointerMoving, val => {
    active.value = val
      ? item.findContains(pointerDownEl.value)?.key
      : undefined
  })

  watch(pointerCurrentPosition, val => {
    if (!val || !active.value) return

    const targetEl = document.elementFromPoint(val.left, val.top) as HTMLElement || undefined

    const key = item.findContains(targetEl)?.key

    if (key && active.value !== key) {
      if (item.put.value) {
        const oldIndex = keyToIndex(active.value)!
        const newIndex = keyToIndex(key)!
        model.value.splice(newIndex, 0, model.value.splice(oldIndex, 1)[0])
      }
    } else if (!key && targetEl) {
      group?.trySwap({
        id,
        key: active.value,
        position: pointerCurrentPosition.value!,
      }, {
        el: targetEl
      })
    }
  })

  return {
    active,
    model,
    modelIndexes,
    modelEls,
    keyToIndex,
    indexToKey,
    keyToValue,
    pointerEvents,
    ghost,
    genGhost: () => {
      return (
        <div
          class={ `${ name }__ghost` }
          style={ {
            left: convertToUnit(ghostBox.value?.left),
            top: convertToUnit(ghostBox.value?.top),
            width: convertToUnit(ghostBox.value?.width),
            height: convertToUnit(ghostBox.value?.height),
            transform: pointerMovement.value
              ? `translate3d(${ convertToUnit(pointerMovement.value.left) }, ${ convertToUnit(pointerMovement.value.top) }, 0px)`
              : undefined,
          } }
        >
          { ghost.value }
        </div>
      )
    },
  }
}
