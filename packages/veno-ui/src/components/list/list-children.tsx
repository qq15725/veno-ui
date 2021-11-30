// Components
import { ListGroup } from './list-group'
import { ListItem } from './list-item'

// Utilities
import { genericComponent } from '../../utils'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { ListGroupHeaderSlot } from './list-group'
import type { ListItemProp } from './list'

type VeListChildrenGenerator = new <T extends ListItemProp>() => {
  $props: {
    items?: T[]
  }
  $slots: MakeSlots<{
    header: [ListGroupHeaderSlot]
    item: [T]
  }>
}

export const ListChildren = genericComponent<VeListChildrenGenerator>()({
  name: 'ListChildren',

  props: {
    items: Array as Prop<ListItemProp[]>,
  },

  setup (props, { slots }) {
    return () => slots.default?.() ?? props.items?.map(({ children, ...item }) => {
      const { value, ...rest } = item
      return children
        ? (
          <ListGroup
            value={ value }
            items={ children }
            v-slots={ {
              ...slots,
              header: headerProps => slots.header
                ? slots.header({ ...rest, ...headerProps })
                : <ListItem { ...rest } { ...headerProps } />,
            } }
          />
        )
        : (
          slots.item
            ? slots.item(item)
            : <ListItem { ...item } v-slots={ slots } />
        )
    })
  },
})
