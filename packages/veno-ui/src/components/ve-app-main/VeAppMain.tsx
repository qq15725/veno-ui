// Styles
import './styles/ve-app-main.scss'

// Utilities
import { computed, defineComponent, unref } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { useMain } from '../../composables/layout'
import { makeColorProps, useColor } from '../../composables/color'

export default defineComponent({
  name: 'VeAppMain',

  props: {
    ...makeTagProps({ tag: 'main' }),
    ...makeColorProps(),
  },

  setup (props, { slots }) {
    const { mainStyles } = useMain()
    const { colorClasses, colorStyles } = useColor(computed(() => {
      const { textColor, color } = unref(props)
      return {
        background: color,
        text: textColor,
      }
    }))

    return () => (
      <props.tag
        class={ [
          've-app-main',
          colorClasses.value,
        ] }
        style={ [
          mainStyles.value,
          colorStyles.value,
        ] }
      >
        <div class="ve-app-main__wrap">
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
