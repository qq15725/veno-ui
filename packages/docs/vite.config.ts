import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig, loadEnv } from 'vite'
import docs from './vite-plugin-docs'

const resolve = (file: string) => path.resolve(__dirname, file)

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    resolve: {
      alias: [
        {
          find: /^@\/(.*)/,
          replacement: resolve('./src/$1')
        }
      ],
    },
    build: {
      target: 'chrome58',
    },
    plugins: [
      docs(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      vueJsx({ optimize: true, enableObjectSlots: false }),
    ]
  }
})
