// Utils
import { defineComponent } from '../../utils'

// Components
import { List } from '../../components/list'

// Composables
import { makeNamedAnchor, useNamedAnchor } from '../../composables/named-anchor'

// Types

export const Anchor = defineComponent({
  name: 'VeAnchor',

  props: {
    ...makeNamedAnchor()
  },

  setup (props, { slots }) {
    useNamedAnchor(props)

    return () => (
      <List
        class={ [
          've-anchor',
        ] }
        v-slots={ slots }
      />
    )
  }
})