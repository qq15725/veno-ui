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
import { NotificationKey, notification, provideNotification, useNotification } from '../../composables/message'
import { SlideRightFadeInExpandTransition } from '../transition'

// Types
import type { App } from 'vue'

export const NotificationProvider = defineComponent({
  name: 'VeNotificationProvider',

  register(app: App) {
    app.provide(NotificationKey, notification)
  },

  props: {
    registered: Boolean,
  },

  setup(props, { slots }) {
    const notification = props.registered ? useNotification() : provideNotification()

    const { items, remove } = notification

    useRender(() => {
      return (
        <>
          { slots.default?.() }

          <Overlay
            modelValue={ items.value.length > 0 }
            scrim={ false }
            scrollStrategy="none"
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
              ),
            } }
          </Overlay>
        </>
      )
    })

    return notification
  },
})
