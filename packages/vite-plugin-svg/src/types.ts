import type { FilterPattern } from '@rollup/pluginutils'
import type { OptimizeOptions } from 'svgo'

export interface Options
{
  // Options passed to Svgo
  svgoOptions?: OptimizeOptions

  include?: FilterPattern
  exclude?: FilterPattern
}

export interface ResolvedOptions extends Required<Options>
{
  //
}
