import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from '@veno-ui/vite-plugin-icons'
import { VenoUiResolver } from 'veno-ui'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons(),
    Components({
      dts: true,
      resolvers: [
        VenoUiResolver(),
      ]
    })
  ]
})
