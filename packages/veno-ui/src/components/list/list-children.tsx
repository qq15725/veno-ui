// Utils
import { genericComponent } from '../../utils'

// Components
import { ListGroup } from './list-group'
import { ListItem } from './list-item'
import { Divider } from '../divider'
import { ListSubheader } from './list-subheader'

// Composables
import { provideList } from './composables/list'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { InternalListItemProps } from './list'
import type { ListGroupActivatorSlot } from './list-group'
import type { ListItemTitleSlot, ListItemSubtitleSlot } from './list-item'

export type ListChildrenSlots<T> = MakeSlots<{
  default: []
  header: [{ item: T, index: number } & ListGroupActivatorSlot]
  item: [{ item: T, index: number }]
  title: [ListItemTitleSlot]
  subtitle: [ListItemSubtitleSlot]
}>

export const ListChildren = genericComponent<new <T extends InternalListItemProps>() => {
  $props: {
    items?: T[]
  }
  $slots: ListChildrenSlots<T>
}>()({
  name: 'VeListChildren',

  props: {
    items: Array as Prop<InternalListItemProps[]>,
  },

  setup (props, { slots }) {
    provideList()

    return () => slots.default?.() ?? props.items?.map(({ children, props: itemProps, type }, index) => {

      if (type === 'divider') return <Divider { ...itemProps } />

      if (type === 'subheader') return <ListSubheader { ...itemProps } v-slots={ slots } />

      return children ? (
        <ListGroup value={ itemProps?.value }>
          { {
            default: () => (
              <ListChildren items={ children } v-slots={ slots } />
            ),
            activator: ({ props: activatorProps }) => (
              slots.header?.({ item: itemProps, index, props: activatorProps })
              ?? <ListItem { ...itemProps } { ...activatorProps } />
            ),
          } }
        </ListGroup>
      ) : (
        slots.item?.({ item: itemProps, index })
        ?? <ListItem { ...itemProps } v-slots={ slots } />
      )
    })
  },
})
