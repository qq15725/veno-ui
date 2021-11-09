// Utils
import { defineComponent, genericComponent } from '../../utils'

// Composables
import { createList } from './composables/list'
import { useDepth } from './composables/depth'

// Components
import { VeExpandTransition } from '../ve-transition'
import { VeListChildren } from './VeListChildren'

// Types
import type { Prop } from 'vue'
import type { ListItem } from './VeList'

export const VeListGroupItems = defineComponent({
  name: 'VeListGroupItems',

  props: {
    open: Boolean,
    items: Array as Prop<ListItem[]>,
  },

  setup (props, { slots }) {
    const parent = createList()
    const depth = useDepth(parent.hasPrepend)

    return () => {
      return (
        <VeExpandTransition>
          <div
            class="ve-list-group__items"
            style={ { '--ve-list-depth': depth.value } as any }
            v-show={ props.open }
          >
            <VeListChildren
              items={ props.items }
              v-slots={ slots }
            />
          </div>
        </VeExpandTransition>
      )
    }
  },
})
