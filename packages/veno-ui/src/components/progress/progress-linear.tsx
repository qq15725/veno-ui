// Styles
import './styles/progress-linear.scss'

// Utils
import { computed } from 'vue'
import { defineComponent, propsFactory, pick, convertToUnit } from '../../utils'

export const makeProgressLinearProps = propsFactory({
  active: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  strokeWidth: {
    type: [Number, String],
    default: 2,
  },
  indeterminate: Boolean,
}, 'progress-linear')

export function filterProgressLinearProps (attrs: Record<string, any>) {
  return pick(attrs, Object.keys(ProgressLinear.props) as any)
}

export const ProgressLinear = defineComponent({
  name: 'VeProgressLinear',

  props: makeProgressLinearProps(),

  setup (props) {
    const normalizedValue = computed(() => {
      return Math.max(0, Math.min(100, parseFloat(String(props.modelValue))))
    })
    const height = computed(() => Number(props.strokeWidth))
    return () => (
      <div
        class={ [
          've-progress-linear',
          {
            've-progress-linear--active': props.active,
            've-progress-linear--indeterminate': props.indeterminate,
          }
        ] }
        style={ {
          height: props.active ? convertToUnit(height.value) : 0,
        } }
      >
        <div class="ve-progress-linear__underlay" />

        <div
          class="ve-progress-linear__overlay"
          style={ [
            { width: convertToUnit(normalizedValue.value, '%') },
          ] }
        />
      </div>
    )
  }
})