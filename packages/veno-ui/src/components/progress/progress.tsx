// Styles
import './styles/progress.scss'

// Utils
import { toRef, computed } from 'vue'
import { defineComponent } from '../../utils'

// Components
import { ProgressLinear } from './progress-linear'
import { ProgressCircular } from './progress-circular'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeSizeProps, useSize } from '../../composables/size'
import { useTextColor } from '../../composables/color'
import { useVariant } from '../../composables/variant'
import { useIntersectionObserver } from '../../composables/intersection-observer'
import { makeProgressLinearProps, filterProgressLinearProps } from './progress-linear'
import { makeProgressCircularProps, filterProgressCircularProps } from './progress-circular'

// Constants
export const progressVariants = [
  'linear', // 线性
  'circular', // 圆形
] as const

// Types
import type { PropType } from 'vue'

export type ProgressVariant = typeof progressVariants[number]

export const Progress = defineComponent({
  name: 'VeProgress',

  props: {
    /**
     * @zh 进度条颜色
     */
    color: {
      type: [String, Boolean] as PropType<string | false | null>,
      default: 'primary',
    },

    /**
     * @zh 是否在左侧
     */
    start: Boolean,

    /**
     * @zh 是否在右侧
     */
    end: Boolean,

    ...makeProgressCircularProps(),
    ...makeProgressLinearProps(),
    ...makeThemeProps(),
    ...makeSizeProps(),
    ...makeTagProps(),
    variant: {
      type: String as PropType<ProgressVariant>,
      default: 'linear',
      validator: (v: any) => progressVariants.includes(v),
    },
  },

  setup (props, { slots }) {
    const { themeClasses } = provideTheme(props)
    const { variantClasses } = useVariant(props as any)
    const { sizeClasses, sizeStyles } = useSize(props)
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, 'color')
    )
    const { intersectionRef, isIntersecting } = useIntersectionObserver()
    const model = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))))
    const strokeWidth = computed(() => Number(props.strokeWidth))

    const size = computed(() => {
      return sizeStyles.value.width
        ? Number(props.size)
        : intersectionRef.value
          ? intersectionRef.value.getBoundingClientRect().width
          : Math.max(strokeWidth.value, 32)
    })

    return () => {
      return (
        <props.tag
          role="progressbar"
          aria-valuenow={ props.indeterminate ? undefined : model.value }
          aria-valuemin="0"
          aria-valuemax="100"
          ref={ intersectionRef }
          class={ [
            've-progress',
            variantClasses.value,
            themeClasses.value,
            sizeClasses.value,
            textColorClasses.value,
            {
              've-progress--indeterminate': !!props.indeterminate,
              've-progress--visible': isIntersecting.value,
              've-progress--start': props.start,
              've-progress--end': props.end,
            },
          ] }
          style={ [
            sizeStyles.value,
            textColorStyles.value,
          ] }
        >
          { props.variant === 'circular' && (
            <ProgressCircular
              { ...filterProgressCircularProps(props)[0] }
              size={ size.value }
            />
          ) }

          { props.variant === 'linear' && (
            <ProgressLinear
              { ...filterProgressLinearProps(props)[0] }
            />
          ) }

          { slots.default && (
            <div class="ve-progress__wrapper">
              { slots.default({ value: model.value }) }
            </div>
          ) }
        </props.tag>
      )
    }
  }
})

export type Progress = InstanceType<typeof Progress>