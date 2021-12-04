// Styles
import './styles/button.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { makeRouterProps, useLink } from '../../composables/router'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { makeDisabledProps, useDisabled } from '../../composables/disabled'
import { useGroupItem } from '../../composables/group'

// Components
import { Progress } from '../progress'
import { Icon } from '../icon'
import { Divider } from '../divider'

// Symbols
import { ButtonGroupSymbol } from './button-group'

// Constants
export const allowedVariants = [
  'outlined', // 轮廓按钮
  'contained', // 容器按钮
  'text', // 文本按钮
  'link', // 链接按钮
  'icon', // 图标按钮
] as const

// Types
import type { PropType, ComputedRef } from 'vue'
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
      let colors
      {
        const color = props.color ?? (props.variant === 'link' ? 'primary' : undefined)
        switch (props.variant) {
          case 'link':
            colors = {
              textColor: color,
              color: undefined,
            }
            break
          default:
            colors = {
              color
            }
            break
        }
      }
      return {
        ...props,
        ...colors,
        variant,
      }
    })
    const { materialClasses, materialStyles } = useMaterial(computedProps, 've-button')
    const link = useLink(props, attrs)
    const { loadingClasses } = useLoading(props, 've-button')
    const { disabledClasses } = useDisabled(props, 've-button')

    let hasNext: ComputedRef<Boolean>
    {
      try {
        const { id, group } = useGroupItem({}, ButtonGroupSymbol)
        hasNext = computed(() => {
          if (!group.items.value.length) return false
          return group.items.value[group.items.value.length - 1] !== id
        })
      } catch (e) {
        hasNext = computed(() => {
          return false
        })
      }
    }

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
        <>
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
                've-button--has-next': hasNext.value,
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
            { ...attrs }
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

          { hasNext.value && (
            <div class="ve-button__separator">
              <Divider vertical />
            </div>
          ) }
        </>
      )
    }
  }
})