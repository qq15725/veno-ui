// Styles
import './styles/draggable-resizable.scss'

// Utils
import { ref, watch, toHandlers, nextTick, mergeProps } from 'vue'
import { defineComponent, convertToUnit } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeDraggableProps, useDraggable } from '../../composables/draggable'
import { makeDraggableResizableProps, useDraggableResizable } from '../../composables/draggable-resizable'
import { makeTagProps } from '../../composables/tag'

// Components
import { Tooltip } from '../../components/tooltip'

// Types
import type { PropType } from 'vue'

export const DraggableResizable = defineComponent({
  name: 'VeDraggableResizable',

  props: {
    /**
     * @zh 大小位置
     */
    modelValue: {
      type: Object as PropType<{
        left: string | number
        top: string | number
        width?: string | number
        height?: string | number
      }>,
      default: () => ({ left: 0, top: 0 })
    },

    /**
     * @zh 是否在调整大小时显示提示
     */
    tooltip: {
      type: Boolean,
      default: true,
    },

    ...makeDraggableProps(),
    ...makeDraggableResizableProps(),
    ...makeTagProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const rootEl = ref<HTMLElement>()
    const model = useProxiedModel(
      props, 'modelValue', props.modelValue,
      v => ({
        left: v?.left ? parseFloat(v?.left) : 0,
        top: v?.top ? parseFloat(v?.top) : 0,
        ...(
          props.resizable ? {
            width: v?.width ? parseFloat(v?.width) : undefined,
            height: v?.height ? parseFloat(v?.height) : undefined,
          } : undefined
        )
      }),
    )

    const previous = ref({ ...model.value })

    const { isDragging, draggableEvents, draggableMovement } = useDraggable(props)
    const { isResizing, resizeValue, genResizableAnchors } = useDraggableResizable(props)

    watch(rootEl, async el => {
      if (!el || !props.resizable) return
      await nextTick()
      const box = el.getBoundingClientRect()
      if (!model.value.width) previous.value.width = box.width
      if (!model.value.height) previous.value.height = box.height
      if (!model.value.width || !model.value.height) {
        model.value = {
          ...model.value,
          width: previous.value.width,
          height: previous.value.height,
        }
      }
    })

    watch([isDragging, isResizing], ([isDragging, isResizing]) => {
      if (props.draggable && !isDragging || props.resizable && !isResizing) {
        previous.value = { ...model.value }
      }
    })

    watch(draggableMovement, val => {
      if (!props.draggable || !isDragging.value || !val) return
      model.value = {
        ...model.value,
        top: previous.value.top + val.top,
        left: previous.value.left + val.left,
      }
    })

    watch(resizeValue, val => {
      if (!props.resizable || !isResizing.value) return
      model.value = {
        ...model.value,
        top: previous.value.top + val.top,
        left: previous.value.left + val.left,
        width: (previous.value?.width ?? 0) + val.width,
        height: (previous.value?.height ?? 0) + val.height,
      }
    })

    return () => {
      const draggable = mergeProps(toHandlers(draggableEvents.value), {
        class: 've-draggable-resizable__draggable',
      })

      const resizable = {
        style: {
          width: convertToUnit(model.value.width),
          height: convertToUnit(model.value.height),
        },
      }

      return (
        <props.tag
          ref={ rootEl }
          class={ [
            've-draggable-resizable',
            {
              've-draggable-resizable--dragging': isDragging.value,
              've-draggable-resizable--resizing': isResizing.value,
            },
          ] }
          style={ {
            transform: `translate3d(${ convertToUnit(model.value.left) }, ${ convertToUnit(model.value.top) }, 0)`,
          } }
        >
          <div class="ve-draggable-resizable__wrapper">
            { slots.default?.({
              value: model.value,
              draggable,
              resizable,
              props: mergeProps(draggable, resizable),
            }) }
          </div>

          <Tooltip
            arrow={ false }
            modelValue={ props.tooltip && isResizing.value }
            openOnHover={ false }
            positionStrategy="pointer"
            scrollStrategy="none"
            text={ `${ parseInt(model.value.width ?? 0) } x ${ parseInt(model.value.height ?? 0) }` }
          >
            { {
              activator: props.resizable
                ? ({ on: anchorProps }) => genResizableAnchors(anchorProps)
                : undefined
            } }
          </Tooltip>
        </props.tag>
      )
    }
  }
})