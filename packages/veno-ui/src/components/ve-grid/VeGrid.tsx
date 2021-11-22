// Utils
import { genericComponent, flattenFragments } from '../../utils'

// Components
import { VeContainer } from './VeContainer'
import { VeRow } from './VeRow'
import { VeCol } from './VeCol'

export const VeGrid = genericComponent()({
  name: 'VeGrid',

  props: {
    container: Boolean,
    colProps: {
      type: Object,
      default: () => ({
        cols: 'auto',
      })
    },
  },

  setup (props, { slots, attrs }) {
    return () => {
      let nodes = slots.default?.()

      if (nodes) {
        nodes = flattenFragments(nodes)
      }

      const row = (
        <VeRow { ...attrs }>
          { nodes?.map((node: any) => (
            <VeCol { ...props.colProps }>{ node }</VeCol>
          )) }
        </VeRow>
      )

      if (props.container) {
        return (
          <VeContainer>
            { row }
          </VeContainer>
        )
      }

      return row
    }
  }
})

export type VeGrid = InstanceType<typeof VeGrid>