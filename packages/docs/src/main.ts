// Utils
import { createApp } from 'vue'
import { createRouter } from 'vue-router'

// Components
import App from './App.vue'

// Router
import { createRouterOptions } from '@/plugins/router'

const router = createRouter(createRouterOptions())
const app = createApp(App).use(router)

Object.values(import.meta.glob('./plugins/*.ts', { eager: true }))
  .forEach((i: any) => i.install?.({ app, router }))

app.mount('#app')
