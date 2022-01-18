// Styles
import './styles/badge.scss'

// Utils
import { computed, toRef } from 'vue'
import { convertToUnit, defineComponent, pick } from '../../utils'

// Components
import { Icon } from '../../components/icon'

// Composables
import { makeShapeProps, useShape } from '../../composables/shape'
import { makeTagProps } from '../../composables/tag'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useBackgroundColor, useTextColor } from '../../composables/color'

export type Badge = InstanceType<typeof Badge>

export const Badge = defineComponent({
  name: 'VeBadge',

  inheritAttrs: false,

  props: {
    bordered: Boolean,
    color: {
      type: String,
      default: 'primary',
    },
    content: String,
    dot: Boolean,
    floating: Boolean,
    icon: String,
    inline: Boolean,
    location: {
      type: String,
      default: 'top-right',
      validator: (value: string) => {
        const [vertical, horizontal] = (value ?? '').split('-')

        return (
          ['top', 'bottom'].includes(vertical) &&
          ['left', 'right'].includes(horizontal)
        )
      },
    },
    max: [Number, String],
    modelValue: {
      type: Boolean,
      default: true,
    },
    offsetX: [Number, String],
    offsetY: [Number, String],
    textColor: String,
    ...makeShapeProps(),
    ...makeTagProps(),
    ...makeTransitionProps({ transition: 'scale-rotate-transition' }),
  },

  setup (props, ctx) {
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'color'))
    const { shapeClasses } = useShape(props)
    const { textColorClasses, textColorStyles } = useTextColor(toRef(props, 'textColor'))

    const position = computed(() => {
      return props.floating
        ? (props.dot ? 2 : 4)
        : (props.dot ? 8 : 12)
    })

    function calculatePosition (offset?: number | string) {
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
      const content = (!props.max || isNaN(value)) ? props.content
        : value <= props.max ? value
          : `${ props.max }+`

      const [badgeAttrs, attrs] = pick(ctx.attrs as Record<string, any>, [
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
          { ...attrs }
        >
          <div class="ve-badge__wrapper">
            { ctx.slots.default?.() }

            <MaybeTransition transition={ props.transition }>
              <span
                v-show={ props.modelValue }
                class={ [
                  've-badge__badge',
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
                  props.dot ? undefined
                    : ctx.slots.badge ? ctx.slots.badge?.()
                    : props.icon ? <Icon icon={ props.icon } />
                      : <span class="ve-badge__content">{ content }</span>
                }
              </span>
            </MaybeTransition>
          </div>
        </props.tag>
      )
    }
  }
})