// Utils
import type { ExtractPropTypes } from 'vue'
import { propsFactory } from '../../utils'

// Types

export type TagProps = ExtractPropTypes<ReturnType<typeof makeTagProps>>

// Composables
export const makeTagProps = propsFactory({
  /**
   * @zh 指定在根元素上使用的自定义标签
   */
  tag: {
    type: String,
    default: 'div',
  },
}, 'tag')
