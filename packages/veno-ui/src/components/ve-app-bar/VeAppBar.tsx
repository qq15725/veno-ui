// Styles
import './styles/ve-app-bar.scss'

// Utilities
import { defineComponent, toRef } from 'vue'

import { convertToUnit } from '../../utils'
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'VeAppBar',

  props: {
    height: {
      type: [Number, String],
      default: 64,
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String as PropType<'top' | 'bottom'>,
      default: 'top',
      validator: (value: any) => ['top', 'bottom'].includes(value),
    },
    ...makeTagProps({ tag: 'header' }),
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeLayoutItemProps({ name: 'app-bar' }),
  },

  setup (props, { slots }) {
    const { borderClasses } = useBorder(props, 've-app-bar')
    const { themeClasses } = useTheme(props)

    const layoutStyles = useLayoutItem(
      props.name,
      toRef(props, 'priority'),
      toRef(props, 'position'),
      toRef(props, 'height'),
      toRef(props, 'height'),
      toRef(props, 'modelValue'),
    )

    return () => (
      <props.tag
        class={ [
          've-app-bar',
          themeClasses.value,
          borderClasses.value,
        ] }
        style={ [
          layoutStyles.value,
        ] }
      >
        <div
          class="ve-app-bar__wrap"
          style={ { height: convertToUnit(props.height) } }
        >
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
