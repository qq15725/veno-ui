// Utils
import { genericComponent } from '../../utils'

// Components
import { Divider } from '../divider'
import { ListGroup } from './list-group'
import { ListItem } from './list-item'
import { ListSubheader } from './list-subheader'

// Composables
import { provideList } from './composables/list'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { InternalListItemProps } from './list'
import type { ListGroupActivatorSlot } from './list-group'
import type { ListItemSubtitleSlot, ListItemTitleSlot } from './list-item'

export type ListChildrenSlots<T> = MakeSlots<{
  default: []
  header: [{ item: T; index: number } & ListGroupActivatorSlot]
  item: [{ item: T; index: number }]
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

  setup(props, { slots }) {
    provideList()

    return () => slots.default?.() ?? props.items?.map(({ children, props: itemProps, type }, index) => {
      switch (type) {
        case 'divider':
          return <Divider { ...itemProps } />
        case 'subheader':
          return <ListSubheader { ...itemProps } v-slots={ slots } />
        default:
          return children
            ? (
              <ListGroup
                value={ itemProps?.value }
                v-slots={ {
                  default: () => (
                    <ListChildren items={ children } v-slots={ slots } />
                  ),
                  activator: ({ props: activatorProps }) => (
                    slots.header?.({ item: itemProps, index, props: activatorProps })
                    ?? <ListItem { ...itemProps } { ...activatorProps } />
                  ),
                } }
              />
              )
            : (
                slots.item?.({ item: itemProps, index })
            ?? <ListItem { ...itemProps } v-slots={ slots } />
              )
      }
    })
  },
})
