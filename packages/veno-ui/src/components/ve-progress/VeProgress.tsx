// Styles
import './styles/ve-progress.scss'

// Utils
import { defineComponent, toRef, computed } from 'vue'
import { convertToUnit } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeSizeProps, useSize } from '../../composables/size'
import { makeColorProps, useTextColor } from '../../composables/color'
import { useIntersectionObserver } from '../../composables/intersection-observer'

// Types
import type { PropType } from 'vue'

export default defineComponent({
  name: 'VeProgress',

  props: {
    bgColor: String,
    modelValue: {
      type: [Number, String],
      default: 0,
    },
    indeterminate: [Boolean, String] as PropType<boolean | 'disable-shrink'>,
    rotate: {
      type: [Number, String],
      default: 0,
    },
    width: {
      type: [Number, String],
      default: 4,
    },
    ...makeThemeProps(),
    ...makeColorProps(),
    ...makeSizeProps(),
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const MAGIC_RADIUS_CONSTANT = 20
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT

    const { themeClasses } = useTheme(props)
    const { sizeClasses, sizeStyles } = useSize(props, 've-progress')
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'color'))
    const { textColorClasses: underlayColorClasses, textColorStyles: underlayColorStyles } = useTextColor(
      toRef(props, 'bgColor')
    )
    const { intersectionRef, isIntersecting } = useIntersectionObserver()

    const normalizedValue = computed(() => {
      return Math.max(0, Math.min(100, parseFloat(String(props.modelValue))))
    })

    const width = computed(() => Number(props.width))
    const size = computed(() => {
      // Get size from element if size prop value is small, large etc
      return sizeStyles.value
        ? Number(props.size)
        : intersectionRef.value
          ? intersectionRef.value.getBoundingClientRect().width
          : Math.max(width.value, 32)
    })
    const diameter = computed(() => (MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value)) * 2)
    const strokeWidth = computed(() => width.value / size.value * diameter.value)
    const strokeDashOffset = computed(() => {
      return convertToUnit(((100 - normalizedValue.value) / 100) * CIRCUMFERENCE)
    })

    return () => (
      <props.tag
        ref={ intersectionRef }
        class={ [
          've-progress',
          {
            've-progress--indeterminate': !!props.indeterminate,
            've-progress--visible': isIntersecting.value,
            've-progress--disable-shrink': props.indeterminate === 'disable-shrink',
          },
          themeClasses.value,
          sizeClasses.value,
          textColorClasses.value,
        ] }
        style={ [
          sizeStyles.value,
          textColorStyles.value,
        ] }
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={ props.indeterminate ? undefined : normalizedValue.value }
      >
        <svg
          style={ {
            transform: `rotate(calc(-90deg + ${ Number(props.rotate) }deg))`,
          } }
          xmlns="http://www.w3.org/2000/svg"
          viewBox={ `0 0 ${ diameter.value } ${ diameter.value }` }
        >
          <circle
            class={ [
              've-progress__underlay',
              underlayColorClasses.value,
            ] }
            style={ underlayColorStyles.value }
            fill="transparent"
            cx="50%"
            cy="50%"
            r={ MAGIC_RADIUS_CONSTANT }
            stroke-width={ strokeWidth.value }
            stroke-dasharray={ CIRCUMFERENCE }
            stroke-dashoffset={ 0 }
          />

          <circle
            class="ve-progress__overlay"
            fill="transparent"
            cx="50%"
            cy="50%"
            r={ MAGIC_RADIUS_CONSTANT }
            stroke-width={ strokeWidth.value }
            stroke-dasharray={ CIRCUMFERENCE }
            stroke-dashoffset={ strokeDashOffset.value }
          />
        </svg>

        { slots.default && (
          <div class="ve-progress__wrap">
            { slots.default({ value: normalizedValue.value }) }
          </div>
        ) }
      </props.tag>
    )
  }
})