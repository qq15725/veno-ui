// Styles
import './styles/header-title.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

export const HeaderTitle = defineComponent({
  name: 'VeHeaderTitle',

  props: {
    text: String,
    ...makeTagProps({ tag: 'header' }),
  },

  setup (props, { slots }) {
    return () => {
      const hasDefault = slots.default || props.text

      return (
        <props.tag class="ve-header-title">
          { hasDefault && (
            <div class="ve-header-title__wrapper">
              { slots.default?.() ?? props.text }
            </div>
          ) }
        </props.tag>
      )
    }
  },
})
