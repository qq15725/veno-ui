// Styles
import './styles/button.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, MaterialProps, useMaterial } from '../../composables/material'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'

// Components
import { Progress } from '../progress'
import { Icon } from '../icon'

// Constants
export const allowedVariants = [
  'outlined', // 轮廓按钮
  'contained', // 容器按钮
  'text', // 文本按钮
  'link', // 链接按钮
  'icon', // 图标按钮
] as const

// Types
import type { PropType } from 'vue'
import type { MakeSlots } from '../../utils'

export type ButtonVariant = typeof allowedVariants[number]
export type Button = InstanceType<typeof Button>
export type ButtonSlots = MakeSlots<{
  default: [],
}>

export const Button = genericComponent<new () => {
  $slots: ButtonSlots
}>()({
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    icon: [Boolean, String],
    prependIcon: String,
    appendIcon: String,
    stacked: Boolean,
    block: Boolean,
    text: String,
    ...makeMaterialProps({
      tag: 'button',
    }),
    ...makeDisabledProps(),
    ...makeLoadingProps(),
    ...makeRouterProps(),
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'contained',
      validator: (v: any) => allowedVariants.includes(v),
    },
  },

  setup: function (props, { attrs, slots }) {
    const computedProps = computed(() => {
      const variant = props.icon ? 'icon' : props.variant
      return {
        ...props,
        variant,
        contained: variant === 'icon',
      }
    })
    const { materialClasses, materialStyles } = useMaterial(computedProps, 've-button')
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-button')
    const { disabledClasses } = useDisabled(props, 've-button')

    return () => {
      const Tag: any = link.isLink.value ? 'a' : props.tag
      const hasOverlay = computedProps.value.variant !== 'link'
      const hasLoding = props.loading
      const hasPrependIcon = (
        !hasLoding
        && computedProps.value.variant !== 'icon'
        && props.prependIcon
      )
      const hasDefault = (
        !hasLoding
        || props.icon === false
      )
      const hasAppendIcon = (
        !hasLoding
        && computedProps.value.variant !== 'icon'
        && props.appendIcon
      )
      return (
        <Tag
          role={ link.isLink.value ? undefined : 'button' }
          aria-disabled={ props.disabled || undefined }
          type={ link.isLink.value ? undefined : props.type }
          class={ [
            've-button',
            {
              've-button--active': link.isExactActive?.value,
              've-button--block': props.block,
              've-button--stacked': props.stacked,
            },
            materialClasses.value,
            disabledClasses.value,
            loadingClasses.value,
          ] }
          style={ [
            materialStyles.value,
          ] }
          disabled={ props.disabled || undefined }
          href={ link.href.value }
          onClick={ props.disabled || link.navigate }
        >
          { hasOverlay && <div class="ve-button__overlay" /> }

          { hasLoding && (
            <Progress
              class="ve-button__icon"
              indeterminate
              width={ 2 }
            />
          ) }

          { hasPrependIcon && (
            <Icon
              class="ve-button__icon"
              icon={ props.prependIcon }
              left={ !props.stacked }
            />
          ) }

          { hasDefault && (
            typeof props.icon === 'boolean'
              ? <span>{ slots.default ? slots.default() : props.text }</span>
              : (
                <Icon
                  class="ve-button__icon"
                  icon={ props.icon }
                  size={ props.size }
                />
              )
          ) }

          { hasAppendIcon && (
            <Icon
              class="ve-button__icon"
              icon={ props.appendIcon }
              right={ !props.stacked }
            />
          ) }
        </Tag>
      )
    }
  }
})