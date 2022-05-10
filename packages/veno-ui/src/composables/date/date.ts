// Utils
import { padNumber } from '../../utils'

// Constants
import { MAP } from './constants'

// Types
import type { DateInstance, DateOptions, InternalDateInstance } from './types'

export const defaultDateFormat = 'YYYY-MM-DD HH:mm:ss'

export function createDate(options?: DateOptions): DateInstance {
  let date: Date
  {
    if (!options) {
      date = new Date()
    } else if (typeof options === 'string') {
      date = new Date(options.replace(/-/g, '/'))
    } else {
      date = new Date(options)
    }
  }

  function tap<T>(cb1: () => T, cb2: (v: T) => void) {
    const res = cb1()
    cb2(res)
    return res
  }

  const ctx: InternalDateInstance = {
    add(value, unit) {
      return tap(() => this.clone(), cloned => {
        const get = MAP[unit].get as keyof typeof cloned
        const set = MAP[unit].set as keyof typeof cloned
        if (set in cloned && get in cloned) {
          (cloned[set] as (value: number) => void)(
            (cloned[get] as () => number)() + value,
          )
        }
      })
    },
    subtract(value, unit) {
      return this.add(-value, unit)
    },
    startOf(unit) {
      return createDate(this.format(MAP[unit].startOf))
    },
    endOf(unit) {
      return createDate(this.format(MAP[unit].endOf))
    },
    format(value = defaultDateFormat) {
      const formatted = this.toObject()

      const { format, counter } = value.split('')
        .reduce(({ format, counter }, key) => {
          if (key in formatted && format[format.length - 1] === key) {
            counter[key] = counter[key] || 1
            counter[key]++
          } else {
            format += key
          }
          return { format, counter }
        }, { format: '', counter: {} } as { format: string; counter: Record<string, number> })

      return format.replace(/\w/g, key => {
        if (key in formatted) {
          const val = formatted[key as keyof typeof formatted]
          if (key in counter) {
            return padNumber(val, counter[key as keyof typeof counter])
          }
          return String(val)
        }
        return String(key)
      })
    },
    clone: () => createDate(date),
    unix() {
      return ~~(date.getTime() / 1000)
    },
    valueOf() {
      return date.valueOf()
    },
    toDate() {
      return date
    },
    toObject() {
      return {
        Y: date.getFullYear(),
        M: date.getMonth() + 1,
        D: date.getDate(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        ms: date.getMilliseconds(),
        // weekday
        d: date.getDay(),
      }
    },
  }

  return new Proxy<DateInstance>(ctx as any, {
    get: (target, prop) => {
      return prop in target
        ? target[prop as keyof typeof target]
        : prop in date
          ? date[prop as keyof typeof date].bind(date)
          : undefined
    },
    has: (target, prop) => {
      return prop in target || prop in date
    },
  })
}
