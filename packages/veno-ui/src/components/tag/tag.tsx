// Styles
import './styles/tag.scss'

// Utils
import { defineComponent } from '../../utils'

// Composables
import { makePaperProps, usePaper, genOverlays } from '../../composables/paper'
import { makeTransitionProps, MaybeTransition } from '../../composables/transition'
import { useProxiedModel } from '../../composables/proxied-model'

// Components
import { Icon } from '../icon'
import { Button } from '../button'
import { FadeInExpandTransition } from '../transition'

export const Tag = defineComponent({
  name: 'VeTag',

  props: {
    closable: Boolean,
    closeIcon: {
      type: String,
      default: '$close',
    },
    icon: String,
    modelValue: {
      type: Boolean,
      default: true,
    },
    text: String,
    ...makeTransitionProps({
      transition: { component: FadeInExpandTransition },
    } as const),
    ...makePaperProps({
      shape: 'rounded',
      variant: 'contained',
    } as const),
  },

  emits: {
    'update:modelValue': (value: boolean) => true,
  },

  setup (props, { slots }) {
    const isActive = useProxiedModel(props, 'modelValue')
    const { paperClasses, paperStyles } = usePaper(props)

    function onCloseClick (e: Event) {
      isActive.value = false
    }

    return () => {
      const hasClosable = props.closable && props.closeIcon

      return (
        <MaybeTransition transition={ props.transition }>
          { isActive.value && (
            <props.tag
              class={ [
                've-tag',
                paperClasses.value
              ] }
              style={ paperStyles.value }
            >
              { genOverlays(false, 've-tag') }

              { props.icon && (
                <Icon
                  class="ve-tag__icon"
                  icon={ props.icon }
                  left={ true }
                />
              ) }

              { slots.default?.() ?? props.text }

              { hasClosable && (
                <Button
                  variant="plain"
                  ripple={ false }
                  class="ve-tag__close"
                  icon={ props.closeIcon }
                  onClick={ onCloseClick }
                />
              ) }
            </props.tag>
          ) }
        </MaybeTransition>
      )
    }
  }
})

export type Tag = InstanceType<typeof Tag>