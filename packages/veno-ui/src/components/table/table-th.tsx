// Styles
import './styles/table-th.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { TableCell } from './table-cell'
import { Icon } from '../icon'

import type { PropType } from 'vue'

export const TableTh = defineComponent({
  name: 'VeTableTh',

  inheritAttrs: false,

  props: {
    sortable: Boolean,
    sortDesc: Boolean as PropType<boolean | undefined>,
    sortIcon: {
      type: String,
      default: 'veno-ui:$sort',
    },
  },

  setup (props, { slots, attrs }) {
    return () => {
      return (
        <TableCell
          { ...attrs }
          tag="th"
          class={ [
            've-table-th',
            {
              've-table-th--sortable': props.sortable,
              've-table-th--sort-asc': props.sortDesc === false,
              've-table-th--sort-desc': props.sortDesc === true,
            }
          ] }
        >
          <div class="ve-table-th__wrap">
            { slots.default?.() }

            { props.sortable && (
              <div class="ve-table-th__sortable">
                <Icon icon={ props.sortIcon } />
                <Icon style="transform: rotate(180deg);" icon={ props.sortIcon } />
              </div>
            ) }
          </div>
        </TableCell>
      )
    }
  }
})