import type { FilterPattern } from '@veno-ui/utils'
import type { OptimizeOptions } from 'svgo'

export interface Options
{
  /**
   * @zh 引入文件的过滤模式
   * @en RegExp or glob to match files to be transformed
   *
   * @default [/\.vue$/, /\.vue\?vue/, /.svg$/]
   */
  include?: FilterPattern

  /**
   * @zh 排除文件的过滤模式
   * @en RegExp or glob to match files to NOT be transformed
   *
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * @zh 识别传入组件的属性值替换成图标组件
   */
  replaces?: { component: string, props: string[] }[],

  /**
   * @zh 用于搜索图标的相对目录路径
   * @en Relative paths to the directory to search for icons
   *
   * @default 'src/icons'
   */
  dirs?: string | string[]

  /**
   * @zh 图标的有效文件扩展名
   * @en Valid file extensions for icons
   *
   * @default ['svg']
   */
  extensions?: string | string[]

  /**
   * @zh 搜索子目录
   * @en Search for subdirectories
   *
   * @default true
   */
  deep?: boolean

  /**
   * @zh 传递给 svgo 的选项
   * @en Options passed to Svgo
   *
   * @default { plugins: ['preset-default', 'removeViewBox', 'removeDimensions'] }
   */
  svgoOptions?: OptimizeOptions
}

export interface ResolvedOptions extends Required<Options>
{
  root: string
  resolvedDirs: string[]
  globs: string[]
}

export interface ResolverOptions
{
  /**
   * Prefix for resolving components name.
   * Set '' to disable prefix.
   *
   * @default 've-icon'
   */
  prefix?: string | false

  /**
   * Icon collections aliases.
   *
   * The `aliases` keys are the `alias` and the values are the `name` for the collection.
   *
   * Instead using `<i-icon-park-abnormal />` we can use `<i-park-abnormal />` configuring:
   * `aliases: { park: 'icon-park' }`
   */
  aliases?: Record<string, string>

  /**
   * Extension for the resolved id
   * Set `jsx` for JSX components
   *
   * @default ''
   */
  extension?: string
}