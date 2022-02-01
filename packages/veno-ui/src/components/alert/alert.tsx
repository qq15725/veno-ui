// Styles
import './styles/alert.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, MakeSlots } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { makeCardProps, filterCardProps } from '../card/card'

// Components
import { Button } from '../button'
import { Card } from '../card'
import { Icon } from '../icon'
import { FadeTransition } from '../transition'

// Constants
export const alertTypes = ['success', 'info', 'warning', 'error'] as const

// Types
import type { PropType } from 'vue'

export type AlertType = typeof alertTypes[number]
export type Alert = InstanceType<typeof Alert>

export type AlertSlots = MakeSlots<{
  prepend: []
  default: []
  append: []
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
    type: {
      type: String as PropType<AlertType>,
      validator: (val: AlertType) => alertTypes.includes(val),
    },
    icon: {
      type: [String, Boolean] as PropType<string | false>,
      default: true,
    },
    closable: Boolean,
    closeIcon: {
      type: String,
      default: '$close',
    },
    ...makeTransitionProps({
      transition: { component: FadeTransition },
    } as const),
    ...makeCardProps({
      shape: 'rounded',
      variant: 'contained-outlined',
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const computedProps = computed(() => {
      return {
        ...props,
        textColor: props.textColor ?? props.type
      }
    })
    const isActive = useProxiedModel(props, 'modelValue')
    const icon = computed(() => {
      if (typeof props.icon === 'string') return props.icon
      if (props.type) return `$${ props.type }`
      return
    })

    function onCloseClick (e: Event) {
      isActive.value = false
    }

    return () => {
      const [cardProps] = filterCardProps(computedProps.value)
      const hasPrepend = icon.value || slots.prepend
      const hasAppend = (props.closable && props.closeIcon) || slots.append

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <Card
              { ...cardProps }
              role="alert"
              class={ [
                've-alert'
              ] }
            >
              { {
                prepend: hasPrepend ? () => (
                  <>
                    { icon.value && (
                      <Icon icon={ icon.value } />
                    ) }

                    { slots.prepend?.() }
                  </>
                ) : undefined,
                headerText: () => (
                  <>
                    <div>{ props.title }</div>
                    <div>{ slots.default?.() ?? props.subtitle }</div>
                  </>
                ),
                append: hasAppend ? () => (
                  <>
                    { slots.append?.() }

                    { props.closable && props.closeIcon && (
                      <Button
                        variant="text"
                        style={ {
                          '--ve-button-height': '1.5em'
                        } }
                        icon={ props.closeIcon }
                        onClick={ onCloseClick }
                      />
                    ) }
                  </>
                ) : undefined,
              } }
            </Card>
          ) }
        </MaybeTransition>
      )
    }
  }
})