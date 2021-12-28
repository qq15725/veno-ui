// Styles
import './styles/table-td.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { TableCell } from './table-cell'

export const TableTd = defineComponent({
  name: 'VeTableTd',

  inheritAttrs: false,

  setup (props, { attrs, slots }) {
    return () => {
      return (
        <TableCell
          { ...attrs }
          tag="td"
          class="ve-table-td"
        >
          { slots.default?.() }
        </TableCell>
      )
    }
  }
})