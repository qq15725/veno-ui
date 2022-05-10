// Utils
import { ViteSSG } from 'vite-ssg'

// Router
import App from './App.vue'
import { createRouterOptions } from '@/plugins/router'

// Components

export const createApp = ViteSSG(
  App,
  createRouterOptions(),
  ctx => {
    Object.values(import.meta.globEager('./plugins/*.ts'))
      .forEach(i => i.install?.(ctx))
  },
)
