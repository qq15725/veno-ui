// Styles
import './styles/anchor.scss'

// Utils
import { toRef } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { provideDefaults } from '../../composables/defaults'
import { makeNamedAnchor, useNamedAnchor } from '../../composables/named-anchor'

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

    ...makeNamedAnchor()
  },

  setup (props, { slots }) {
    useNamedAnchor(props)

    provideDefaults({
      VeAnchorItem: {
        activeColor: toRef(props, 'activeColor'),
      },
    })

    return () => (
      <ul class="ve-anchor">{ slots.default?.() }</ul>
    )
  }
})

export type Anchor = InstanceType<typeof Anchor>