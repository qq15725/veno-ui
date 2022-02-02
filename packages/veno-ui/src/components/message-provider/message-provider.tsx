// Styles
import './styles/message-provider.scss'

// Utils
import { inject } from 'vue'
import { defineComponent, useRender } from '../../utils'

// Components
import { Overlay } from '../overlay'
import { Alert } from '../alert'

// Prop Filters
import { filterAlertProps } from '../alert/alert'

// Composables
import { provideMessage } from '../../composables/message'

// Types
import type { InjectionKey } from 'vue'
import type { AlertType } from '../alert/alert'

export interface MessageItemProp
{
  id: string
  modelValue: boolean
  type: AlertType
  title: string
  duration: number
  close: () => void
}

type CreateMessageItem = (title: string, rest?: Record<string, any>) => MessageItemProp

export interface MessageProvide
{
  open: (type: AlertType) => CreateMessageItem
  info: CreateMessageItem
  success: CreateMessageItem
  warning: CreateMessageItem
  error: CreateMessageItem
}

export const MessageKey: InjectionKey<MessageProvide> = Symbol.for('veno-ui:message')

export function useMessage () {
  const provider = inject(MessageKey)
  if (!provider) throw new Error('[VenoUi] Could not find message instance')
  return provider
}

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
                      onAfterLeave={ () => remove(item.id) }
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