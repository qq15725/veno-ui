// Styles
import './styles/badge.scss'

// Utils
import { computed, toRef } from 'vue'
import { convertToUnit, pick } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Components
import { Icon } from '../icon'
import { FadeTransition } from '../transition'

// Composables
import { makeShapeProps, useShape } from '../../composables/shape'
import { makeTagProps } from '../../composables/tag'
import { MaybeTransition, makeTransitionProps } from '../../composables/transition'
import { useBackgroundColor, useTextColor } from '../../composables/color'

export type Badge = InstanceType<typeof Badge>

export const Badge = defineComponent({
  name: 'VeBadge',

  inheritAttrs: false,

  props: {
    /**
     * @zh 标记是否存在边框
     */
    bordered: {
      type: Boolean,
      default: true,
    },

    /**
     * @zh 标记的颜色
     */
    color: String,

    /**
     * @zh 标记的内容
     */
    content: [Number, String],

    /**
     * @zh 标记是否显示为点
     */
    dot: Boolean,

    /**
     * @zh 是否为浮动的标记
     */
    floating: Boolean,

    /**
     * @zh 标记的图标
     */
    icon: [String, Object],

    /**
     * @zh 是否为内联的标记
     */
    inline: Boolean,

    /**
     * @zh 标记的位置
     */
    location: {
      type: String,
      default: 'top-right',
      validator: (value: string) => {
        const [vertical, horizontal] = (value ?? '').split('-')

        return (
          ['top', 'bottom'].includes(vertical)
          && ['left', 'right'].includes(horizontal)
        )
      },
    },

    /**
     * @zh 标记的数量最大值
     */
    max: [Number, String],

    /**
     * @zh 标记的数量
     */
    modelValue: {
      type: Boolean,
      default: true,
    },

    /**
     * @zh 标记的 X 偏移值
     */
    offsetX: [Number, String],

    /**
     * @zh 标记的 Y 偏移值
     */
    offsetY: [Number, String],

    /**
     * @zh 标记的文本颜色
     */
    textColor: String,
    ...makeShapeProps(),
    ...makeTagProps(),
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    }),
  },

  setup(props, { slots, attrs }) {
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'color'))
    const { shapeClasses } = useShape(props)
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'textColor'))

    const position = computed(() => (
      props.floating
        ? (props.dot ? 2 : 4)
        : (props.dot ? 8 : 12)
    ))

    function calculatePosition(offset?: number | string) {
      return `calc(100% - ${ convertToUnit(position.value + Number(offset ?? 0)) })`
    }

    const locationStyles = computed(() => {
      const [vertical, horizontal] = (props.location ?? '').split('-')
      // TODO: RTL support
      const styles = {
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        top: 'auto',
      }
      if (!props.inline) {
        styles[horizontal === 'left' ? 'right' : 'left'] = calculatePosition(props.offsetX)
        styles[vertical === 'top' ? 'bottom' : 'top'] = calculatePosition(props.offsetY)
      }
      return styles
    })

    return () => {
      const value = Number(props.content)
      const content = (!props.max || isNaN(value))
        ? props.content
        : value <= props.max
          ? value
          : `${ props.max }+`

      const [badgeAttrs, restAttrs] = pick(attrs as Record<string, any>, [
        'aria-atomic',
        'aria-label',
        'aria-live',
        'role',
        'title',
      ])

      return (
        <props.tag
          class={ [
            've-badge',
            {
              've-badge--bordered': props.bordered,
              've-badge--dot': props.dot,
              've-badge--floating': props.floating,
              've-badge--inline': props.inline,
            },
          ] }
          { ...restAttrs }
        >
          { slots.default?.() }

          <MaybeTransition transition={ props.transition }>
              <span
                v-show={ props.modelValue }
                class={ [
                  've-badge__content',
                  backgroundColorClasses.value,
                  shapeClasses.value,
                  textColorClasses.value,
                ] }
                style={ [
                  backgroundColorStyles.value,
                  locationStyles.value,
                  textColorStyles.value,
                ] }
                aria-atomic="true"
                aria-label="locale string here" // TODO: locale string here
                aria-live="polite"
                role="status"
                { ...badgeAttrs }
              >
                {
                  !props.dot && (
                    slots.badge?.() ?? props.icon
                      ? <Icon icon={ props.icon } />
                      : content
                  )
                }
              </span>
          </MaybeTransition>
        </props.tag>
      )
    }
  },
})
