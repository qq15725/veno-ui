// Utils
import { defineComponent, watch, computed } from 'vue'
import { makeDragProps, useDrag } from '../../composables/drag'

// Components
import VeDragResize from './VeDragResize'

export default defineComponent({
  name: 'VeDrag',

  props: {
    resize: Boolean,
    ...makeDragProps(),
    ...VeDragResize.props,
  },

  emits: {
    'update:top': (value: number) => true,
    'update:left': (value: number) => true,
    'update:width': (value: number) => true,
    'update:height': (value: number) => true,
  },

  setup (props, { emit, slots }) {
    const { dragStyles, on, state } = useDrag(props)

    watch(() => state.value.type, type => {
      if (type === 'end') {
        emit('update:top', state.value.y)
        emit('update:left', state.value.x)
      }
    })

    const resizeProps = computed(() => {
      const filterProps: Record<string, any> = {}
      for (let key in props) {
        if (['top', 'left', 'resize', 'draggable'].indexOf(key) > -1) {
          continue
        }
        filterProps[key] = props[key]
      }
      return filterProps
    })

    return () => {
      return (
        <>
          {
            props.resize
              ? (
                <VeDragResize
                  { ...resizeProps.value }
                  onMousedown={ on.mousedown }
                  onTouchstart={ on.touchstart }
                  onUpdate:width={ (val: number) => {
                    emit('update:width', val)
                  } }
                  onUpdate:height={ (val: number) => {
                    emit('update:height', val)
                  } }
                  style={ [
                    dragStyles.value
                  ] }
                >
                  { slots.default?.() }
                </VeDragResize>
              )
              : slots.default?.({ on, style: dragStyles.value })
          }
        </>
      )
    }
  }
})