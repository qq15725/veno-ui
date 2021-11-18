import { createApp } from 'vue'

// Plugins
import * as plugins from './plugins'

// Components
import App from './App.vue'
import Demo from './components/Demo.vue'

const app = createApp(App)

app.component('Demo', Demo)

for (const key in plugins) {
  app.use((plugins as Record<string, any>)[key])
}

app.mount('#app')