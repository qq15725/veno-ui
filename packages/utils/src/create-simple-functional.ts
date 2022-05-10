// Utils
import { h, defineComponent } from 'vue'
import { toKebabCase } from './string'

/**
 * 创建简单的函数式组件
 *
 * @param klass 类名
 * @param tag 标签
 * @param name 组件名
 */
export function createSimpleFunctional (klass: string, tag = 'div', name?: string) {
  return defineComponent({
    name: name ?? toKebabCase(klass.replace(/__/g, '-')),

    props: {
      tag: {
        type: String,
        default: tag,
      },
    },

    setup (props, { slots }) {
      return () => h(props.tag, { class: klass }, slots.default?.())
    },
  })
}
