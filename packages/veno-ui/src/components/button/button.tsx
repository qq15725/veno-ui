// Styles
import './styles/button.scss'

// Utils
import { computed } from 'vue'
import { propsFactory } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Composables
import { genOverlays, makePaperProps, usePaper } from '../../composables/paper'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { makeGroupItemProps, useGroupItem } from '../../composables/group'

// Components
import { ProgressCircular } from '../progress/progress-circular'
import { Icon } from '../icon'
import { ExpandXTransition } from '../transition'

// Directives
import { Ripple } from '../../directives/ripple'

// Symbols
import { ButtonToggleKey } from '../button-toggle/button-toggle'

export const makeButtonProps = propsFactory({
  /**
   * @zh 按钮的类型
   */
  type: {
    type: String,
    default: 'button',
  },

  /**
   * @zh 图标按钮
   */
  icon: [Boolean, String, Object],

  /**
   * @zh 前置图标
   */
  prependIcon: [String, Object],

  /**
   * @zh 后置图标
   */
  appendIcon: [String, Object],

  stacked: Boolean,

  /**
   * @zh 按钮是否显示为块级
   */
  block: Boolean,

  /**
   * @zh 按钮文字内容
   */
  text: [String, Number],

  /**
   * @zh 按钮是否在点击时出现波纹
   */
  ripple: {
    type: Boolean,
    default: true,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  ...makeDisabledProps(),
  ...makeLoadingProps(),
  ...makeRouterProps(),
  ...makeGroupItemProps(),
  ...makePaperProps({
    tag: 'button',
    shape: 'rounded-sm',
    variant: 'contained',
  } as const),
}, 'button')

export const Button = defineComponent({
  name: 'VeButton',

  directives: { Ripple },

  props: makeButtonProps(),

  emits: {
    click: (_event: MouseEvent) => true,
  },

  setup(props, { attrs, slots, emit }) {
    const group = useGroupItem(props, ButtonToggleKey, false)
    const { paperClasses, paperStyles } = usePaper(props)
    const isDisabled = computed(() => group?.disabled.value || props.disabled || props.loading)
    const { loadingClasses } = useLoading(props)
    const { disabledClasses } = useDisabled(computed(() => ({
      disabled: group?.disabled.value || props.disabled,
    })))
    const link = useLink(props, attrs)
    const handleClick = (e: MouseEvent) => {
      if (isDisabled.value) {
        e.preventDefault()
        return
      }
      link.navigate ? link.navigate() : group?.toggle()
      emit('click', e)
    }

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag
      const hasPrependIcon = !props.icon && (props.prependIcon || slots['prepend-icon'])
      const hasPrependLoading = !hasPrependIcon && props.loading && (slots.default || props.text)
      const hasIconOnly = (props.icon && typeof props.icon !== 'boolean') || Boolean(slots.icon)
      const hasDefault = !hasIconOnly && (slots.default || props.text)
      const hasAppendIcon = !props.icon && (props.appendIcon || slots['append-icon'])
      return (
        <Tag
          role={ link.isLink.value ? undefined : 'button' }
          aria-disabled={ props.disabled || undefined }
          type={ link.isLink.value ? undefined : props.type }
          class={ [
            've-button',
            group?.selectedClass.value,
            paperClasses.value,
            disabledClasses.value,
            loadingClasses.value,
            {
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
              've-button--stacked': props.stacked,
              've-button--icon': !hasIconOnly && !!props.icon,
              've-button--icon-only': hasIconOnly,
            },
          ] }
          style={ paperStyles.value }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ handleClick }
          v-ripple={ [
            !isDisabled.value && props.ripple,
            null,
            props.icon ? ['center'] : null,
          ] }
        >
          { genOverlays(props.overlay, 've-button') }

          <ExpandXTransition>
            { hasPrependLoading && (
              <Icon
                class="ve-button__icon"
                icon={
                  <ProgressCircular
                    color="currentColor"
                    indeterminate
                  /> as any
                }
                size={ props.size }
                start
              />
            ) }
          </ExpandXTransition>

          { hasPrependIcon && (
            <Icon
              class="ve-button__icon"
              icon={
                props.loading
                  ? (
                    <ProgressCircular
                      color="currentColor"
                      indeterminate
                    /> as any
                    )
                  : slots['prepend-icon'] ?? props.prependIcon
              }
              size={ props.size }
              start
            />
          ) }

          { hasDefault && (
            <span class="ve-button__wrapper">{ slots.default?.() ?? props.text }</span>
          ) }

          { hasIconOnly && (
            <Icon
              class="ve-button__icon"
              icon={
                props.loading
                  ? (
                    <ProgressCircular
                      color="currentColor"
                      indeterminate
                    /> as any
                    )
                  : (slots.icon ?? props.icon)
              }
              size={ props.size }
            />
          ) }

          { hasAppendIcon && (
            <Icon
              class="ve-button__icon"
              icon={ slots['append-icon'] ?? props.appendIcon }
              size={ props.size }
              end
            />
          ) }
        </Tag>
      )
    }
  },
})

export type Button = InstanceType<typeof Button>
