// Utils
import { isPackageExists } from 'local-pkg'

// ~veno-ui/icons
// ~veno-ui/icons/mdi/account-box
export const ICONS_ID = '~veno-ui/icons'
export const ICONS_RE = new RegExp(`^${ICONS_ID}\/`)
export const EXISTING_PKG = {
  '@iconify/json': isPackageExists('@iconify/json'),
}
export const DISABLE_COMMENT = '/* @veno-ui/vite-plugin-icons disabled */'