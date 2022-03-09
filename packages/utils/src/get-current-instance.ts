// Utils
import { getCurrentInstance as _getCurrentInstance } from 'vue'
import { toKebabCase } from './helpers'

export function getCurrentInstance (name: string, message?: string) {
  const vm = _getCurrentInstance()

  if (!vm) {
    throw new Error(
      `[VenoUi] ${ name } ${ message || 'must be called from inside a setup function' }`
    )
  }

  return vm
}

export function getCurrentInstanceName (name = 'getCurrentInstanceName') {
  return toKebabCase(getCurrentInstance(name).type?.name ?? '')
}
