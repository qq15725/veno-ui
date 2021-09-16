// Styles
import './styles/ve-drag-resize.scss'

// Utils
import { defineComponent } from 'vue'
import { makeDragResizeProps, useDragResize } from '../../composables/drag-resize'
import { makePositionProps, usePosition } from '../../composables/position'
import { makeDimensionProps, useDimension } from '../../composables/dimensions'

export default defineComponent({
  name: 'VeDragResize',

  props: {
    point: Boolean,
    ...makeDragResizeProps(),
    ...makePositionProps(),
    ...makeDimensionProps(),
  },

  emits: {
    'update:width': (value: number) => true,
    'update:height': (value: number) => true,
  },

  setup (props, { emit, slots }) {
    const { positionClasses, positionStyles } = usePosition(props, 've-drag-resize')
    const { dimensionStyles } = useDimension(props)
    const { handles } = useDragResize(props)

    return () => (
      <div
        class={ [
          've-drag-resize',
          've-drag-resize--activated',
          positionClasses.value,
        ] }
        style={ [
          positionStyles.value,
          dimensionStyles.value,
        ] }
      >
        {
          handles.map(({ name, on }) => {
            return (
              <div
                class={ [
                  've-drag-resize__handle',
                  `ve-drag-resize__handle--${ name }`
                ] }
                onMousedown={ on.mousedown }
                onTouchstart={ on.touchstart }
              >
                {
                  props.point
                    ? (
                      <div class="ve-drag-resize__handle--point" />
                    )
                    : (
                      <div class="ve-drag-resize__handle--line" />
                    )
                }
              </div>
            )
          })
        }

        { slots.default?.() }
      </div>
    )
  }
})