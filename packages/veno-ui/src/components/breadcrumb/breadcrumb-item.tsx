// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { useGroupItem } from '../../composables/group'

// Components
import { Button } from '../../components/button'
import { Icon } from '../../components/icon'

// Symbols
import { BreadcrumbSymbol } from './breadcrumb'

// Types
import type { MakeSlots } from '../../utils'

export type BreadcrumbItem = InstanceType<typeof BreadcrumbItem>

export const BreadcrumbItem = genericComponent<new () => {
  $slots: MakeSlots<{
    default: [],
    separator: [],
  }>
}>()({
  name: 'BreadcrumbItem',

  props: {
    //
  },

  setup (props, { slots, attrs }) {
    const { id, group } = useGroupItem({}, BreadcrumbSymbol)

    const hasNext = computed(() => {
      if (!group.items.value.length) return false
      return group.items.value[group.items.value.length - 1] !== id
    })

    // TODO 如果是导航按钮，当前页设置 aria-current="page"

    return () => {
      return (
        <>
          <li
            class={ [
              've-breadcrumb-item',
              {
                've-breadcrumb-item--has-next': hasNext.value
              }
            ] }
          >
            <Button
              variant="text"
              { ...attrs }
              v-slots={ slots }
            />
          </li>

          { hasNext.value && (
            <li
              class="ve-breadcrumb-separator"
              aria-hidden="true"
            >
              {
                slots.separator?.()
                ?? group.vm?.slots.separator?.()
                ?? <Icon icon="veno-ui:$separator" />
              }
            </li>
          ) }
        </>
      )
    }
  }
})