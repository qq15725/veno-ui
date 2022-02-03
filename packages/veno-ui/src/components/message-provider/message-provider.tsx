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

  props: {
    //
  },

  setup (props, { slots }) {
    const message = provideMessage()

    const { items } = message

    function remove (id: string) {
      items.value.splice(items.value.findIndex(v => v.id === id), 1)
    }

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
                  { items.value.map(item => (
                    <Alert
                      key={ item.id }
                      tag="li"
                      appear
                      v-model={ item.modelValue }
                      on-after-leave={ () => remove(item.id) }
                      { ...filterAlertProps(item)[0] }
                    />
                  )) }
                </ul>
              )
            } }
          </Overlay>
        </>
      )
    })

    return message
  }
})