// Utils
import { defineComponent } from '../../utils'

// Composables
import { createList } from './composables/list'
import { useDepth } from './composables/depth'

// Components
import { ExpandTransition } from '../transition'
import { ListChildren } from './list-children'

// Types
import type { Prop } from 'vue'
import type { ListItemProp } from './list'

export const ListGroupItems = defineComponent({
  name: 'ListGroupItems',

  props: {
    open: Boolean,
    items: Array as Prop<ListItemProp[]>,
  },

  setup (props, { slots }) {
    const parent = createList()
    const depth = useDepth(parent.hasPrepend)

    return () => {
      return (
        <ExpandTransition>
          <div
            class="ve-list-group__items"
            style={ { '--ve-list-depth': depth.value } as any }
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
  },
})
