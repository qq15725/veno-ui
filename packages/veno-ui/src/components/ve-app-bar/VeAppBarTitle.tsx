// Styles
import './styles/ve-app-bar-title.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

export const VeAppBarTitle = defineComponent({
  name: 'VeAppBarTitle',

  props: {
    ...makeTagProps({ tag: 'header' }),
  },

  setup (props, { slots }) {
    return () => (
      <props.tag class="ve-app-bar-title">
        { slots.default && (
          <div class="ve-app-bar-title__wrap">
            { slots.default() }
          </div>
        ) }
      </props.tag>
    )
  },
})
