// Utils
import { deepMerge, wrapInArray } from '@veno-ui/utils'
import { join, resolve } from 'path'

// Types
import type { Options, ResolvedOptions } from './types'

const DEFAULT_OPTIONS = {
  include: [/\.vue$/, /\.vue\?vue/, /.svg$/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  replaces: [
    { component: 'VeAlert', props: ['icon'] },
    { component: 'VeAvatar', props: ['icon'] },
    { component: 'VeButton', props: ['icon', 'prepend-icon', 'append-icon'] },
    { component: 'VeIcon', props: ['icon'] },
    { component: 'VeLink', props: ['icon', 'prepend-icon', 'append-icon'] },
    { component: 'VeListItem', props: ['prepend-icon', 'append-icon'] },
    { component: 'VeListGroup', props: ['collapse-icon', 'expand-icon'] },
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

function slash (str: string) {
  return str.replace(/\\/g, "/")
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
