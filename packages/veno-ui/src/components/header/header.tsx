// Utils
import { computed } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'
import { makeToolbarProps, filterToolbarProps } from '../toolbar/toolbar'

// Components
import { Toolbar } from '../toolbar'

// Types
export type Header = InstanceType<typeof Header>

export const Header = defineComponent({
  name: 'VeHeader',

  props: {
    ...makeToolbarProps(),
    ...makeLayoutItemProps({
      position: 'fixed',
      anchor: 'top',
    } as const),
  },

  setup (props, { slots }) {
    const { layoutItemStyles } = useLayoutItem(computed(() => ({
      position: props.position,
      anchor: props.anchor,
      size: props.height,
      active: props.modelValue,
      priority: props.priority,
    })))

    return () => {
      const [toolbarProps] = filterToolbarProps(props)

      return (
        <Toolbar
          { ...toolbarProps }
          class={ [
            've-header',
          ] }
          style={ layoutItemStyles.value }
        >
          { slots }
        </Toolbar>
      )
    }
  },
})
