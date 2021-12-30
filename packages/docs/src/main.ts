// Utils
import { createApp } from 'vue'

// Plugins
import {
  useGlobalComponents,
  useRouter,
  useVenoUi,
  usePinia
} from './plugins'

// Components
import App from './App.vue'

const app = createApp(App)

useGlobalComponents(app)
useRouter(app)
useVenoUi(app)
usePinia(app)

app.mount('#app')