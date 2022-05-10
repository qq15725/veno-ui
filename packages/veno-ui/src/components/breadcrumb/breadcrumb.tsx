// Styles
import './styles/breadcrumb.scss'

// Utils
import { createSymbol, genericComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { useGroup } from '../../composables/group'

// Types
import type { MakeSlots } from '../../utils'

// Keys
export const BreadcrumbKey = createSymbol('breadcrumb')

export type Breadcrumb = InstanceType<typeof Breadcrumb>

export const Breadcrumb = genericComponent<new () => {
  $slots: MakeSlots<{
    default: []
    separator: []
  }>
}>()({
  name: 'VeBreadcrumb',

  props: {
    ...makeTagProps({
      tag: 'nav',
    }),
  },

  emits: {
    'update:modelValue': (_value: any) => true,
  },

  setup(props, { slots }) {
    useGroup(props, BreadcrumbKey)

    return () => {
      return (
        <props.tag
          aria-label="breadcrumb"
          class="ve-breadcrumb"
        >
          <ol>
            { slots.default?.() }
          </ol>
        </props.tag>
      )
    }
  },
})
