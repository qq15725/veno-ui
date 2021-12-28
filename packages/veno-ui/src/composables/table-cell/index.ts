// Utils
import { computed, unref } from 'vue'
import { propsFactory, getCurrentInstanceName } from '../../utils'

// Types
import type { MaybeRef } from '../../utils'

interface TableCellProps
{
  fixed: boolean | 'start' | 'center' | 'end'
}

export const makeTableCellProps = propsFactory({
  fixed: [Boolean, String],
}, 'table-cell')


export function useTableCell (
  props: MaybeRef<TableCellProps>,
  name = getCurrentInstanceName()
) {
  const tableCellClasses = computed(() => {
    const { fixed } = unref(props)

    return `${ name }-fixed-${ fixed }`
  })

  return {
    tableCellClasses
  }
}