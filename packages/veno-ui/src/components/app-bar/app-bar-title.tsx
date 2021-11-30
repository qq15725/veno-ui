// Styles
import './styles/app-bar-title.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

export const AppBarTitle = defineComponent({
  name: 'AppBarTitle',

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
