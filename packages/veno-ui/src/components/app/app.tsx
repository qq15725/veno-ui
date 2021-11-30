// Styles
import './styles/app.scss'

// Utilities
import { defineComponent } from 'vue'

import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeLayoutProps, createLayout } from '../../composables/layout'
import { createDragSortProvider } from '../../composables/drag-sort'

export const App = defineComponent({
  name: 'App',

  props: {
    ...makeThemeProps(),
    ...makeLayoutProps({ fullHeight: true }),
  },

  setup (props, { slots }) {
    const { themeClasses } = useTheme(props)
    const { layoutClasses } = createLayout(props)
    createDragSortProvider()

    return () => (
      <div
        class={ [
          've-app',
          themeClasses.value,
          layoutClasses.value,
        ] }
        data-app="true"
      >
        <div class="ve-app__wrap">
          { slots.default?.() }
        </div>
      </div>
    )
  },
})
