// Styles
import './styles/table-th.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { TableCell } from './table-cell'

export const TableTh = defineComponent({
  name: 'VeTableTh',

  inheritAttrs: false,

  setup (props, { attrs, slots }) {
    return () => {
      return (
        <TableCell
          { ...attrs }
          tag="th"
          class="ve-table-th"
        >
          { slots.default?.() }
        </TableCell>
      )
    }
  }
})