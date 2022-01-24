// Utils
import { createApp } from 'vue'

// Components
import App from './App.vue'

const app = createApp(App)

Object.values(import.meta.globEager('./plugins/*.ts'))
  .forEach(i => i.install?.(app))

app.mount('#app')