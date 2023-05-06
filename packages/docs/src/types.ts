import type { Router } from 'vue-router'
import type { App } from 'vue'

interface InstallPluginContext {
  app: App
  router: Router
}

export type InstallPlugin = (ctx: InstallPluginContext) => void
