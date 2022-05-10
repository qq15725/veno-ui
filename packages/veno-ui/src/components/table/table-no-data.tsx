// Styles
import './styles/table-no-data.scss'

// Utils
import { defineComponent } from '../../utils'

// Components
import { Icon } from '../icon'

export const TableNoData = defineComponent({
  name: 'VeTableNoData',

  props: {
    icon: {
      type: String,
      default: '$nodata',
    },
    text: {
      type: String,
      default: '暂无数据',
    },
  },

  setup(props, { slots }) {
    return () => {
      return (
        <div class="ve-table-no-data">
          <Icon icon={ props.icon } size={ 48 } class="mb-3" />

          <div>{ slots.default?.() ?? props.text }</div>
        </div>
      )
    }
  },
})
