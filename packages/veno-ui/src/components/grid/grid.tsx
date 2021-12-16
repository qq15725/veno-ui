// Utils
import { genericComponent, flattenFragments } from '../../utils'

// Components
import { Container } from './container'
import { Row } from './row'
import { Col } from './col'

export type Grid = InstanceType<typeof Grid>

export const Grid = genericComponent()({
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
        <Row { ...attrs }>
          { nodes?.map((node: any) => (
            <Col { ...props.colProps }>{ node }</Col>
          )) }
        </Row>
      )

      if (props.container) {
        return (
          <Container>
            { row }
          </Container>
        )
      }

      return row
    }
  }
})