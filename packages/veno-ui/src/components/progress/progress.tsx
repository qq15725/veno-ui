// Styles
import './styles/progress.scss'

// Utils
import { toRef, computed } from 'vue'
import { defineComponent, convertToUnit } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeSizeProps, useSize } from '../../composables/size'
import { useTextColor } from '../../composables/color'
import { useVariant } from '../../composables/variant'
import { useIntersectionObserver } from '../../composables/intersection-observer'

// Constants
export const allowedVariants = [
  'circle', // 圆形
  'line', // 线性
] as const

// Types
import type { PropType } from 'vue'

export type Progress = InstanceType<typeof Progress>
export type ProgressVariant = typeof allowedVariants[number]

export const Progress = defineComponent({
  name: 'VeProgress',

  props: {
    variant: {
      type: String as PropType<ProgressVariant>,
      default: 'circle',
      validator: (v: any) => allowedVariants.includes(v),
    },
    percent: {
      type: [Number, String],
      default: 0,
    },
    indeterminate: [Boolean, String] as PropType<boolean | 'disable-shrink'>,
    rotate: {
      type: [Number, String],
      default: 0,
    },
    bgColor: String,
    color: {
      type: [String, Boolean] as PropType<string | false | null>,
      default: 'primary',
    },
    strokeWidth: {
      type: [Number, String],
      default: 3,
    },
    active: {
      type: Boolean,
      default: true,
    },
    ...makeThemeProps(),
    ...makeSizeProps(),
    ...makeTagProps(),
  },

  setup (props, { slots }) {
    const { themeClasses } = useTheme(props)
    const { variantClasses } = useVariant(props)
    const { sizeClasses, sizeStyles } = useSize(props)
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, 'color')
    )
    const { textColorClasses: underlayColorClasses, textColorStyles: underlayColorStyles } = useTextColor(
      toRef(props, 'bgColor')
    )
    const { intersectionRef, isIntersecting } = useIntersectionObserver()

    const normalizedValue = computed(() => {
      return Math.max(0, Math.min(100, parseFloat(String(props.percent))))
    })

    const strokeWidth = computed(() => Number(props.strokeWidth))

    const size = computed(() => {
      // Get size from element if size prop value is small, large etc
      return sizeStyles.value
        ? Number(props.size)
        : intersectionRef.value
          ? intersectionRef.value.getBoundingClientRect().width
          : Math.max(strokeWidth.value, 32)
    })
    const MAGIC_RADIUS_CONSTANT = 20
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT
    const diameter = computed(() => (MAGIC_RADIUS_CONSTANT / (1 - strokeWidth.value / size.value)) * 2)
    const svgStrokeWidth = computed(() => strokeWidth.value / size.value * diameter.value)
    const strokeDashOffset = computed(() => {
      return convertToUnit(((100 - normalizedValue.value) / 100) * CIRCUMFERENCE)
    })

    const styles = computed(() => {
      if (props.variant === 'circle') return {}

      return {
        height: props.active ? convertToUnit(strokeWidth.value) : 0,
      }
    })

    return () => (
      <props.tag
        role="progressbar"
        aria-valuenow={ props.indeterminate ? undefined : normalizedValue.value }
        aria-valuemin="0"
        aria-valuemax="100"
        ref={ intersectionRef }
        class={ [
          've-progress',
          {
            've-progress--indeterminate': !!props.indeterminate,
            've-progress--visible': isIntersecting.value,
            've-progress--disable-shrink': props.indeterminate === 'disable-shrink',
          },
          variantClasses.value,
          themeClasses.value,
          sizeClasses.value,
          textColorClasses.value,
        ] }
        style={ [
          sizeStyles.value,
          textColorStyles.value,
          styles.value,
        ] }
      >
        <div class="ve-progress__bar">
          { props.variant === 'circle'
            ? (
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
                  stroke-width={ svgStrokeWidth.value }
                  stroke-dasharray={ CIRCUMFERENCE }
                  stroke-dashoffset={ 0 }
                />

                <circle
                  class="ve-progress__overlay"
                  fill="transparent"
                  cx="50%"
                  cy="50%"
                  r={ MAGIC_RADIUS_CONSTANT }
                  stroke-width={ svgStrokeWidth.value }
                  stroke-dasharray={ CIRCUMFERENCE }
                  stroke-dashoffset={ strokeDashOffset.value }
                />
              </svg>
            )
            : (
              <>
                <div
                  class={ [
                    've-progress__underlay',
                  ] }
                  style={ [
                    { width: convertToUnit(normalizedValue.value, '%') },
                  ] }
                />

                <div
                  class={ [
                    've-progress__overlay',
                    underlayColorClasses.value,
                  ] }
                  style={ [
                    underlayColorStyles.value,
                  ] }
                />
              </>
            ) }
        </div>

        { slots.default && (
          <div class="ve-progress__wrap">
            { slots.default({ value: normalizedValue.value }) }
          </div>
        ) }
      </props.tag>
    )
  }
})