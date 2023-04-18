// Styles
import './styles/progress.scss'

// Utils
import { computed, ref, toRef } from 'vue'
import { useRender } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeThemeProps, provideTheme } from '../../composables/theme'
import { makeSizeProps, useSize } from '../../composables/size'
import { useProxiedModel } from '../../composables/proxied-model'
import { useTextColor } from '../../composables/color'
import { useVariant } from '../../composables/variant'
import { useIntersectionObserver } from '../../composables/intersection-observer'

// Components
import { ProgressCircular, filterProgressCircularProps, makeProgressCircularProps } from './progress-circular'
import { ProgressLinear, filterProgressLinearProps, makeProgressLinearProps } from './progress-linear'

// Types
import type { PropType } from 'vue'

// Constants
export const progressVariants = [
  'linear', // 线性
  'circular', // 圆形
] as const

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

  emits: {
    'update:modelValue': (_modelValue: number) => true,
  },

  setup(props, { slots }) {
    const { themeClasses } = provideTheme(props)
    const { variantClasses } = useVariant(props as any)
    const { sizeClasses, sizeStyles } = useSize(props)
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, 'color'),
    )
    const { intersectionRef, isIntersecting } = useIntersectionObserver()
    const model = useProxiedModel(
      props, 'modelValue', props.modelValue,
      val => Math.max(0, Math.min(100, parseFloat(val ?? 0))),
    )
    const strokeWidth = computed(() => Number(props.strokeWidth))

    const size = computed(() => {
      return sizeStyles.value.width
        ? Number(props.size)
        : intersectionRef.value
          ? intersectionRef.value.getBoundingClientRect().width
          : Math.max(strokeWidth.value, 32)
    })

    const transitionDuration = ref()

    useRender(() => {
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
            {
              transitionDuration: transitionDuration.value,
            },
          ] }
        >
          { props.variant === 'circular' && (
            <ProgressCircular
              { ...filterProgressCircularProps(props)[0] }
              modelValue={ model.value }
              size={ size.value }
            />
          ) }

          { props.variant === 'linear' && (
            <ProgressLinear
              { ...filterProgressLinearProps(props)[0] }
              modelValue={ model.value }
            />
          ) }

          { slots.default && (
            <div class="ve-progress__wrapper">
              { slots.default({ value: model.value }) }
            </div>
          ) }
        </props.tag>
      )
    })

    let timer: any

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      start: () => {
        if (timer) clearTimeout(timer)

        transitionDuration.value = '0s'
        model.value = 0

        setTimeout(() => {
          transitionDuration.value = '4s'
          model.value = 80
        }, 0)

        timer = setTimeout(() => {
          if (transitionDuration.value === '4s') transitionDuration.value = undefined
          timer = undefined
        }, 4000)
      },
      finish: () => {
        return new Promise(resolve => {
          transitionDuration.value = '0.2s'
          model.value = 100

          setTimeout(() => {
            transitionDuration.value = undefined
            if (model.value >= 100) resolve(model.value)
          }, 200)
        })
      },
    }
  },
})

export type Progress = InstanceType<typeof Progress>
