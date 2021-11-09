// Styles
import './styles/ve-list.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeNestedProps, useNested } from '../../composables/nested'
import { useDepth } from './composables/depth'
import { createList } from './composables/list'

// Components
import { VeListSubheader } from './VeListSubheader'
import { VeListChildren } from './VeListChildren'

// Types
import type { Prop } from 'vue'

export type VeList = InstanceType<typeof VeList>
export type ListItem = {
  children?: ListItem[]
  value?: string
}

export const VeList = genericComponent()({
  name: 'VeList',

  props: {
    nav: Boolean,
    subheader: {
      type: [Boolean, String],
      default: false,
    },
    items: Array as Prop<ListItem[]>,
    ...makeMaterialProps({
      size: null,
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
    const { materialClasses, materialStyles } = useMaterial(props, 've-list')
    const { disabledClasses } = useDisabled(props, 've-list')
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
            materialClasses.value,
            disabledClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
        >
          { hasHeader && (
            slots.subheader
              ? slots.subheader()
              : <VeListSubheader>{ props.subheader }</VeListSubheader>
          ) }

          <VeListChildren items={ props.items } v-slots={ slots } />
        </props.tag>
      )
    }
  },
})