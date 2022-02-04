// Styles
import './styles/notification-provider.scss'

// Utils
import { defineComponent, useRender } from '../../utils'

// Components
import { Overlay } from '../overlay'
import { Alert } from '../alert'

// Prop Filters
import { filterAlertProps } from '../alert/alert'

// Composables
import { provideNotification } from '../../composables/message'
import { SlideRightFadeInExpandTransition } from '../transition'

export const NotificationProvider = defineComponent({
  name: 'VeNotificationProvider',

  setup (props, { slots }) {
    const provider = provideNotification()

    const { items, remove } = provider

    useRender(() => {
      return (
        <>
          { slots.default?.() }

          <Overlay
            model-value={ items.value.length > 0 }
            scrim={ false }
            scroll-strategy={ () => {
            } }
            class={ [
              've-notification-provider',
            ] }
          >
            { {
              ...slots,
              default: () => (
                <ul>
                  { items.value.map(item => {
                    const [alertProps] = filterAlertProps(item)
                    return (
                      <Alert
                        key={ item.id }
                        tag="li"
                        appear
                        v-model={ item.modelValue }
                        on-after-leave={ () => remove(item.id) }
                        min-width="300"
                        transition={ { component: SlideRightFadeInExpandTransition } }
                        { ...alertProps }
                      />
                    )
                  }) }
                </ul>
              )
            } }
          </Overlay>
        </>
      )
    })

    return provider
  }
})