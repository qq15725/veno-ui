// Styles
import './styles/alert.scss'

// Utils
import { computed } from 'vue'
import { pick, propsFactory } from '@veno-ui/utils'
import { genericComponent } from '../../utils'

// Composables
import { useProxiedModel } from '../../composables/proxied-model'
import { MaybeTransition, makeTransitionProps } from '../../composables/transition'
import { makeLoadingProps, useLoading } from '../../composables/loading'
import { filterCardProps, makeCardProps } from '../card/card'

// Components
import { Button } from '../button'
import { Card } from '../card'
import { Icon } from '../icon'
import { Progress } from '../progress'
import { FadeInExpandTransition } from '../transition'

// Types
import type { PropType } from 'vue'
import type { MakeSlots } from '../../utils'

// Constants
export const alertTypes = ['success', 'info', 'warning', 'error'] as const

export type AlertType = typeof alertTypes[number]

export type AlertSlots = MakeSlots<{
  prepend: []
  default: []
  append: []
}>

export const makeAlertProps = propsFactory({
  /**
   * @zh 警告信息是否显示
   */
  modelValue: {
    type: Boolean,
    default: true,
  },

  /**
   * @zh 警告信息的类型
   */
  type: {
    type: String as PropType<AlertType>,
    default: 'info',
    validator: (val: AlertType) => alertTypes.includes(val),
  },

  /**
   * @zh 警告信息的图标
   */
  icon: {
    type: [String, Boolean, Object] as PropType<string | false>,
    default: true,
  },

  /**
   * @zh 警告信息是否可关闭
   */
  closable: Boolean,

  /**
   * @zh 警告信息的关闭图标
   */
  closeIcon: {
    type: [String, Object],
    default: '$close',
  },

  /**
   * @zh 警告信息的关闭文本
   */
  closeText: String,
  ...makeTransitionProps({
    transition: { component: FadeInExpandTransition },
  } as const),
  ...makeLoadingProps(),
  ...makeCardProps({
    shape: 'rounded-sm',
    variant: 'contained-outlined',
  } as const),
}, 'alert')

export const Alert = genericComponent<new () => {
  $slots: AlertSlots
}>()({
  name: 'VeAlert',

  props: makeAlertProps(),

  emits: {
    'update:modelValue': (_: boolean) => true,
  },

  setup(props, { slots }) {
    const { loadingClasses } = useLoading(props)
    const computedProps = computed(() => {
      return {
        ...props,
        text: undefined,
        textColor: props.type ?? props.textColor,
      }
    })
    const isActive = useProxiedModel(props, 'modelValue')
    const icon = computed(() => {
      if (props.icon === false) return undefined
      if (typeof props.icon === 'string') return props.icon
      if (props.type) return `$${ props.type }`
      return undefined
    })

    function onCloseClick(_: Event) {
      isActive.value = false
    }

    return () => {
      const [cardProps] = filterCardProps(computedProps.value)
      const hasLoading = props.loading
      const hasIcon = !hasLoading && icon.value
      const hasPrepend = hasIcon || hasLoading || slots.prepend
      const hasTitle = !!props.title
      const hasClosable = props.closable && (props.closeText || props.closeIcon)
      const hasAppend = hasClosable || slots.append

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <props.tag
              role="alert"
              class={ [
                've-alert',
                {
                  've-alert--with-title': hasTitle,
                },
                loadingClasses.value,
              ] }
            >
              <Card
                { ...cardProps }
                tag="div"
              >
                { {
                  prepend: hasPrepend
                    ? () => (
                    <>
                      { hasIcon && (
                        <Icon
                          class="ve-alert__icon"
                          size="21"
                          icon={ icon.value }
                        />
                      ) }

                      { hasLoading && (
                        <Progress
                          class="ve-alert__icon"
                          size="21"
                          variant="circular"
                          stroke-width="2"
                          indeterminate
                        />
                      ) }

                      { slots.prepend?.() }
                    </>
                      )
                    : undefined,
                  headerText: () => (
                    <>
                      { hasTitle && (
                        <div class="ve-alert__title">{ props.title }</div>
                      ) }

                      { slots.default?.() ?? props.text }
                    </>
                  ),
                  append: hasAppend
                    ? () => (
                    <>
                      { slots.append?.() }

                      { hasClosable && (
                        <Button
                          class="ve-alert__close"
                          variant="plain"
                          ripple={ false }
                          icon={ props.closeText ? false : props.closeIcon }
                          text={ props.closeText }
                          onClick={ onCloseClick }
                        />
                      ) }
                    </>
                      )
                    : undefined,
                } }
              </Card>
            </props.tag>
          ) }
        </MaybeTransition>
      )
    }
  },
})

export function filterAlertProps(props: Record<string, unknown>) {
  return pick(props, Object.keys(Alert.props))
}

export type Alert = InstanceType<typeof Alert>
