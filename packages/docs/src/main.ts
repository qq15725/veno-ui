import { createApp } from 'vue'

// Plugins
import * as plugins from './plugins'

// Components
import App from './App.vue'
import components from './components'

const app = createApp(App)

for (const key in components) {
  app.component(key, components[key])
}

for (const key in plugins) {
  app.use((plugins as Record<string, any>)[key])
}

app.mount('#app')