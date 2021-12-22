// Types
import type { PluginSimple } from 'markdown-it/lib'

export const hrPlugin: PluginSimple = md => {
  md.renderer.rules.hr = () => '<ve-divider />'
}