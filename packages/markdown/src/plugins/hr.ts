// Types
import type { PluginSimple } from '../types'

export const hrPlugin: PluginSimple = md => {
  md.renderer.rules.hr = () => '<ve-divider />'
}
