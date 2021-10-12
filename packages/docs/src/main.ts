// Styles
import './styles/vars.css'
import './styles/code.css'

import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import * as plugins from './plugins'

// Components
import Demo from './components/Demo.vue'
import Include from './components/Include.vue'

const app = createApp(App)

app.component('Demo', Demo)
app.component('Include', Include)

for (const key in plugins) {
  app.use((plugins as Record<string, any>)[key])
}

app.mount('#app')