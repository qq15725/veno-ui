// Styles
import './styles/spacer.scss'

// Utils
import { defineComponent, pick, flattenFragments } from '../../utils'

// Components
import { Row, Col } from '../grid'
import { makeRowProps } from '../grid/row'
import { makeColProps } from '../grid/col'

export type Spacer = InstanceType<typeof Spacer>

export const Spacer = defineComponent({
  name: 'VeSpacer',

  props: {
    ...makeRowProps(),
    ...makeColProps({
      cols: 'auto'
    }),
  },

  setup (props, { slots }) {
    return () => {
      if (!slots.default) return <div class="ve-spacer" />

      const [rowProps] = pick(props, Object.keys(Row.props) as any)
      const [colProps] = pick(props, Object.keys(Col.props) as any)

      return (
        <Row class="ve-spacer" { ...rowProps }>
          { flattenFragments(slots.default()).map((node: any) => (
            <Col { ...colProps }>{ node }</Col>
          )) }
        </Row>
      )
    }
  }
})