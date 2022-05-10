// Styles
import './styles/breadcrumb.scss'

// Utils
import { genericComponent, createSymbol } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { useGroup } from '../../composables/group'

// Keys
export const BreadcrumbKey = createSymbol('breadcrumb')

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

  emits: {
    'update:modelValue': (value: any) => true,
  },

  setup (props, { slots }) {
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
  }
})