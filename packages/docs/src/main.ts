// Utils
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createHead } from '@vueuse/head'

// Components
import App from './App.vue'

// Router
import { createRouterOptions } from '@/plugins/router'

const app = createApp(App)
const router = createRouter(createRouterOptions())
const head = createHead()

app
  .use(router)
  .use(head)

Object.values(import.meta.glob('./plugins/*.ts', { eager: true }))
  .forEach((i: any) => i.install?.({ app, router }))

app.mount('#app')
