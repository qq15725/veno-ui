// Styles
import './styles/list.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeNestedProps, useNested } from '../../composables/nested'
import { useDepth } from './composables/depth'
import { createList } from './composables/list'

// Components
import { ListSubheader } from './list-subheader'
import { ListChildren } from './list-children'

// Types
import type { Prop } from 'vue'

export type List = InstanceType<typeof List>
export type ListItemProp = {
  children?: ListItemProp[]
  value?: string
}

export const List = defineComponent({
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
    useNested(props)
    useDepth()
    createList()

    return () => {
      const hasHeader = typeof props.subheader === 'string' || slots.subheader

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
          style={ [
            paperStyles.value,
          ] }
        >
          { hasHeader && (
            slots.subheader
              ? slots.subheader()
              : <ListSubheader>{ props.subheader }</ListSubheader>
          ) }

          <ListChildren items={ props.items } v-slots={ slots } />
        </props.tag>
      )
    }
  },
})