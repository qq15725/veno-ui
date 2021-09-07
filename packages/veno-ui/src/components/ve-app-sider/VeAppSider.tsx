// Styles
import './styles/ve-app-sider.scss'

// Utilities
import { defineComponent, toRef } from 'vue'

import { makeTagProps } from '../../composables/tag'
import { makeBorderProps, useBorder } from '../../composables/border'
import { makeLayoutItemProps, useLayoutItem } from '../../composables/layout'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'VeAppSider',

  props: {
    width: {
      type: [Number, String],
      default: 256,
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
      validator: (value: any) => ['left', 'right'].includes(value),
    },
    ...makeTagProps({ tag: 'nav' }),
    ...makeBorderProps(),
    ...makeLayoutItemProps(),
  },

  setup (props, { slots }) {
    const { borderClasses } = useBorder(props, 've-app-sider')
    const layoutStyles = useLayoutItem(
      props.name,
      toRef(props, 'priority'),
      toRef(props, 'position'),
      toRef(props, 'width'),
      toRef(props, 'width'),
      toRef(props, 'modelValue'),
    )

    return () => (
      <props.tag
        class={ [
          've-app-sider',
          {
            've-app-sider--start': props.position === 'left',
            've-app-sider--end': props.position === 'right',
          },
          borderClasses.value,
        ] }
        style={ [
          layoutStyles.value,
        ] }
      >
        <div
          class="ve-app-sider__content"
        >
          { slots.default?.() }
        </div>
      </props.tag>
    )
  },
})
