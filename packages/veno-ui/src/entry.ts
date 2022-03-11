import './styles/main.scss'
import * as components from './components'
import * as directives from './directives'
import * as providers from './providers'
import * as utils from './utils'
import { createVeno as _createVeno } from './framework'
import type { VenoOptions } from './framework'

export const createVeno = (options: VenoOptions = {}) => {
  return _createVeno({ components, directives, providers, ...options })
}

export {
  components,
  directives,
  providers,
  utils
}

export * from './composables'