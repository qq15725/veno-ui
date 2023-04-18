// Styles
import './styles/progress-linear.scss'

// Utils
import { computed } from 'vue'
import { convertToUnit, pick, propsFactory } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

export const makeProgressLinearProps = propsFactory({
  /**
   * @zh 是否激活
   */
  active: {
    type: Boolean,
    default: true,
  },

  /**
   * @zh 当前进度比
   */
  modelValue: {
    type: [Number, String],
    default: 0,
  },

  /**
   * @zh 描线宽
   */
  strokeWidth: {
    type: [Number, String],
    default: 2,
  },

  /**
   * @zh 不确定的进度条
   */
  indeterminate: Boolean,

  /**
   * @zh 是否显示底部衬底
   */
  underlay: {
    type: Boolean,
    default: true,
  },
}, 'progress-linear')

export const ProgressLinear = defineComponent({
  name: 'VeProgressLinear',

  props: makeProgressLinearProps(),

  setup(props) {
    const model = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))))
    const height = computed(() => Number(props.strokeWidth))
    return () => (
      <div
        class={ [
          've-progress-linear',
          {
            've-progress-linear--active': props.active,
            've-progress-linear--indeterminate': props.indeterminate,
          },
        ] }
        style={ {
          height: props.active ? convertToUnit(height.value) : 0,
        } }
      >
        { props.underlay && (
          <div class="ve-progress-linear__underlay" />
        ) }

        <div
          class="ve-progress-linear__overlay"
          style={ { width: convertToUnit(model.value, '%') } }
        />
      </div>
    )
  },
})

export function filterProgressLinearProps(attrs: Record<string, any>) {
  return pick(attrs, Object.keys(ProgressLinear.props) as any)
}
