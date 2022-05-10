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
import { ExpandTransition } from '../transition'

// Types
import type { MakeSlots } from '../../utils'

export type ListGroupActivatorSlot = {
  props: {
    onClick: (e: Event) => void
    appendIcon: string
    class: string
    value?: string
  }
}

export const ListGroup = genericComponent<new () => {
  $slots: MakeSlots<{
    activator: [ListGroupActivatorSlot]
    default: []
  }>
}>()({
  name: 'VeListGroup',

  props: {
    /**
     * @zh 列表组收起时的图标
     */
    collapseIcon: {
      type: [String, Object],
      default: '$collapse',
    },

    /**
     * @zh 列表组展开时的图标
     */
    expandIcon: {
      type: [String, Object],
      default: '$expand',
    },

    /**
     * @zh 列表组的值
     */
    value: null,

    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { isOpen, open } = useNestedGroup(props)
    const list = useList()

    const onClick = (e: Event) => {
      open(!isOpen.value, e)
    }

    const activatorProps = computed(() => ({
      onClick,
      appendIcon: isOpen.value ? props.collapseIcon : props.expandIcon,
      class: 've-list-group__header',
      value: props.value ? `${ props.value }_header` : undefined,
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
          { slots.activator?.({ props: activatorProps.value }) }

          <ExpandTransition>
            <div class="ve-list-group__items" v-show={ isOpen.value }>
              { slots.default?.() }
            </div>
          </ExpandTransition>
        </props.tag>
      )
    }
  },
})

export type ListGroup = InstanceType<typeof ListGroup>