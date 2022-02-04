// Styles
import './styles/message-provider.scss'

// Utils
import { defineComponent, useRender } from '../../utils'

// Components
import { Overlay } from '../overlay'
import { Alert } from '../alert'

// Prop Filters
import { filterAlertProps } from '../alert/alert'

// Composables
import { provideMessage } from '../../composables/message'

export const MessageProvider = defineComponent({
  name: 'VeMessageProvider',

  setup (props, { slots }) {
    const provider = provideMessage()

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
              )
            } }
          </Overlay>
        </>
      )
    })

    return provider
  }
})