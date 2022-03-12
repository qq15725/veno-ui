import type { FilterPattern } from '@rollup/pluginutils'
import type { OptimizeOptions } from 'svgo'

export interface Options
{
  /**
   * @zh 传递给 svgo 的选项
   * @en Options passed to Svgo
   * @default
   *   {
   *      plugins: [
   *        'preset-default',
   *        'removeViewBox',
   *        'removeDimensions',
   *      ]
   *   }
   */
  svgoOptions?: OptimizeOptions

  /**
   * @zh 引入文件的过滤模式
   */
  include?: FilterPattern

  /**
   * @zh 排除文件的过滤模式
   */
  exclude?: FilterPattern
}

export interface ResolvedOptions extends Required<Options> {}