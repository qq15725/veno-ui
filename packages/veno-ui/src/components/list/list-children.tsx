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

export const ListChildren = genericComponent<new <T extends ListItemProp>() => {
  $props: {
    items?: T[]
  }
  $slots: MakeSlots<{
    default: []
    externalHeader: [ListGroupHeaderSlot]
    item: [T]
  }>
}>()({
  name: 'VeListChildren',

  props: {
    items: Array as Prop<ListItemProp[]>,
  },

  setup (props, { slots }) {
    return () => slots.default?.() ?? props.items?.map(({ children, ...item }) => {
      const { value, ...rest } = item
      return children ? (
        <ListGroup
          value={ value }
          items={ children }
        >
          { {
            ...slots,
            header: headerProps => (
              slots.externalHeader?.({ ...rest, ...headerProps })
              ?? <ListItem { ...rest } { ...headerProps } />
            )
          } }
        </ListGroup>
      ) : (
        slots.item?.(item)
        ?? <ListItem { ...item } v-slots={ slots } />
      )
    })
  },
})
