// Styles
import './styles/ve-drag.scss'

// Utils
import { defineComponent, ref, computed, watch } from 'vue'
import { convertToUnit } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeMoveProps, useMove } from '../../composables/move'
import { makeResizeProps, useResize } from '../../composables/resize'

// Types
import type { PropType, Ref } from 'vue'

export interface DragModel
{
  left: number
  top: number
  width: number
  height: number
}

const defaultModel = { left: 0, top: 0, width: 30, height: 30 }

export default defineComponent({
  name: 'VeDrag',

  props: {
    moveable: {
      type: Boolean,
      default: true,
    },
    resizable: Boolean,
    // rotatable: Boolean,
    ...makeMoveProps(),
    ...makeResizeProps(),
    modelValue: Object as PropType<DragModel>,
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const model = useProxiedModel(
      props,
      'modelValue',
      { ...defaultModel }
    ) as Ref<NonNullable<DragModel>>

    const startingModel = ref({
      left: model.value.left ?? defaultModel.left,
      top: model.value.top ?? defaultModel.top,
      width: model.value.width ?? defaultModel.width,
      height: model.value.height ?? defaultModel.height,
    })

    const { moveOn, moveState, movingOffsetPosition } = useMove(props)
    const { resizeHandles, resizeState, resizingOffsetPositionDimension } = useResize(props, 've-drag')

    watch([moveState, resizeState], ([moveState, resizeState]) => {
      if (props.moveable && moveState === 'moved'
        || props.resizable && resizeState === 'resized') {
        startingModel.value = {
          left: model.value.left ?? defaultModel.left,
          top: model.value.top ?? defaultModel.top,
          width: model.value.width ?? defaultModel.width,
          height: model.value.height ?? defaultModel.height,
        }
      }
    })

    watch(movingOffsetPosition, offsetPosition => {
      if (!props.moveable) return
      model.value.top = startingModel.value.top + offsetPosition.top
      model.value.left = startingModel.value.left + offsetPosition.left
    })

    watch(resizingOffsetPositionDimension, offsetPositionDimension => {
      if (!props.resizable) return
      model.value.top = startingModel.value.top + offsetPositionDimension.top
      model.value.left = startingModel.value.left + offsetPositionDimension.left
      model.value.width = startingModel.value.width + offsetPositionDimension.width
      model.value.height = startingModel.value.height + offsetPositionDimension.height
    })

    const styles = computed(() => ({
      transform: `translate3d(${ convertToUnit(model.value.left) }, ${ convertToUnit(model.value.top) }, 0)`,
      width: convertToUnit(model.value.width),
      height: convertToUnit(model.value.height),
    }))

    return () => (
      <div
        class={ [
          've-drag',
          {
            've-drag--moveable': props.moveable,
            've-drag--resizable': props.resizable,
          },
        ] }
        style={ [
          styles.value,
        ] }
        onMousedown={ moveOn.mousedown }
        onTouchstart={ moveOn.touchstart }
      >
        { resizeHandles.value.map(({ classes, on }) => (
          <div
            class={ [
              classes.value,
            ] }
            onMousedown={ on.mousedown }
            onTouchstart={ on.touchstart }
          />
        )) }

        <div class="ve-drag__wrapper">
          { slots.default?.() }
        </div>
      </div>
    )
  }
})