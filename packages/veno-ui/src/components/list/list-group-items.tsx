// Styles
import './styles/list-group-items.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { provideList } from './composables/list'

// Components
import { ExpandTransition } from '../transition'
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
        <ExpandTransition>
          <div
            class="ve-list-group-items"
            v-show={ props.open }
          >
            <ListChildren
              items={ props.items }
              v-slots={ slots }
            />
          </div>
        </ExpandTransition>
      )
    }
  }
})
