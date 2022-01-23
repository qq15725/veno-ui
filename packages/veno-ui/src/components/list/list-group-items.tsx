// Styles
import './styles/list-group-items.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { provideList } from './composables/list'

// Components
import { FadeExpandTransition } from '../transition'
import { ListChildren } from './list-children'

// Types
import type { Prop } from 'vue'
import type { ListItemProp } from './list'

export const ListGroupItems = defineComponent({
  name: 'VeListGroupItems',

  props: {
    open: Boolean,
    items: Array as Prop<ListItemProp[]>,
  },

  setup (props, { slots }) {
    provideList()

    return () => {
      return (
        <FadeExpandTransition>
          <div
            class="ve-list-group-items"
            v-show={ props.open }
          >
            <ListChildren
              items={ props.items }
              v-slots={ slots }
            />
          </div>
        </FadeExpandTransition>
      )
    }
  }
})
