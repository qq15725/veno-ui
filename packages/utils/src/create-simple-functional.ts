// Utils
import { defineComponent, h } from 'vue'
import { toKebabCase } from './string'

// Types
import type { DefineComponent } from 'vue'

/**
 * 创建简单的函数式组件
 *
 * @param klass 类名
 * @param tag 标签
 * @param name 组件名
 */
export function createSimpleFunctional(klass: string, tag = 'div', name?: string): DefineComponent {
  return defineComponent({
    name: name ?? toKebabCase(klass.replace(/__/g, '-')),

    props: {
      tag: {
        type: String,
        default: tag,
      },
    },

    setup(props, { slots }) {
      return () => h(props.tag, { class: klass }, slots.default?.())
    },
  }) as any
}
