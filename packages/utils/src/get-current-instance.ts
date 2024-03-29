// Utils
import { getCurrentInstance as _getCurrentInstance } from 'vue'
import { toKebabCase } from './string'

// Types
import type { ComponentInternalInstance } from 'vue'

/**
 * 获取当前实例
 *
 * @param errorName 获取失败时的消息名
 * @param errorMessage 获取失败时的消息内容
 */
export function getCurrentInstance(errorName: string, errorMessage?: string): ComponentInternalInstance {
  const vm = _getCurrentInstance()

  if (!vm) {
    throw new Error(
      `${ errorName } ${ errorMessage || 'must be called from inside a setup function' }`,
    )
  }

  return vm
}

/**
 * 获取当前实例的组件名称
 *
 * @param errorName 失败时的消息名
 */
export function getCurrentInstanceName(errorName = 'getCurrentInstanceName') {
  return toKebabCase(getCurrentInstance(errorName).type?.name ?? '')
}
