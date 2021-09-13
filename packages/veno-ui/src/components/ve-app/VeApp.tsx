// Styles
import './styles/ve-app.scss'

// Utilities
import { defineComponent } from 'vue'

import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeLayoutProps, createLayout } from '../../composables/layout'
import { createDragsortGroup } from '../../composables/dragsort'

export default defineComponent({
  name: 'VeApp',

  props: {
    ...makeThemeProps(),
    ...makeLayoutProps({ fullHeight: true }),
  },

  setup (props, { slots }) {
    const { themeClasses } = useTheme(props)
    const { layoutClasses } = createLayout(props)
    createDragsortGroup()

    return () => (
      <div
        class={ [
          've-app',
          themeClasses.value,
          layoutClasses.value,
        ] }
        data-app="true"
      >
        <div class="ve-app__wrapper">
          { slots.default?.() }
        </div>
      </div>
    )
  },
})
