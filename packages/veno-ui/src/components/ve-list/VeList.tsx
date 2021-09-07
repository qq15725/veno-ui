import './styles/ve-list.scss'

import { defineComponent } from 'vue'

import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeVariantProps, useVariant } from '../../composables/variant'

export default defineComponent({
  name: 'VeList',

  props: {
    ...makeThemeProps(),
    ...makeVariantProps(),
  },

  setup (props, { slots }) {
    const { themeClasses } = useTheme(props)
    const { colorClasses, colorStyles, variantClasses } = useVariant(props, 've-list')

    return () => {
      return (
        <div
          class={ [
            've-list',
            themeClasses.value,
            colorClasses.value,
            variantClasses.value,
          ] }
          style={ [
            colorStyles.value,
          ] }
        >
          { slots.default?.() }
        </div>
      )
    }
  },
})