// Styles
import './styles/anchor.scss'

// Utils
import { toRef } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { provideDefaults } from '../../composables/defaults'
import { makeNamedAnchor, useNamedAnchor } from '../../composables/named-anchor'

// Components
import { AnchorItem } from './anchor-item'

// Types
import type { PropType } from 'vue'

type AnchorItemProps = {
  [key: string]: any
  text: string
  value: string
}

export const Anchor = defineComponent({
  name: 'VeAnchor',

  props: {
    /**
     * @zh 激活时的颜色
     */
    activeColor: {
      type: String,
      default: 'primary',
    },

    /**
     * @zh 锚点项
     */
    items: Array as PropType<AnchorItemProps[]>,

    ...makeNamedAnchor(),
  },

  setup(props, { slots }) {
    useNamedAnchor(props)

    provideDefaults({
      VeAnchorItem: {
        activeColor: toRef(props, 'activeColor'),
      },
    })

    return () => (
      <ul class="ve-anchor">
        { slots.default?.() }

        { props.items?.map(item => (
          <AnchorItem
            key={ item.value }
            { ...item }
          />
        )) }
      </ul>
    )
  },
})

export type Anchor = InstanceType<typeof Anchor>
