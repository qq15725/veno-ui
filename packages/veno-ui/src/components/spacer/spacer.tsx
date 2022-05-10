// Styles
import './styles/spacer.scss'

// Utils
import { defineComponent, flattenFragments, pick } from '../../utils'

// Components
import { Col, Row } from '../grid'
import { makeRowProps } from '../grid/row'
import { makeColProps } from '../grid/col'

export const Spacer = defineComponent({
  name: 'VeSpacer',

  props: {
    ...makeRowProps(),
    ...makeColProps({
      cols: 'auto',
    }),
  },

  setup(props, { slots }) {
    return () => {
      const children = flattenFragments(slots.default?.() ?? [])

      if (!children.length) {
        return <div className="ve-spacer" />
      }

      const [rowProps] = pick(props, Object.keys(Row.props) as any)
      const [colProps] = pick(props, Object.keys(Col.props) as any)

      return (
        <Row { ...rowProps } class="ve-spacer">
          { children.map((child, index) => (
            <Col { ...colProps } key={ index }>{ child }</Col>
          )) }
        </Row>
      )
    }
  },
})

export type Spacer = InstanceType<typeof Spacer>
