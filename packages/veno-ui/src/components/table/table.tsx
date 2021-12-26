// Styles
import './styles/table.scss'

// Utils
import { defineComponent } from '../../utils'

import { makeMaterialProps, useMaterial } from '../../composables/material'

// Types
import type { PropType } from 'vue'

interface TableHeaderProp
{
  label: string
  name: string
}

export const Table = defineComponent({
  name: 'VeTable',

  props: {
    hideBorder: Boolean,
    hideHeaders: Boolean,
    headers: {
      type: Array as PropType<TableHeaderProp[]>,
      default: () => []
    },
    items: {
      type: Array as PropType<Record<string, any>[]>,
      default: () => [],
    },
    ...makeMaterialProps({
      border: true,
    }),
  },

  setup (props) {
    const { materialClasses, materialStyles } = useMaterial(props)

    return () => {
      return (
        <props.tag
          class={ [
            've-table',
            materialClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
        >
          <table>
            { !props.hideHeaders && (
              <thead>
              <tr class="ve-table__tr">
                { props.headers.map(header => {
                  return (
                    <th class="ve-table__th">{ header.label }</th>
                  )
                }) }
              </tr>
              </thead>
            ) }
            <tbody>
            { props.items.map(item => (
              <tr class="ve-table__tr">
                { props.headers.map(header => (
                  <td class="ve-table__td">{ item[header.name] }</td>
                )) }
              </tr>
            )) }
            </tbody>
          </table>
        </props.tag>
      )
    }
  }
})