// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Components
import { Button } from '../../components/button'
import { Icon } from '../../components/icon'

// Composables
import { makeButtonProps } from '../../components/button/button'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'

// Symbols
import { BreadcrumbKey } from './breadcrumb'

// Types
import type { MakeSlots } from '../../utils'

export type BreadcrumbItem = InstanceType<typeof BreadcrumbItem>

export const BreadcrumbItem = genericComponent<new () => {
  $slots: MakeSlots<{
    default: []
    separator: []
  }>
}>()({
  name: 'VeBreadcrumbItem',

  props: {
    ...makeButtonProps({
      variant: 'text',
    } as const),
    ...makeGroupItemProps(),
  },

  setup(props, { slots }) {
    const { id, group } = useGroupItem(props, BreadcrumbKey)

    const hasNext = computed(() => {
      if (!group.items.value.length) return false
      return group.items.value[group.items.value.length - 1].id !== id
    })

    // TODO 如果是导航按钮，当前页设置 aria-current="page"

    return () => {
      return (
        <>
          <li
            class={ [
              've-breadcrumb-item',
              {
                've-breadcrumb-item--has-next': hasNext.value,
              },
            ] }
          >
            <Button
              { ...props }
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
                ?? <Icon icon="$separator" />
              }
            </li>
          ) }
        </>
      )
    }
  },
})
