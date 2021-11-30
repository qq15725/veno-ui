// Styles
import './styles/breadcrumb.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeGroupProps, useGroup } from '../../composables/group'

// Symbols
export const BreadcrumbSymbol = Symbol.for('veno-ui:breadcrumb')

// Types
import type { MakeSlots } from '../../utils'

export type Breadcrumb = InstanceType<typeof Breadcrumb>

export const Breadcrumb = genericComponent<new <T>() => {
  $slots: MakeSlots<{
    default: [],
    separator: [],
  }>
}>()({
  name: 'Breadcrumb',

  props: {
    ...makeTagProps({
      tag: 'nav',
    }),
    ...makeGroupProps(),
  },

  setup (props, { slots }) {
    useGroup(props, BreadcrumbSymbol)

    return () => {
      return (
        <props.tag
          aria-label="breadcrumb"
          class={ [
            've-breadcrumb',
          ] }
        >
          <ol>{ slots.default?.() }</ol>
        </props.tag>
      )
    }
  }
})