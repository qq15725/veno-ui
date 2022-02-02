import './styles/main.scss'
import * as components from './components'
import * as directives from './directives'
import { createVeno as _createVeno } from './framework'
import type { VenoOptions } from './framework'

export const createVeno = (options: VenoOptions = {}) => {
  return _createVeno({ components, directives, ...options })
}

export { components, directives }

export * from './composables'