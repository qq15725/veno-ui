// Components
import { VeListGroup } from './VeListGroup'
import { VeListItem } from './VeListItem'

// Utilities
import { genericComponent } from '../../utils'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { ListGroupHeaderSlot } from './VeListGroup'
import type { ListItem } from './VeList'
type VeListChildrenGenerator = new <T extends ListItem>() => {
  $props: {
    items?: T[]
  }
  $slots: MakeSlots<{
    header: [ListGroupHeaderSlot]
    item: [T]
  }>
}

export const VeListChildren = genericComponent<VeListChildrenGenerator>()({
  name: 'VeListChildren',

  props: {
    items: Array as Prop<ListItem[]>,
  },

  setup (props, { slots }) {
    return () => slots.default?.() ?? props.items?.map(({ children, ...item }) => {
      const { value, ...rest } = item
      return children
        ? (
          <VeListGroup
            value={ value }
            items={ children }
            v-slots={ {
              ...slots,
              header: headerProps => slots.header
                ? slots.header({ ...rest, ...headerProps })
                : <VeListItem { ...rest } { ...headerProps } />,
            } }
          />
        )
        : (
          slots.item
            ? slots.item(item)
            : <VeListItem { ...item } v-slots={ slots } />
        )
    })
  },
})
