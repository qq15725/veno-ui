// Styles
import './styles/layout-item.scss'

// Utils
import { computed } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'
import { makeTagProps } from '../../composables/tag'

export type LayoutItem = InstanceType<typeof LayoutItem>

export const LayoutItem = defineComponent({
  name: 'VeLayoutItem',

  props: {
    size: {
      type: [String, Number],
      default: 64,
    },
    ...makeTagProps(),
    ...makeLayoutItemProps()
  },

  setup (props, { slots }) {
    const { layoutItemStyles } = useLayoutItem(computed(() => ({
      priority: props.priority,
      position: props.position,
      anchor: props.anchor,
      size: props.size,
      active: props.modelValue,
    })))

    return () => (
      <props.tag
        class={ [
          've-layout-item',
        ] }
        style={ layoutItemStyles.value }
      >
        { slots }
      </props.tag>
    )
  },
})
