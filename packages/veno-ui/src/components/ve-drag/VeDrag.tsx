// Utils
import { defineComponent } from 'vue'
import { makeDragProps, useDrag } from '../../composables/drag'

export default defineComponent({
  name: 'VeDrag',

  props: {
    ...makeDragProps(),
  },

  emits: {
    'update:top': (value: boolean) => true,
    'update:left': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const { dragStyles, on } = useDrag(props)

    return () => {
      return slots.default?.({ on, style: dragStyles.value })
    }
  }
})