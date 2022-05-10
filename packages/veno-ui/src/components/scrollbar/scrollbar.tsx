// Styles
import './styles/scrollbar.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeScrollbar, useScrollbar } from '../../composables/scrollbar'

export const Scrollbar = defineComponent({
  name: 'VeScrollbar',

  props: {
    ...makeTagProps(),
    ...makeScrollbar(),
  },

  setup(props, { slots }) {
    const { scrollbarClasses } = useScrollbar(props)

    return () => {
      return (
        <div
          class={ [
            've-scrollbar',
            scrollbarClasses.value,
          ] }
        >{ slots.default?.() }</div>
      )
    }
  },
})
