// Styles
import './styles/alert.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, MakeSlots } from '../../utils'

// Composables
import { makePaperProps, usePaper } from '../../composables/paper'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useTextColor } from '../../composables/color'

// Components
import { Button } from '../button'
import { Avatar } from '../avatar'
import { FadeTransition } from '../transition'

// Constants
export const AlertTypes = ['success', 'info', 'warning', 'error'] as const

// Types
import type { PropType } from 'vue'

export type AlertType = typeof AlertTypes[number]
export type Alert = InstanceType<typeof Alert>

export type AlertSlots = MakeSlots<{
  action: []
  default: []
}>

export const Alert = genericComponent<new () => {
  $slots: AlertSlots
}>()({
  name: 'VeAlert',

  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    title: String,
    text: String,
    type: {
      type: String as PropType<AlertType>,
      validator: (val: AlertType) => AlertTypes.includes(val),
    },
    icon: {
      type: [Boolean, String] as PropType<false | string>,
      default: null,
    },
    closable: Boolean,
    closeIcon: {
      type: String,
      default: 'veno-ui:$close',
    },
    overlayColor: String,
    ...makePaperProps(),
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const { paperClasses, paperStyles } = usePaper(props)
    const iconColor = computed(() => props.textColor ?? props.type)
    const {
      textColorClasses: overlayColorClasses,
      textColorStyles: overlayColorStyles
    } = useTextColor(computed(() => props.overlayColor ?? iconColor.value))
    const isActive = useProxiedModel(props, 'modelValue')
    const icon = computed(() => props.icon ? props.icon : `veno-ui:$${ props.type }`)

    function onCloseClick (e: Event) {
      isActive.value = false
    }

    return () => {
      const hasIcon = props.icon !== false && (props.type || props.icon)
      const hasAction = props.closable || slots.action
      const hasText = props.text || slots.default

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <props.tag
              role="alert"
              class={ [
                've-alert',
                paperClasses.value,
              ] }
              style={ paperStyles.value }
            >
              <div
                class={ [
                  've-alert__overlay',
                  overlayColorClasses.value
                ] }
                style={ overlayColorStyles.value }
              />

              { hasIcon && (
                <Avatar
                  class="ve-alert__icon"
                  icon={ icon.value }
                  color="transparent"
                  text-color={ iconColor.value }
                />
              ) }

              <div class="ve-alert__wrapper">
                { props.title && (
                  <div class="ve-alert__title">{ props.title }</div>
                ) }

                { hasText && (
                  <div class="ve-alert__content">{ props.text ?? slots.default?.() }</div>
                ) }
              </div>

              { hasAction && (
                <div class="ve-alert__action">
                  { slots.action?.({ props: { onClick: onCloseClick } }) ?? (
                    <Button
                      icon={ props.closeIcon }
                      color="transparent"
                      onClick={ onCloseClick }
                    />
                  ) }
                </div>
              ) }
            </props.tag>
          ) }
        </MaybeTransition>
      )
    }
  },
})