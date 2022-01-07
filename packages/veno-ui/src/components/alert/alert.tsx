// Styles
import './styles/alert.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
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

export const Alert = genericComponent()({
  name: 'VeAlert',

  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    title: String,
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
    ...makeMaterialProps(),
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const { materialClasses, materialStyles } = useMaterial(props)
    const { textColorClasses, textColorStyles } = useTextColor(computed(() => {
      return props.textColor ?? props.type
    }))
    const isActive = useProxiedModel(props, 'modelValue')
    const icon = computed(() => {
      if (props.icon === false) return undefined
      if (!props.type) return props.icon
      return props.icon ?? `veno-ui:$${ props.type }`
    })

    function onCloseClick (e: Event) {
      isActive.value = false
    }

    return () => {
      const hasAction = slots.action || props.closable

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <props.tag
              role="alert"
              class={ [
                've-alert',
                materialClasses.value,
              ] }
              style={ materialStyles.value }
            >
              <div
                class={ [
                  've-alert__overlay',
                  textColorClasses.value
                ] }
                style={ textColorStyles.value }
              />

              { props.type && (
                <Avatar
                  class="ve-alert__avatar"
                  icon={ icon.value }
                  color="transparent"
                  text-color={ props.textColor ?? props.type }
                />
              ) }

              <div class="ve-alert__wrapper">
                { props.title && (
                  <div class="ve-alert__title">{ props.title }</div>
                ) }

                { slots.default && (
                  <div class="ve-alert__content">{ slots.default?.() }</div>
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