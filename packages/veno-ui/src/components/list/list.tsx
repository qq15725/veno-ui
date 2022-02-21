// Styles
import './styles/list.scss'

// Utils
import { computed, toRef } from 'vue'
import { genericComponent, useRender } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeNestedProps, useNested } from '../../composables/nested'
import { provideList } from './composables/list'
import { provideDefaults } from '../../composables/defaults'

// Components
import { ListChildren } from './list-children'

// Types
import type { Prop } from 'vue'
import type { MakeSlots } from '../../utils'
import type { ListChildrenSlots } from './list-children'

export type ListItemProps = {
  [key: string]: any
  $type?: 'item' | 'subheader' | 'divider'
  $children?: (string | ListItemProps)[]
}

export type InternalListItemProps = {
  type?: 'item' | 'subheader' | 'divider'
  props?: Record<string, any>
  children?: InternalListItemProps[]
}

function parseItems (items?: (string | ListItemProps)[]): InternalListItemProps[] | undefined {
  if (!items) return undefined

  return items.map(item => {
    if (typeof item === 'string') return { type: 'item', props: { value: item, title: item } }

    const { $type, $children, ...props } = item

    if ($type === 'subheader') return { type: 'subheader', props }
    if ($type === 'divider') return { type: 'divider', props }

    return { type: 'item', props, children: parseItems($children) }
  })
}

export type ListSlots<T> = ListChildrenSlots<T> & MakeSlots<{
  prepend: [],
  append: [],
}>

export const List = genericComponent<new <T>() => {
  $props: {
    items?: T[]
  }
  $slots: ListSlots<T>
}>()({
  name: 'VeList',

  props: {
    nav: Boolean,
    items: Array as Prop<ListItemProps[]>,
    ...makeNestedProps({
      selectStrategy: 'leaf',
      openStrategy: 'multiple',
      activeStrategy: 'single',
    } as const),
    ...makePaperProps({
      size: undefined,
    } as const),
    ...makeDisabledProps(),
  },

  emits: {
    'update:selected': (val: string[]) => true,
    'update:opened': (val: string[]) => true,
    'update:active': (val: string[]) => true,
  },

  setup (props, { slots }) {
    const items = computed(() => parseItems(props.items))
    const { paperClasses, paperStyles } = usePaper(props)
    const { disabledClasses } = useDisabled(props)
    const { open, select, activate } = useNested(props)

    provideList()

    provideDefaults({
      VeListItem: {
        density: toRef(props, 'density'),
      },
    })

    useRender(() => {
      return (
        <props.tag
          class={ [
            've-list',
            {
              've-list--nav': props.nav,
            },
            paperClasses.value,
            disabledClasses.value,
          ] }
          style={ paperStyles.value }
        >
          { slots.prepend?.() }

          <ListChildren items={ items.value }>{ slots }</ListChildren>

          { slots.append?.() }
        </props.tag>
      )
    })

    return {
      open,
      select,
      activate
    }
  },
})

export type List = InstanceType<typeof List>