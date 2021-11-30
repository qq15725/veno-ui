// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeGroupItemProps, useGroupItem } from '../../composables/group'

// Components
import { Button } from '../../components/button'
import { Icon } from '../../components/icon'

// Symbols
import { BreadcrumbSymbol } from './breadcrumb'

// Types
import type { MakeSlots } from '../../utils'

export type BreadcrumbItem = InstanceType<typeof BreadcrumbItem>

export const BreadcrumbItem = genericComponent<new <T>() => {
  $slots: MakeSlots<{
    default: [],
    separator: [],
  }>
}>()({
  name: 'BreadcrumbItem',

  props: {
    ...makeGroupItemProps(),
  },

  setup (props, { slots }) {
    const { id, group } = useGroupItem(props, BreadcrumbSymbol)

    const isLastOne = computed(() => {
      return group.items.value[group.items.value.length - 1] === id
    })

    return () => {
      return (
        <>
          <Button
            class={ [
              've-breadcrumb-item',
              {
                've-breadcrumb-item--active': isLastOne.value,
              }
            ] }
            variant="text"
          >
            { slots.default?.() }
          </Button>

          <div class="ve-breadcrumb-item__separator">
            { !isLastOne.value && (
              slots.separator?.()
              ?? group.vm?.slots.separator?.()
              ?? <Icon icon="veno-ui:$separator" />
            ) }
          </div>
        </>
      )
    }
  }
})