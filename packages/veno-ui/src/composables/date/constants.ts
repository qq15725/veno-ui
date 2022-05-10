// Constants
export const MAP = {
  year: {
    alias: 'Y',
    get: 'getFullYear',
    set: 'setFullYear',
    startOf: 'YYYY-01-01 00:00:00', // TODO
    endOf: 'YYYY-12-$1 23:59:59.999',
  },
  month: {
    alias: 'M',
    get: 'getMonth',
    set: 'setMonth',
    startOf: 'YYYY-MM-01 00:00:00',
    endOf: 'YYYY-MM-31 23:59:59.999',
  },
  day: {
    alias: 'D',
    get: 'getDate',
    set: 'setDate',
    startOf: 'YYYY-MM-DD 00:00:00',
    endOf: 'YYYY-MM-DD 23:59:59.999',
  },
  hour: {
    alias: 'H',
    get: 'getHours',
    set: 'setHours',
    startOf: 'YYYY-MM-DD HH:00:00',
    endOf: 'YYYY-MM-DD HH:59:59.999',
  },
  minute: {
    alias: 'm',
    get: 'getMinutes',
    set: 'setMinutes',
    startOf: 'YYYY-MM-DD HH:mm:00',
    endOf: 'YYYY-MM-DD HH:mm:59.999',
  },
  second: {
    alias: 's',
    get: 'getSeconds',
    set: 'setSeconds',
    startOf: 'YYYY-MM-DD HH:mm:ss.000',
    endOf: 'YYYY-MM-DD HH:mm:ss.999',
  },
  millisecond: {
    alias: 'ms',
    get: 'getMilliseconds',
    set: 'setMilliseconds',
    startOf: 'YYYY-MM-DD HH:mm:ss.000',
    endOf: 'YYYY-MM-DD HH:mm:ss.999',
  },
} as const
