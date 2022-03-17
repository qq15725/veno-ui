// Utils
import { deepMerge, wrapInArray } from '@veno-ui/utils'
import { slash } from './utils'
import { join, resolve } from 'path'

// Types
import type { Options, ResolvedOptions } from './types'

const DEFAULT_OPTIONS = {
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  replaces: [
    { component: 'VeAlert', props: ['icon', 'closeIcon'] },
    { component: 'VeAvatar', props: ['icon'] },
    { component: 'VeBadge', props: ['icon'] },
    { component: 'VeButton', props: ['icon', 'prependIcon', 'appendIcon'] },
    { component: 'VeIcon', props: ['icon'] },
    { component: 'VeLink', props: ['icon', 'prependIcon', 'appendIcon'] },
    { component: 'VeListItem', props: ['prependIcon', 'appendIcon'] },
    { component: 'VeListGroup', props: ['collapseIcon', 'expandIcon'] },
    { component: 'VeFormControl', props: ['appendIcon'] },
    { component: 'VeInput', props: ['appendIcon', 'appendInnerIcon', 'clearIcon', 'prependInnerIcon', 'prefixIcon', 'suffixIcon'] },
    { component: 'VeSelect', props: ['appendIcon', 'appendInnerIcon', 'clearIcon', 'prependInnerIcon', 'prefixIcon', 'suffixIcon'] },
    { component: 'VeDatePicker', props: ['appendIcon', 'appendInnerIcon', 'clearIcon', 'prependInnerIcon', 'prefixIcon', 'suffixIcon'] },
  ],
  dirs: 'src/icons',
  extensions: ['svg'],
  svgoOptions: {
    plugins: [
      'preset-default',
      'removeViewBox',
      'removeDimensions',
    ]
  },
}

export function resolveOptions (userOptions: Options, root: string) {
  const resolved = deepMerge(DEFAULT_OPTIONS, userOptions) as ResolvedOptions

  resolved.root = root

  const extensions = wrapInArray(resolved.extensions || [])
  const extsGlob = extensions.length === 1 ? extensions : `{${ extensions.join(',') }}`

  resolved.resolvedDirs = wrapInArray(resolved.dirs || [])
    .map(dir => slash(resolve(root, dir)))

  resolved.globs = resolved.resolvedDirs.map(
    i => resolved.deep
      ? slash(join(i, `**/*.${ extsGlob }`))
      : slash(join(i, `*.${ extsGlob }`))
  )

  return resolved
}
