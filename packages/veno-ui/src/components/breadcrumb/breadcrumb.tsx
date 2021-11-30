// Styles
import './styles/breadcrumb.scss'

// Utils
import { genericComponent } from '../../utils'

// Composables
import { makeGroupProps, useGroup } from '../../composables/group'

// Symbols
export const BreadcrumbSymbol = Symbol.for('veno-ui:breadcrumb')

// Types
import type { MakeSlots } from '../../utils'
export type Breadcrumb = InstanceType<typeof
  Breadcrumb>

export const Breadcrumb = genericComponent<new <T>() => {
  $slots: MakeSlots<{
    default: [],
    separator: [],
  }>
}>()({
  name: 'Breadcrumb',

  props: {
    ...makeGroupProps(),
  },

  setup (props, { slots }) {
    useGroup(props, BreadcrumbSymbol)

    return () => {
      return (
        <div
          class={ [
            've-breadcrumb',
          ] }
        >
          { slots.default?.() }
        </div>
      )
    }
  }
})