// Styles
import './styles/progress-circular.scss'

// Utils
import { computed } from 'vue'
import { defineComponent, propsFactory, pick, convertToUnit } from '../../utils'

import { makeProgressLinearProps } from './progress-linear'

export const makeProgressCircularProps = propsFactory({
  size: [String, Number],
  rotate: {
    type: [Number, String],
    default: 0,
  },
  ...makeProgressLinearProps(),
}, 'progress-circular')

export function filterProgressCircularProps (attrs: Record<string, any>) {
  return pick(attrs, Object.keys(ProgressCircular.props) as any)
}

export const ProgressCircular = defineComponent({
  name: 'VeProgressCircular',

  props: makeProgressCircularProps(),

  setup (props) {
    const value = computed(() => {
      return Math.max(0, Math.min(100, parseFloat(String(props.modelValue))))
    })
    const diameter = computed(() => {
      return 24
    })
    const radius = computed(() => {
      const rate = Math.max(
        Number(props.strokeWidth) && Number(props.size)
          ? 1 - Number(props.strokeWidth) / Number(props.size)
          : 0.5,
        0.5
      )
      return diameter.value * rate / 2
    })
    const strokeWidth = computed(() => {
      return diameter.value - radius.value * 2
    })
    const circumference = computed(() => {
      return 2 * Math.PI * radius.value
    })
    const offset = computed(() => {
      return convertToUnit(((100 - value.value) / 100) * circumference.value)
    })

    return () => (
      <svg
        class={ [
          've-progress-circular',
          {
            've-progress-circular--active': props.active,
            've-progress-circular--indeterminate': props.indeterminate,
          }
        ] }
        style={ {
          transform: `rotate(calc(-90deg + ${ Number(props.rotate) }deg))`,
        } }
        xmlns="http://www.w3.org/2000/svg"
        viewBox={ `0 0 ${ diameter.value } ${ diameter.value }` }
      >
        <circle
          class="ve-progress-circular__underlay"
          fill="transparent"
          cx="50%"
          cy="50%"
          r={ radius.value }
          stroke-width={ strokeWidth.value }
          stroke-dasharray={ circumference.value }
          stroke-dashoffset={ 0 }
        />

        <circle
          class="ve-progress-circular__overlay"
          fill="transparent"
          cx="50%"
          cy="50%"
          r={ radius.value }
          stroke-width={ strokeWidth.value }
          stroke-dasharray={ circumference.value }
          stroke-dashoffset={ offset.value }
        />
      </svg>
    )
  }
})