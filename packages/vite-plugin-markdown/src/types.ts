import type {
  Options as MarkdownOptions,
  Markdown,
  PluginSimple,
  PluginWithOptions,
} from '@veno-ui/markdown'
import type { FilterPattern } from '@rollup/pluginutils'

export interface Options
{
  /**
   * Remove custom SFC block
   *
   * @default ['route', 'i18n']
   */
  customSfcBlocks?: string[]

  /**
   * Options passed to Markdown It
   */
  markdownOptions?: MarkdownOptions

  /**
   * Plugins for Markdown It
   */
  markdownUses?: (PluginSimple | [PluginSimple | PluginWithOptions, any] | any)[]

  /**
   * A function providing the Markdown It instance gets the ability to apply custom settings/plugins
   */
  markdownSetup?: (markdown: Markdown) => void

  /**
   * Component name to wrapper with
   *
   * @default 'div'
   */
  wrapper?: string | boolean

  /**
   * Custom tranformations apply before and after the markdown transformation
   */
  transforms?: {
    before?: (code: string, id: string) => string
    after?: (code: string, id: string) => string
  }

  include?: FilterPattern
  exclude?: FilterPattern
}

export type MarkdownToVue = (raw: string, id: string) => string

export interface ResolvedOptions extends Required<Options>
{
  //
}