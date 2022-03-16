import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import 'veno-ui/styles'
import { createVeno } from 'veno-ui'
import aliases from '~veno-ui/icons'

createApp(App).use(createVeno({
  icons: {
    aliases: Object.assign({
      abacus: defineAsyncComponent(() => import('~veno-ui/icons/mdi/abacus'))
    }, aliases),
  },
})).mount('#app')
