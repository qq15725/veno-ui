import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig, loadEnv } from 'vite'

const resolve = file => path.resolve(__dirname, file)

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    resolve: {
      alias: [
        { find: /^@\/(.*)/, replacement: resolve('./src/$1') }
      ],
    },
    build: {
      target: 'chrome58',
    },
    plugins: [
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      vue(),
      vueJsx({ optimize: true, enableObjectSlots: false }),
    ]
  }
})
