// Types
import type { Options, ResolvedOptions } from './types'

const DEFAULT_OPTIONS = {
  root: null,
  include: /\.md$/,
  customSfcBlocks: ['route', 'i18n'],
  markdownOptions: {},
  markdownUses: [],
  markdownSetup: () => {},
  wrapper: 'div',
  transforms: {},
}

export function resolveOptions(userOptions?: Options): ResolvedOptions {
  return Object.assign(DEFAULT_OPTIONS, userOptions || {}) as ResolvedOptions
}
