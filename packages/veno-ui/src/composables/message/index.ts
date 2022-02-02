// Utils
import { ref, provide, inject } from 'vue'
import { getUid } from '../../utils'

// Types
import type { InjectionKey, Ref } from 'vue'

type closeMessage = () => void

export interface MessageItem
{
  id: string
  modelValue: boolean
  type: string
  title: string
  duration: number
  close: closeMessage
}

type OpenMessage = (title: string, rest?: Record<string, any>) => Promise<MessageItem> | closeMessage

export interface MessageInstance
{
  items: Ref<MessageItem[]>
  open: (type: string) => OpenMessage
  close: (id: string) => void
  info: OpenMessage
  success: OpenMessage
  warning: OpenMessage
  error: OpenMessage
}

export const MessageKey: InjectionKey<MessageInstance> = Symbol.for('veno-ui:message')

export function useMessage () {
  const provider = inject(MessageKey)
  if (!provider) throw new Error('[VenoUi] Could not find message instance')
  return provider
}

export function createMessage () {
  const items = ref<MessageItem[]>([])

  function close (id: string) {
    const item = items.value.find(v => v.id === id)
    if (item) {
      item.modelValue = false
    }
  }

  const open = (type: string) => {
    return function (title: string, rest?: Record<string, any>) {
      const id = `ve-message-${ getUid() }`
      const item = {
        id,
        type,
        title,
        modelValue: true,
        variant: 'contained',
        elevation: 15,
        duration: 3000,
        close: () => close(id),
        ...rest,
      }
      items.value.push(item)
      if (item.duration > 0) {
        return new Promise((resolve) => {
          setTimeout(() => {
            item.close()
            resolve(item)
          }, item.duration)
        })
      }
      return item.close
    }
  }

  return {
    items,
    open,
    close,
    info: open('info'),
    success: open('success'),
    warning: open('warning'),
    error: open('error'),
  }
}

export function provideMessage () {
  const message = createMessage()
  provide(MessageKey, message)
  return message
}