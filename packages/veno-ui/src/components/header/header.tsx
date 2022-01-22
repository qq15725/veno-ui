// Styles
import './styles/header.scss'

// Utils
import { computed } from 'vue'
import { defineComponent, convertToUnit } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'

// Types
export type Header = InstanceType<typeof Header>

export const Header = defineComponent({
  name: 'VeHeader',

  props: {
    height: {
      type: [Number, String],
      default: 64,
    },
    ...makeTagProps({ tag: 'header' }),
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeLayoutItemProps({
      position: 'fixed',
      anchor: 'top',
    } as const),
  },

  setup (props, { slots }) {
    const { borderClasses } = useBorder(props)
    const { themeClasses } = provideTheme(props)
    const { layoutItemStyles } = useLayoutItem(computed(() => ({
      position: props.position,
      anchor: props.anchor,
      size: props.height,
      active: props.modelValue,
      priority: props.priority,
    })))

    return () => (
      <props.tag
        class={ [
          've-header',
          themeClasses.value,
          borderClasses.value,
        ] }
        style={ layoutItemStyles.value }
      >
        <div
          class="ve-header__wrapper"
          style={ { height: convertToUnit(props.height) } }
        >
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
