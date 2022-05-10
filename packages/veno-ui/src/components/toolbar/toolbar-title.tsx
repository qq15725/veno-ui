// Styles
import './styles/toolbar-title.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Types
export type ToolbarTitle = InstanceType<typeof ToolbarTitle>

export const ToolbarTitle = defineComponent({
  name: 'VeToolbarTitle',

  props: {
    text: String,
    ...makeTagProps(),
  },

  setup(props, { slots }) {
    return () => {
      const hasText = !!(slots.text || props.text)

      return (
        <props.tag class="ve-toolbar-title">
          { hasText && (
            <div className="ve-toolbar-title__wrapper">
              { slots.text?.() ?? props.text }
            </div>
          ) }

          { slots.default?.() }
        </props.tag>
      )
    }
  },
})
