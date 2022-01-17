// Styles
import './styles/main.scss'

// Utils
import { computed, unref } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { useLayoutMain } from '../../composables/layout'
import { makeColorProps, useColor } from '../../composables/color'

// Types
export type Main = InstanceType<typeof Main>

export const Main = defineComponent({
  name: 'VeMain',

  props: {
    ...makeTagProps({ tag: 'main' }),
    ...makeColorProps(),
  },

  setup (props, { slots }) {
    const { mainStyles } = useLayoutMain()
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
          've-main',
          colorClasses.value,
        ] }
        style={ [
          mainStyles.value,
          colorStyles.value,
        ] }
      >
        <div class="ve-main__wrap">
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
