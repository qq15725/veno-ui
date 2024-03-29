// Styles
import './styles/progress-circular.scss'

// Utils
import { computed } from 'vue'
import { convertToUnit, pick, propsFactory } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

import { makeProgressLinearProps } from './progress-linear'

// 以直径作为标准系数
const diameter = 24

export const makeProgressCircularProps = propsFactory({
  /**
   * @zh 进度条大小
   */
  size: {
    type: [String, Number],
    default: diameter,
  },

  /**
   * @zh 进度条初始化角度
   */
  rotate: {
    type: [Number, String],
    default: 0,
  },

  ...makeProgressLinearProps(),
}, 'progress-circular')

export const ProgressCircular = defineComponent({
  name: 'VeProgressCircular',

  props: makeProgressCircularProps(),

  setup(props) {
    const model = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))))
    const radius = computed(() => {
      const rate = Math.max(
        Number(props.strokeWidth) && Number(props.size)
          ? 1 - Number(props.strokeWidth) / Number(props.size)
          : 0.5,
        0.5,
      )
      return diameter * rate / 2
    })
    const strokeWidth = computed(() => diameter - radius.value * 2)
    const circumference = computed(() => 2 * Math.PI * radius.value)
    const offset = computed(() => convertToUnit(((100 - model.value) / 100) * circumference.value))

    return () => (
      <svg
        class={ [
          've-progress-circular',
          {
            've-progress-circular--active': props.active,
            've-progress-circular--indeterminate': props.indeterminate,
          },
        ] }
        style={ { transform: `rotate(calc(-90deg + ${ Number(props.rotate) }deg))` } }
        xmlns="http://www.w3.org/2000/svg"
        viewBox={ `0 0 ${ diameter } ${ diameter }` }
      >
        { props.underlay && (
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
        ) }

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
  },
})

export function filterProgressCircularProps(attrs: Record<string, any>) {
  return pick(attrs, Object.keys(ProgressCircular.props) as any)
}
