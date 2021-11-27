import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDocs from '@veno-ui/vite-plugin-vue-docs'

const resolve = (file: string) => path.resolve(__dirname, file)

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    base: './',
    server: {
      // open: true,
      host: '0.0.0.0',
    },
    resolve: {
      alias: [
        {
          find: /^@\/(.*)/,
          replacement: resolve('./src/$1')
        },
      ]
    },
    build: {
      target: 'es2015',
    },
    plugins: [
      vueDocs(),
      vue(),
      vueJsx(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
    ]
  }
})
