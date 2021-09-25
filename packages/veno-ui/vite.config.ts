import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/entry.ts'),
        name: 'VenoUi',
        fileName: (format) => `veno-ui.${ format }.js`
      },
      rollupOptions: {
        external: ['vue', 'vue-router'],
        output: {
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
          }
        }
      },
    },
    plugins: [
      vue(),
      vueJsx({ optimize: true, enableObjectSlots: false }),
      dts({
        insertTypesEntry: true,
        staticImport: true,
      }),
    ]
  }
})
