// Styles
import './styles/app.scss'

// Utils
import { defineComponent } from 'vue'

// Composables
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeLayoutProps, createLayout } from '../../composables/layout'
import { createDragSortProvider } from '../../composables/drag-sort'

export const App = defineComponent({
  name: 'VeApp',

  props: {
    ...makeThemeProps(),
    ...makeLayoutProps({ fullHeight: true }),
  },

  setup (props, { slots }) {
    const { themeClasses } = provideTheme(props)
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
