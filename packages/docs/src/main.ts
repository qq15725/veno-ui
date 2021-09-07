import { createApp } from 'vue'
import App from './App.vue'
import * as plugins from './plugins'

const app = createApp(App)

for (const key in plugins) {
  app.use((plugins as Record<string, any>)[key])
}

app.mount('#app')