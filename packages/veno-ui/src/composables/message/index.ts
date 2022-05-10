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
  text: string
  duration: number
  close: closeMessage
}

type OpenMessage = (text: string, rest?: Record<string, any>) => Promise<MessageItem> | closeMessage

export interface MessageInstance
{
  items: Ref<MessageItem[]>
  open: (props?: Record<string, any>) => OpenMessage
  info: OpenMessage
  success: OpenMessage
  warning: OpenMessage
  error: OpenMessage
  loading: OpenMessage
  close: (id: string) => void
  remove: (id: string) => void
}

export const MessageKey: InjectionKey<MessageInstance> = Symbol.for('veno-ui:message')
export const NotificationKey: InjectionKey<MessageInstance> = Symbol.for('veno-ui:notification')

// global
export const message = createMessage()
export const notification = createMessage()

export function createMessage () {
  const items = ref<MessageItem[]>([])

  function open (props?: Record<string, any>) {
    return function (text: string, rest?: Record<string, any>) {
      const id = `ve-message-${ getUid() }`
      const item = {
        id,
        text,
        modelValue: true,
        variant: 'contained',
        elevation: 15,
        duration: 3000,
        close: () => close(id),
        ...props,
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

  function close (id: string) {
    const item = items.value.find(v => v.id === id)
    if (item) {
      item.modelValue = false
    }
  }

  function remove (id: string) {
    items.value.splice(items.value.findIndex(v => v.id === id), 1)
  }

  return {
    items,
    open,
    info: open({ type: 'info' }),
    success: open({ type: 'success' }),
    warning: open({ type: 'warning' }),
    error: open({ type: 'error' }),
    loading: open({ loading: true }),
    close,
    remove,
  }
}

export function provideMessage () {
  const message = createMessage()
  provide(MessageKey, message)
  return message
}

export function useMessage () {
  const message = inject(MessageKey)
  if (!message) throw new Error('[VenoUi] Could not find message instance')
  return message
}

export function provideNotification () {
  const notification = createMessage()
  provide(NotificationKey, notification)
  return notification
}

export function useNotification () {
  const notification = inject(NotificationKey)
  if (!notification) throw new Error('[VenoUi] Could not find notification instance')
  return notification
}