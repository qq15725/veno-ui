// Types
import type { ComponentObjectPropsOptions, Prop, PropType } from 'vue'

/**
 * 创建一个 props 的工厂函数.
 *
 * 常用于定义组合式函数入参 props 然后在使用的组件中重写默认值.
 *
 * @example 简单的函数定义
 * (props: Props) => (defaults?: Record<keyof props, any>) => Props
 *
 * @example 如何使用
 * const makeProps = propsFactory({
 *   foo: String,
 * })
 *
 * defineComponent({
 *   props: {
 *     ...makeProps({
 *       foo: 'a',
 *     }),
 *   },
 *   setup (props) {
 *     // 会是 "string | undefined", 提供了默认值所以现在是 "string"
 *     props.foo
 *   },
 * })
 */
export function propsFactory<PropsOptions extends ComponentObjectPropsOptions> (
  props: PropsOptions,
  source?: string
) {
  return <Defaults extends PartialKeys<PropsOptions> = {}> (
    defaults?: Defaults
  ): AppendDefault<PropsOptions, Defaults> => {
    return Object.keys(props).reduce<any>((obj, prop) => {
      const isObjectDefinition = typeof props[prop] === 'object'
        && props[prop] != null
        && !Array.isArray(props[prop])

      const definition = isObjectDefinition
        ? props[prop]
        : { type: props[prop] }

      if (defaults && prop in defaults) {
        obj[prop] = {
          ...definition,
          default: defaults[prop],
        }
      } else {
        obj[prop] = definition
      }

      if (source) {
        obj[prop].source = source
      }

      return obj
    }, {})
  }
}

type AppendDefault<T extends ComponentObjectPropsOptions, D extends PartialKeys<T>> = {
  [P in keyof T]-?: unknown extends D[P]
    ? T[P]
    : T[P] extends Record<string, unknown>
      ? Omit<T[P], 'type' | 'default'> & {
      type: PropType<MergeDefault<T[P], D[P]>>
      default: MergeDefault<T[P], D[P]>
    }
      : {
        type: PropType<MergeDefault<T[P], D[P]>>
        default: MergeDefault<T[P], D[P]>
      }
}

/**
 * 合并默认值
 */
type MergeDefault<T, D> = unknown extends D
  ? InferPropType<T>
  : (NonNullable<InferPropType<T>> | D)

/**
 * 部分键, 同 `Partial<T>` 只是不用关心值的类型.
 */
type PartialKeys<T> = { [P in keyof T]?: unknown }

/**
 * 推断出 prop 类型, 复制于 Vue.
 */
type InferPropType<T> = T extends null
  ? any // null & true 无法推断
  : T extends { type: null | true }
    ? any // As TS issue https://github.com/Microsoft/TypeScript/issues/14829 // somehow `ObjectConstructor` when inferred from { (): T } becomes `any` // `BooleanConstructor` when inferred from PropConstructor(with PropMethod) becomes `Boolean`
    : T extends ObjectConstructor | { type: ObjectConstructor }
      ? Record<string, any>
      : T extends BooleanConstructor | { type: BooleanConstructor }
        ? boolean
        : T extends Prop<infer V, infer D> ? (unknown extends V ? D : V) : T