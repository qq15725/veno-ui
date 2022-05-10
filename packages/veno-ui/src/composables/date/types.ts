// Constants
import type { MAP } from './constants'

export interface DateInstance extends Date, InternalDateInstance {
  //
}

export type DateManipulateType = keyof typeof MAP

export type DateOptions = number | string | Date

export interface InternalDateInstance {
  add (value: number, unit: DateManipulateType): DateInstance
  subtract (value: number, unit: DateManipulateType): DateInstance
  startOf (unit: DateManipulateType): DateInstance
  endOf (unit: DateManipulateType): DateInstance
  format (value?: string): string
  clone (): DateInstance
  unix (): number
  valueOf (): number
  toDate (): Date
  toObject (): Record<string, any>
}
