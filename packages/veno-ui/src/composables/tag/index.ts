// Utils
import { propsFactory } from '../../utils'

// Types
import { ExtractPropTypes } from 'vue'

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