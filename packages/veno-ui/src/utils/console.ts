// Utils
import { UI_NAME } from './globals'
import { generateComponentTrace } from '@veno-ui/utils'

function createMessage (message: string, vm?: any, parent?: any): string | void {
  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm,
    }
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || []
    if (vm.$_alreadyWarned.includes(message)) return
    vm.$_alreadyWarned.push(message)
  }

  return `[${ UI_NAME }] ${ message }` + (
    vm ? generateComponentTrace(vm) : ''
  )
}

export function consoleInfo (message: string, vm?: any, parent?: any): void {
  const newMessage = createMessage(message, vm, parent)
  newMessage != null && console.info(newMessage)
}

export function consoleWarn (message: string, vm?: any, parent?: any): void {
  const newMessage = createMessage(message, vm, parent)
  newMessage != null && console.warn(newMessage)
}

export function consoleError (message: string, vm?: any, parent?: any): void {
  const newMessage = createMessage(message, vm, parent)
  newMessage != null && console.error(newMessage)
}