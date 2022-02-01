// Styles
import './styles/message.scss'

// Utils
import { ref } from 'vue'
import { defineComponent, useRender, getUid } from '../../utils'

// Components
import { Overlay } from '../overlay'
import { Alert } from '../alert'

// Types
import type { AlertType } from '../alert/alert'

export interface MessageItemProp
{
  id: string
  type: AlertType
  title: string
  duration: number
  close: () => void
}

export const Message = defineComponent({
  name: 'VeMessage',

  setup (props, { slots }) {
    const items = ref<MessageItemProp[]>([])

    const open = (type: AlertType) => {
      return (title: string, rest?: Record<string, any>) => {
        const id = `ve-message-${ getUid() }`
        const item = {
          id,
          type,
          title,
          variant: 'contained',
          elevation: 8,
          duration: 1000,
          close: () => items.value.splice(items.value.findIndex(v => v.id === id), 1),
          ...rest,
        }
        items.value.push(item)
        setTimeout(item.close, item.duration)
        return item
      }
    }

    useRender(() => {
      return (
        <Overlay
          model-value={ items.value.length > 0 }
          scrim={ false }
          scroll-strategy={ () => {
          } }
          class={ [
            've-message',
          ] }
        >
          { {
            ...slots,
            default: () => (
              <ul>
                { items.value.map(item => (
                  <li>
                    <Alert
                      { ...item }
                    />
                  </li>
                )) }
              </ul>
            )
          } }
        </Overlay>
      )
    })

    return {
      open,
      info: open('info'),
      success: open('success'),
      warning: open('warning'),
      error: open('error'),
    }
  }
})