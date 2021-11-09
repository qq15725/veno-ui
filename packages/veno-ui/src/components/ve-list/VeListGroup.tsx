// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { useList } from './composables/list'
import { useNestedGroup } from '../../composables/nested'
import { makeTagProps } from '../../composables/tag'

// Components
import { VeListGroupItems } from './VeListGroupItems'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { ListItem } from './VeList'
export type ListGroupHeaderSlot = {
  onClick: (e: Event) => void
  appendIcon: string
  class: string
}
type VeListGroupGenerator = new <T extends ListItem>() => {
  $props: {
    items?: T[]
  }
  $slots: MakeSlots<{
    header: [ListGroupHeaderSlot]
    item: [T]
    default: []
  }>
}

export const VeListGroup = genericComponent<VeListGroupGenerator>()({
  name: 'VeListGroup',

  props: {
    value: null,
    collapseIcon: {
      type: String,
      default: 'veno-ui:$dropdown',
    },
    expandIcon: {
      type: String,
      default: 'veno-ui:$dropdown',
    },
    items: Array as Prop<ListItem[]>,

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
          class={[
            've-list-group',
            {
              've-list-group--prepend': list?.hasPrepend.value,
            },
          ]}
        >
          { slots.header?.(headerProps.value) }

          <VeListGroupItems
            items={props.items}
            open={isOpen.value}
            v-slots={slots}
          />
        </props.tag>
      )
    }
  },
})
