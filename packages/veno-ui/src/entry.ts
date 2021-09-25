import './styles/main.scss'
import * as components from './components'
import * as directives from './directives'
import { createVenoUi as _createVenoUi } from './framework'
import type { VenoUiOptions } from './framework'

export const createVenoUi = (options: VenoUiOptions = {}) => {
  return _createVenoUi({ components, directives, ...options })
}

export {
  components,
  directives,
}

export * from './composables'