// Utils
import { propsFactory } from '@veno-ui/utils'
import type { PropType } from 'vue'

// Types
import type { IconValue } from '../icons/types'

export const makeIconProps = propsFactory({
  /**
   * @zh 图标值
   */
  icon: [String, Object, Function],

  /**
   * @zh 指定在根元素上使用的自定义标签
   */
  tag: {
    type: String,
    default: 'i',
  },
}, 'icon')

export const makeIconSetProps = propsFactory({
  /**
   * @zh 图标值
   */
  icon: {
    type: [String, Object, Function] as PropType<IconValue>,
    required: true,
  },

  /**
   * @zh 指定在根元素上使用的自定义标签
   */
  tag: {
    type: String,
    required: true,
  },
}, 'icon-set')
