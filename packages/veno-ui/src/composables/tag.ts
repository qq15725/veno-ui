// Utilities
import { propsFactory } from '../utils'

// Types
export interface TagProps
{
  tag: string
}

// Composables
export const makeTagProps = propsFactory({
  tag: {
    type: String,
    default: 'div',
  },
}, 'tag')
