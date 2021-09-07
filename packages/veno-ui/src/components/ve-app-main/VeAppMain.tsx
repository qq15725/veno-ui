// Styles
import './styles/ve-app-main.scss'

// Utilities
import { defineComponent } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { useMain } from '../../composables/layout'

export default defineComponent({
  name: 'VeAppMain',

  props: makeTagProps({ tag: 'main' }),

  setup (props, { slots }) {
    const { mainStyles } = useMain()

    return () => (
      <props.tag
        class={ [
          've-app-main',
        ] }
        style={ [
          mainStyles.value,
        ] }
      >
        <div class="ve-app-main__wrap">
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
