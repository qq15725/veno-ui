// Styles
import './styles/anchor.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makeNamedAnchor, useNamedAnchor } from '../../composables/named-anchor'

// Types
export type Anchor = InstanceType<typeof Anchor>

export const Anchor = defineComponent({
  name: 'VeAnchor',

  props: {
    ...makeNamedAnchor()
  },

  setup (props, { slots }) {
    useNamedAnchor(props)

    return () => (
      <ul
        class={ [
          've-anchor',
        ] }
      >
        { slots.default?.() }
      </ul>
    )
  }
})