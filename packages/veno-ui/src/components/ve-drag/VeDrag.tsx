// Utils
import { defineComponent } from 'vue'
import { makeResizeProps } from '../../composables/resize'
import { makeDragProps, useDrag } from '../../composables/drag'

// Components
import VeResize from './VeResize'

// Types
import type { PropType } from 'vue'
import type { DragModelValue } from '../../composables/drag'
import type { ResizeModelValue } from '../../composables/resize'

export default defineComponent({
  name: 'VeDrag',

  props: {
    resizable: Boolean,
    ...makeResizeProps(),
    ...makeDragProps(),
    modelValue: Object as PropType<DragModelValue & ResizeModelValue>,
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots, emit }) {
    const { dragOn, dragStyles } = useDrag(props)

    return () => {
      if (!props.resizable) {
        return slots.default?.({
          on: dragOn,
          style: dragStyles.value
        })
      }

      return (
        <VeResize
          { ...props }
          onMousedown={ dragOn.mousedown }
          onTouchstart={ dragOn.touchstart }
          style={ [
            dragStyles.value
          ] }
          onUpdate:modelValue={
            val => emit('update:modelValue', { ...props.modelValue, ...val })
          }
        >
          { slots.default?.() }
        </VeResize>
      )
    }
  }
})