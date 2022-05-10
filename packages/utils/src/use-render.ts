// Utils
import { getCurrentInstance } from './get-current-instance'

// Types
import type { VNode } from 'vue'

/**
 * 使用组合式渲染
 *
 * @param render 渲染回调函数
 */
export function useRender (render: () => VNode): void {
  const vm = getCurrentInstance('useRender') as any

  vm.render = render
}
