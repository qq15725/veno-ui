// Styles
import './styles/alert.scss'

// Utils
import { computed } from 'vue'
import { genericComponent, propsFactory, pick } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { makeCardProps, filterCardProps } from '../card/card'

// Components
import { Button } from '../button'
import { Card } from '../card'
import { Icon } from '../icon'
import { FadeExpandTransition } from '../transition'

// Constants
export const alertTypes = ['success', 'info', 'warning', 'error'] as const

// Types
import type { PropType } from 'vue'
import { MakeSlots } from '../../utils'

export type AlertType = typeof alertTypes[number]
export type Alert = InstanceType<typeof Alert>

export type AlertSlots = MakeSlots<{
  prepend: []
  default: []
  append: []
}>

export function filterAlertProps (props: Record<string, unknown>) {
  return pick(props, Object.keys(Alert.props))
}

export const makeAlertProps = propsFactory({
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
  closeText: String,
  ...makeTransitionProps({
    transition: { component: FadeExpandTransition },
  } as const),
  ...makeCardProps({
    shape: 'rounded',
    variant: 'contained-outlined',
  } as const),
}, 'alert')

export const Alert = genericComponent<new () => {
  $slots: AlertSlots
}>()({
  name: 'VeAlert',

  props: makeAlertProps(),

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const computedProps = computed(() => {
      return {
        ...props,
        textColor: props.textColor ?? props.type,
      }
    })
    const isActive = useProxiedModel(props, 'modelValue')
    const icon = computed(() => {
      if (props.icon === false) return
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
      const hasClosable = props.closable && (props.closeText || props.closeIcon)
      const hasAppend = hasClosable || slots.append

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <props.tag
              role="alert"
              class={ [
                've-alert'
              ] }
            >
              <Card
                { ...cardProps }
                tag="div"
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

                      { hasClosable && (
                        <Button
                          variant="plain"
                          ripple={ false }
                          class="ve-alert__close"
                          icon={ props.closeText ? false : props.closeIcon }
                          text={ props.closeText }
                          onClick={ onCloseClick }
                        />
                      ) }
                    </>
                  ) : undefined,
                } }
              </Card>
            </props.tag>
          ) }
        </MaybeTransition>
      )
    }
  }
})