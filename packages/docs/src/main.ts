// Utils
import { ViteSSG } from 'vite-ssg'

// Components
import App from './App.vue'

// Router
import { createRouterOptions } from '@/plugins/router'

export const createApp = ViteSSG(
  App,
  createRouterOptions(),
  ctx => {
    Object.values(import.meta.glob('./plugins/*.ts', { eager: true }))
      .forEach((i: any) => i.install?.(ctx))
  },
)
