// Styles
import './styles/ve-alert.scss'

// Utils
import { defineComponent, computed } from 'vue'

// Composables
import { makeSheetProps, useSheet } from '../../composables/sheet'
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'

// Components
import { VeButton } from '../ve-button'
import { VeAvatar } from '../ve-avatar'
import { VeFadeTransition } from '../ve-transition'

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
    ...makeSheetProps(),
    ...makeTransitionProps({
      transition: { component: VeFadeTransition, }
    }),
  },

  setup (props, { slots }) {
    const computedProps = computed(() => ({
      ...props,
      textColor: props.textColor ?? props.type,
    }))
    const { sheetClasses, sheetStyles } = useSheet(computedProps, 've-alert')
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
                sheetClasses.value,
              ] }
              style={ [
                sheetStyles.value,
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
