// Utils
import { propsFactory } from '../../utils'

export interface PaginationProps
{
  firstPage: number | string
  lastPage: number | string
  page: number | string
  perPage: number | string
  total?: number | string
}

export const makePaginationProps = propsFactory({
  firstPage: {
    type: [Number, String],
    default: 1,
  },
  lastPage: {
    type: [Number, String],
    default: 1,
    validator: (val: number) => val % 1 === 0,
  },
  page: {
    type: [Number, String],
    default: (props: any) => props.firstPage,
  },
  perPage: {
    type: [Number, String],
    default: 10,
  },
  total: [Number, String],
}, 'pagination')