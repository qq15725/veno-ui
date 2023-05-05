// Types
import type { InstallPlugin } from '../types'

export const install: InstallPlugin = ({ router }) => {
  router.isReady()
    .then(async () => {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({ immediate: true })
    })
    .catch(() => {})
}
