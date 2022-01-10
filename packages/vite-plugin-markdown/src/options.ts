// Types
import type { Options, ResolvedOptions } from './types'

export function resolveOptions(userOptions?: Options): ResolvedOptions {
  return Object.assign({
    customSfcBlocks: ['route', 'i18n'],
    markdownOptions: {},
    markdownUses: [],
    markdownSetup: () => {},
    wrapper: 'div',
    transforms: {},
  }, userOptions || {}) as ResolvedOptions
}