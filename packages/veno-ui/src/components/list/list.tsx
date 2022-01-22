// Styles
import './styles/list.scss'

// Utils
import { genericComponent, useRender } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeNestedProps, useNested } from '../../composables/nested'
import { provideList } from './composables/list'

// Components
import { ListSubheader } from './list-subheader'
import { ListChildren } from './list-children'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { ListGroupHeaderSlot } from './list-group'

export type List = InstanceType<typeof List>

export type ListItemProp = {
  children?: ListItemProp[]
  value?: string
}

export const List = genericComponent<new <T>() => {
  $props: {
    items?: T[]
  }
  $slots: MakeSlots<{
    subheader: []
    header: [ListGroupHeaderSlot]
    item: [T]
  }>
}>()({
  name: 'VeList',

  props: {
    nav: Boolean,
    subheader: {
      type: [Boolean, String],
      default: false,
    },
    items: Array as Prop<ListItemProp[]>,
    ...makePaperProps({
      size: undefined,
    } as const),
    ...makeDisabledProps(),
    ...makeNestedProps({
      selectStrategy: 'leaf' as const,
      openStrategy: 'multiple' as const,
      activeStrategy: 'single' as const,
    }),
  },

  emits: {
    'update:selected': (val: string[]) => true,
    'update:opened': (val: string[]) => true,
    'update:active': (val: string[]) => true,
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)
    const { disabledClasses } = useDisabled(props)
    const { open, select, activate } = useNested(props)
    provideList()

    useRender(() => {
      const hasHeader = typeof props.subheader === 'string' || slots.subheader

      return (
        <props.tag
          class={ [
            've-list',
            {
              've-list--nav': props.nav,
              've-list--subheader': props.subheader,
            },
            paperClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            paperStyles.value,
          ] }
        >
          { hasHeader && (
            slots.subheader?.()
            ?? <ListSubheader>{ props.subheader }</ListSubheader>
          ) }

          <ListChildren items={ props.items }>
            { {
              default: slots.default,
              item: slots.item,
              externalHeader: slots.header,
            } }
          </ListChildren>
        </props.tag>
      )
    })

    return {
      open,
      select,
      activate
    }
  }
})