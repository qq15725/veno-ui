// Styles
import './styles/theme-provider.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, provideTheme } from '../../composables/theme'

export const ThemeProvider = defineComponent({
  name: 'VeThemeProvider',

  props: {
    ...makeTagProps(),
    ...makeThemeProps(),
  },

  setup(props, { slots }) {
    const { themeClasses } = provideTheme(props)

    return () => {
      return (
        <props.tag
          class={ [
            've-theme-provider',
            themeClasses.value,
          ] }
        >
          { slots.default?.() }
        </props.tag>
      )
    }
  },
})
