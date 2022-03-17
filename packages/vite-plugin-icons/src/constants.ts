// Utils
import { isPackageExists } from 'local-pkg'

// ~veno-ui/icons
// ~veno-ui/icons/mdi/account-box
export const VIRTUAL_ID = '~veno-ui/icons'
export const VIRTUAL_ID_RE = /^~veno-ui\/icons(\/[\w-]+\/[\w-]+)?$/
export const EXISTING_PKG = {
  '@iconify/json': isPackageExists('@iconify/json'),
}
export const DISABLE_COMMENT = '/* @veno-ui/vite-plugin-icons disabled */'