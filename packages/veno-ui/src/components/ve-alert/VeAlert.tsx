// Styles
import './styles/ve-alert.scss'

// Utils
import { defineComponent, computed } from 'vue'

// Composables
import { makeTagProps } from '../../composables/tag'
import { makeVariantProps, useVariant } from '../../composables/variant'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { makeRoundedProps, useRounded } from '../../composables/rounded'

// Components
import { VeButton } from '../../components/ve-button'
import { VeAvatar } from '../../components/ve-avatar'
import { VeFadeTransition } from '../../components/ve-transition'

// Types
import type { PropType } from 'vue'

const allowedTypes = ['success', 'info', 'warning', 'error'] as const

type ContextualType = typeof allowedTypes[number]

export default defineComponent({
  name: 'VeAlert',

  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    title: String,
    type: {
      type: String as PropType<ContextualType>,
      validator: (val: ContextualType) => allowedTypes.includes(val),
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
    ...makeTagProps(),
    ...makeVariantProps(),
    ...makeRoundedProps(),
    ...makeTransitionProps({
      transition: { component: VeFadeTransition, }
    }),
  },

  setup (props, { slots }) {
    const variantProps = computed(() => ({
      color: props.color,
      textColor: props.textColor ?? props.type,
      variant: props.variant,
    }))
    const { colorClasses, colorStyles, variantClasses } = useVariant(variantProps, 've-alert')
    const { roundedClasses } = useRounded(props, 've-alert')
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
              class={ [
                've-alert',
                colorClasses.value,
                variantClasses.value,
                roundedClasses.value,
              ] }
              style={ [
                colorStyles.value,
              ] }
            >
              { props.type && (
                <div class="ve-alert__icon">
                  <VeAvatar
                    icon={ icon.value }
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
                    : (
                      <VeButton
                        icon={ props.closeIcon }
                        variant="text"
                        onClick={ onCloseClick }
                      />
                    )
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
