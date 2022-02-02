// Styles
import './styles/app.scss'

// Utils
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeLayoutProps, provideLayout } from '../../composables/layout'

export const App = defineComponent({
  name: 'VeApp',

  props: {
    ...makeThemeProps(),
    ...makeLayoutProps({
      fullHeight: true,
      layerZIndex: 700,
    }),
  },

  setup (props, { slots }) {
    const theme = provideTheme(props)
    const { getLayoutItem, items, layoutClasses } = provideLayout(props)

    useRender(() => (
      <div
        class={ [
          've-app',
          theme.themeClasses.value,
          layoutClasses.value,
        ] }
        data-app="true"
      >
        <div class="ve-app__wrapper">
          { slots.default?.() }
        </div>
      </div>
    ))

    return {
      theme,
      getLayoutItem,
      items
    }
  }
})
