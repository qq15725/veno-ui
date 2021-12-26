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

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props)

    return () => {
      const hasThead = !props.hideHeaders && props.headers.length > 0
      const hasTbody = props.items.length > 0

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
            { hasThead && (
              <thead>
                <tr>
                  { props.headers.map(header => {
                    return (
                      <th>{ header.label }</th>
                    )
                  }) }
                </tr>
              </thead>
            ) }

            { hasTbody && (
              <tbody>
              { props.items.map(item => (
                <tr>
                  { props.headers.map(header => (
                    <td>{ item[header.name] }</td>
                  )) }
                </tr>
              )) }
              </tbody>
            ) }

            { slots.default?.() }
          </table>
        </props.tag>
      )
    }
  }
})