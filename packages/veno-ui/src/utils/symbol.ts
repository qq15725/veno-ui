import { UI_NAME } from './globals'

export function createSymbol(key: string) {
  return Symbol.for(`${ UI_NAME }:${ key }`)
}
