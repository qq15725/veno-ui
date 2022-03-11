// Utils
import { getComponentsApi } from './components'

// Types
import type { Options } from './types'

export const getCompleteApi = (options: Options) => {
  return [
    ...getComponentsApi(options),
    // ...getComposablesApi(),
    // ...getDirectivesApi(),
  ].sort((a, b) => a.name.localeCompare(b.name))
}