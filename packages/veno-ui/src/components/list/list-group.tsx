// Styles
import './styles/list-group.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { useList } from './composables/list'
import { useNestedGroup } from '../../composables/nested'
import { makeTagProps } from '../../composables/tag'

// Components
import { ListGroupItems } from './list-group-items'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { ListItemProp } from './list'

export type ListGroupHeaderSlot = {
  onClick: (e: Event) => void
  appendIcon: string
  class: string
}

export type ListGroup = InstanceType<typeof ListGroup>

export const ListGroup = genericComponent<new <T extends ListItemProp>() => {
  $props: {
    items?: T[]
  }
  $slots: MakeSlots<{
    header: [ListGroupHeaderSlot]
    item: [T]
    default: []
  }>
}>()({
  name: 'VeListGroup',

  props: {
    value: null,
    collapseIcon: {
      type: String,
      default: '$collapse',
    },
    expandIcon: {
      type: String,
      default: '$expand',
    },
    items: Array as Prop<ListItemProp[]>,

    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { isOpen, open } = useNestedGroup(props)
    const list = useList()

    const onClick = (e: Event) => {
      open(!isOpen.value, e)
    }

    const headerProps = computed(() => ({
      onClick,
      appendIcon: isOpen.value ? props.collapseIcon : props.expandIcon,
      class: 've-list-group__header',
    }))

    return () => {
      return (
        <props.tag
          class={ [
            've-list-group',
            {
              've-list-group--prepend': list?.hasPrepend.value,
            },
          ] }
        >
          { slots.header?.(headerProps.value) }

          <ListGroupItems
            items={ props.items }
            open={ isOpen.value }
            v-slots={ slots }
          />
        </props.tag>
      )
    }
  },
})
