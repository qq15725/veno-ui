// Utils
import { propsFactory } from '../../utils'

export interface PaginationProps
{
  page: number | string // 当前页
  total: number | string // 总条数
  perPage?: number | string // 每页条数
  firstPage?: number | string // 第一页
  lastPage?: number | string // 最后一页
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
}, 'pagination')