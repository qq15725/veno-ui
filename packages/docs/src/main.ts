import { createApp } from 'vue'
import App from './App.vue'
import * as plugins from './plugins'
import VeDemoCard from './components/VeDemoCard.vue'

const app = createApp(App)

app.component('VeDemoCard', VeDemoCard)

for (const key in plugins) {
  app.use((plugins as Record<string, any>)[key])
}

app.mount('#app')