// Styles
import './styles/progress.scss'

// Utils
import { toRef, computed } from 'vue'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, useTheme } from '../../composables/theme'
import { makeSizeProps, useSize } from '../../composables/size'
import { useTextColor } from '../../composables/color'
import { useVariant } from '../../composables/variant'
import { useIntersectionObserver } from '../../composables/intersection-observer'
import {
  ProgressCircular,
  makeProgressCircularProps,
  filterProgressCircularProps
} from './progress-circular'
import {
  ProgressLinear,
  makeProgressLinearProps,
  filterProgressLinearProps
} from './progress-linear'

// Constants
export const allowedVariants = [
  'linear', // 线性
  'circular', // 圆形
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
      default: 'linear',
      validator: (v: any) => allowedVariants.includes(v),
    },
    color: {
      type: [String, Boolean] as PropType<string | false | null>,
      default: 'primary',
    },
    ...makeProgressCircularProps(),
    ...makeProgressLinearProps(),
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
    const { intersectionRef, isIntersecting } = useIntersectionObserver()
    const normalizedValue = computed(() => {
      return Math.max(0, Math.min(100, parseFloat(String(props.modelValue))))
    })
    const strokeWidth = computed(() => Number(props.strokeWidth))

    const size = computed(() => {
      return sizeStyles.value
        ? Number(props.size)
        : intersectionRef.value
          ? intersectionRef.value.getBoundingClientRect().width
          : Math.max(strokeWidth.value, 32)
    })

    return () => {
      const [progressCircularProps] = filterProgressCircularProps(props)
      const [progressLinearProps] = filterProgressLinearProps(props)

      return (
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
            },
            variantClasses.value,
            themeClasses.value,
            sizeClasses.value,
            textColorClasses.value,
          ] }
          style={ [
            sizeStyles.value,
            textColorStyles.value,
          ] }
        >
          { props.variant === 'circular' && (
            <ProgressCircular
              { ...progressCircularProps }
              size={ size.value }
            />
          ) }

          { props.variant === 'linear' && (
            <ProgressLinear
              { ...progressLinearProps }
            />
          ) }

          { slots.default && (
            <div class="ve-progress__wrap">
              { slots.default({ value: normalizedValue.value }) }
            </div>
          ) }
        </props.tag>
      )
    }
  }
})