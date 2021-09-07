import { camelize, capitalize, h, defineComponent } from 'vue'

/**
 * 创建简单函数组件
 *
 * @param klass
 * @param tag
 * @param name
 */
export function createSimpleFunctional (
  klass: string,
  tag = 'div',
  name?: string
) {
  return defineComponent({
    name: name ?? capitalize(camelize(klass.replace(/__/g, '-'))),

    props: {
      tag: {
        type: String,
        default: tag,
      },
    },

    setup (props, { slots }) {
      return () => h(props.tag, {
        class: klass,
      }, slots.default?.())
    },
  })
}
