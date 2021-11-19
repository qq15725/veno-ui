// Styles
import './styles/ve-alert.scss'

// Utils
import { computed } from 'vue'
import { genericComponent } from '../../utils'

// Composables
import { makeMaterialProps, useMaterial } from '../../composables/material'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'

// Components
import { VeButton } from '../ve-button'
import { VeAvatar } from '../ve-avatar'
import { VeFadeTransition } from '../ve-transition'

// Constants
export const VeAlertTypes = ['success', 'info', 'warning', 'error'] as const

// Types
import type { PropType } from 'vue'

export type VeAlertType = typeof VeAlertTypes[number]
export type VeAlert = InstanceType<typeof VeAlert>

export const VeAlert = genericComponent()({
  name: 'VeAlert',

  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    title: String,
    type: {
      type: String as PropType<VeAlertType>,
      validator: (val: VeAlertType) => VeAlertTypes.includes(val),
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
      transition: { component: VeFadeTransition, }
    }),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const computedProps = computed(() => ({
      ...props,
      textColor: props.textColor ?? props.type,
    }))
    const { materialClasses, materialStyles } = useMaterial(computedProps, 've-alert')
    const isActive = useProxiedModel(props, 'modelValue')
    const icon = computed(() => {
      if (props.icon === false) return undefined
      if (!props.type) return props.icon
      return props.icon ?? `veno-ui:$${ props.type }`
    })

    function onCloseClick (e: MouseEvent) {
      isActive.value = false
    }

    return () => {
      const hasClose = slots.close || props.closable

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <props.tag
              role="alert"
              class={ [
                've-alert',
                materialClasses.value,
              ] }
              style={ [
                materialStyles.value,
              ] }
            >
              { props.type && (
                <div class="ve-alert__avatar">
                  <VeAvatar
                    icon={ icon.value }
                    color="transparent"
                    text-color={ computedProps.value.textColor }
                  />
                </div>
              ) }

              <div class="ve-alert__wrap">
                { props.title && (
                  <div class="ve-alert__title">{ props.title }</div>
                ) }

                { slots.default && (
                  <div class="ve-alert__content">{ slots.default?.() }</div>
                ) }
              </div>

              { hasClose && (
                <div class="ve-alert__close">
                  { slots.close
                    ? slots.close({ props: { onClick: onCloseClick } })
                    : <VeButton
                      icon={ props.closeIcon }
                      variant="text"
                      onClick={ onCloseClick }
                    />
                  }
                </div>
              ) }
            </props.tag>
          ) }
        </MaybeTransition>
      )
    }
  },
})