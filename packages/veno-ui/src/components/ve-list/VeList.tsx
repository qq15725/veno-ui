import './styles/ve-list.scss'

import { defineComponent, toRef } from 'vue'

// Composables
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeDimensionProps, useDimension } from '../../composables/dimensions'
import { makeRoundedProps, useRounded } from '../../composables/rounded'
import { useBackgroundColor } from '../../composables/color'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme'

export default defineComponent({
  name: 'VeList',

  props: {
    color: String,
    ...makeBorderProps(),
    ...makeDimensionProps(),
    ...makeRoundedProps(),
    ...makeDisabledProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
  },

  setup (props, { slots }) {
    const { themeClasses } = useTheme(props)
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'color'))
    const { borderClasses } = useBorder(props, 've-list')
    const { dimensionStyles } = useDimension(props)
    const { roundedClasses } = useRounded(props, 've-list')
    const { disabledClasses } = useDisabled(props, 've-list')

    return () => {
      return (
        <props.tag
          class={ [
            've-list',
            themeClasses.value,
            backgroundColorClasses.value,
            borderClasses.value,
            roundedClasses.value,
            disabledClasses.value,
          ] }
          style={[
            backgroundColorStyles.value,
            dimensionStyles.value,
          ]}
        >
          { slots.default?.() }
        </props.tag>
      )
    }
  },
})