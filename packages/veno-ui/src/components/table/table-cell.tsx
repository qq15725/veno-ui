// Styles
import './styles/table-cell.scss'

// Utils
import { computed } from 'vue'
import { defineComponent, propsFactory, pick } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'

// Types
import type { PropType } from 'vue'

export function filterTableCellProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(TableCell.props))
}

export const makeTableCellProps = propsFactory({
  rowIndex: Number,
  colIndex: Number,
  cols: Number,
  fixed: [Boolean, String] as PropType<boolean | 'start' | 'end'>,
  align: {
    type: String as PropType<boolean | 'start' | 'center' | 'end'>,
    default: 'start'
  },
  ...makeTagProps({
    tag: 'td'
  }),
}, 'table-cell')

export const TableCell = defineComponent({
  name: 'VeTableCell',

  props: makeTableCellProps(),

  setup (props, { slots }) {
    const fixed = computed<false | 'start' | 'end'>(() => {
      return typeof props.fixed === 'string'
        ? props.fixed
        : props.fixed && props.colIndex !== undefined && props.cols !== undefined
          ? props.colIndex < (props.cols - 1) / 2 ? 'start' : 'end'
          : false
    })

    return () => {
      return (
        <props.tag
          class={ [
            've-table-cell',
            `text-${ props.align }`,
            {
              've-table-cell--fixed-start': fixed.value === 'start',
              've-table-cell--fixed-end': fixed.value === 'end',
            }
          ] }
        >
          <div class="ve-table-cell__overlay" />

          { slots.default?.() }
        </props.tag>
      )
    }
  }
})

export type TableCell = InstanceType<typeof TableCell>