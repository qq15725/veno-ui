// Utils
import { ViteSSG } from 'vite-ssg'

// Router
import { createRouterOptions } from '@/plugins/router'

// Components
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  createRouterOptions(),
  ctx => {
    Object.values(import.meta.globEager('./plugins/*.ts'))
      .forEach(i => i.install?.(ctx))
  }
)