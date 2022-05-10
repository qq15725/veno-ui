// Styles
import './styles/app.scss'

// Utils
import { defineComponent, useRender } from '../../utils'

// Composables
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeLayoutProps, provideLayout } from '../../composables/layout'
import { useProviders } from '../../composables/providers'

export const App = defineComponent({
  name: 'VeApp',

  props: {
    ...makeThemeProps(),
    ...makeLayoutProps({
      fullHeight: true,
    }),
  },

  setup(props, { slots }) {
    const theme = provideTheme(props)
    const { getLayoutItem, items, layoutClasses } = provideLayout(props)
    const { createRootProvider } = useProviders()

    useRender(() => {
      const RootProvider: any = createRootProvider()

      return (
        <div
          class={ [
            've-app',
            theme.themeClasses.value,
            layoutClasses.value,
          ] }
          data-app="true"
        >
          <div class="ve-app__wrapper">
            <RootProvider>{ slots.default?.() }</RootProvider>
          </div>
        </div>
      )
    })

    return {
      theme,
      getLayoutItem,
      items,
    }
  },
})
