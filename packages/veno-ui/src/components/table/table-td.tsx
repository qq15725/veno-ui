// Styles
import './styles/table-td.scss'

// Utils
import { defineComponent, pick } from '../../utils'

// Components
import { TableCell, makeTableCellProps, filterTableCellProps } from './table-cell'

export function filterTableTdProps (attrs: Record<string, unknown>) {
  return pick(attrs, Object.keys(TableTd.props))
}

export const TableTd = defineComponent({
  name: 'VeTableTd',

  props: {
    sorted: Boolean,
    ...makeTableCellProps(),
  },

  setup (props, { slots }) {
    const [tableCellProps] = filterTableCellProps(props)

    return () => {
      return (
        <TableCell
          { ...tableCellProps }
          class={ [
            've-table-td',
            {
              've-table-td--sorted': props.sorted
            }
          ] }
          tag="td"
        >
          { slots }
        </TableCell>
      )
    }
  }
})

export type TableTd = InstanceType<typeof TableTd>