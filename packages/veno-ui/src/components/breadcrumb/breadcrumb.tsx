// Styles
import './styles/breadcrumb.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { useGroup } from '../../composables/group'

// Symbols
export const BreadcrumbSymbol = Symbol.for('veno-ui:breadcrumb')

// Types
import type { MakeSlots } from '../../utils'

export type Breadcrumb = InstanceType<typeof Breadcrumb>

export const Breadcrumb = genericComponent<new () => {
  $slots: MakeSlots<{
    default: [],
    separator: [],
  }>
}>()({
  name: 'VeBreadcrumb',

  props: {
    ...makeTagProps({
      tag: 'nav',
    }),
  },

  setup (props, { slots }) {
    useGroup({}, BreadcrumbSymbol)

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