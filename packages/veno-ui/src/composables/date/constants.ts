// Constants
export const MAP = {
  year: {
    alias: 'Y',
    get: 'getFullYear',
    set: 'setFullYear',
    startOf: 'YYYY-01-01T00:00:00', // TODO
    endOf: 'YYYY-12-$1T23:59:59.999'
  },
  month: {
    alias: 'M',
    get: 'getMonth',
    set: 'setMonth',
    startOf: 'YYYY-MM-01T00:00:00',
    endOf: 'YYYY-MM-31T23:59:59.999'
  },
  day: {
    alias: 'D',
    get: 'getDate',
    set: 'setDate',
    startOf: 'YYYY-MM-DDT00:00:00',
    endOf: 'YYYY-MM-DDT23:59:59.999'
  },
  hour: {
    alias: 'H',
    get: 'getHours',
    set: 'setHours',
    startOf: 'YYYY-MM-DDTHH:00:00',
    endOf: 'YYYY-MM-DDTHH:59:59.999'
  },
  minute: {
    alias: 'm',
    get: 'getMinutes',
    set: 'setMinutes',
    startOf: 'YYYY-MM-DDTHH:mm:00',
    endOf: 'YYYY-MM-DDTHH:mm:59.999'
  },
  second: {
    alias: 's',
    get: 'getSeconds',
    set: 'setSeconds',
    startOf: 'YYYY-MM-DDTHH:mm:ss.000',
    endOf: 'YYYY-MM-DDTHH:mm:ss.999'
  },
  millisecond: {
    alias: 'ms',
    get: 'getMilliseconds',
    set: 'setMilliseconds',
    startOf: 'YYYY-MM-DDTHH:mm:ss.000',
    endOf: 'YYYY-MM-DDTHH:mm:ss.999'
  },
} as const