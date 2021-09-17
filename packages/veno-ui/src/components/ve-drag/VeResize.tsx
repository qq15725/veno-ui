// Styles
import './styles/ve-resize.scss'

// Utils
import { defineComponent, toRaw } from 'vue'
import { usePosition } from '../../composables/position'
import { useDimension } from '../../composables/dimensions'
import { makeResizeProps, useResize } from '../../composables/resize'

export default defineComponent({
  name: 'VeResize',

  props: {
    ...makeResizeProps(),
  },

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
    const { positionClasses, positionStyles } = usePosition(props, 've-resize')
    const { dimensionStyles } = useDimension(props)
    const { resizeHandles, resizeStyles } = useResize(props, 've-resize')

    return () => (
      <div
        class={ [
          've-resize',
          've-resize--activated',
          positionClasses.value,
        ] }
        style={ [
          positionStyles.value,
          dimensionStyles.value,
          resizeStyles.value,
        ] }
      >
        {
          resizeHandles.map(({ dragOn, resizeHandleClasses }) => {
            return (
              <div
                class={ [
                  resizeHandleClasses.value,
                ] }
                onMousedown={ dragOn.mousedown }
                onTouchstart={ dragOn.touchstart }
              >
                <div
                  class={ {
                    've-resize__handle--point': props.point,
                    've-resize__handle--line': !props.point,
                  } }
                />
              </div>
            )
          })
        }

        <div class="ve-resize__wrapper">
          { slots.default?.() }
        </div>
      </div>
    )
  }
})