// Styles
import './styles/message-provider.scss'

// Utils
import { useRender } from '@veno-ui/utils'
import { defineComponent } from '../../utils'

// Components
import { Overlay } from '../overlay'
import { Alert } from '../alert'

// Prop Filters
import { filterAlertProps } from '../alert/alert'

// Composables
import { MessageKey, message, provideMessage, useMessage } from '../../composables/message'

// Types
import type { App } from 'vue'

export const MessageProvider = defineComponent({
  name: 'VeMessageProvider',

  register(app: App) {
    app.provide(MessageKey, message)
  },

  props: {
    registered: Boolean,
  },

  setup(props, { slots }) {
    const message = !props.registered ? provideMessage() : useMessage()

    const { items, remove } = message

    useRender(() => {
      return (
        <>
          { slots.default?.() }

          <Overlay
            modelValue={ items.value.length > 0 }
            scrim={ false }
            scrollStrategy="none"
            class={ [
              've-message-provider',
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

    return message
  },
})
