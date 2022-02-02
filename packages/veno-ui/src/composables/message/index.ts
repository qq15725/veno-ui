// Utils
import { ref, provide, inject } from 'vue'
import { getUid } from '../../utils'

// Types
import type { InjectionKey, Ref } from 'vue'

export interface MessageItem
{
  id: string
  modelValue: boolean
  type: string
  title: string
  duration: number
  close: () => void
}

type MessageItemGenerator = (title: string, rest?: Record<string, any>) => MessageItem

export interface MessageInstance
{
  items: Ref<MessageItem[]>
  open: (type: string) => MessageItemGenerator
  close: (id: string) => void
  info: MessageItemGenerator
  success: MessageItemGenerator
  warning: MessageItemGenerator
  error: MessageItemGenerator
}

export const MessageKey: InjectionKey<MessageInstance> = Symbol.for('veno-ui:message')

export function useMessage () {
  const provider = inject(MessageKey)
  if (!provider) throw new Error('[VenoUi] Could not find message instance')
  return provider
}

export function provideMessage () {
  const items = ref<MessageItem[]>([])

  function close (id: string) {
    const item = items.value.find(v => v.id === id)
    if (item) {
      item.modelValue = false
    }
  }

  const open = (type: string) => {
    return (title: string, rest?: Record<string, any>) => {
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
      item.duration && setTimeout(item.close, item.duration)
      return item
    }
  }

  const message = {
    items,
    open,
    close,
    info: open('info'),
    success: open('success'),
    warning: open('warning'),
    error: open('error'),
  }

  provide(MessageKey, message)

  return message
}