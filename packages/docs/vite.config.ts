import path from 'path'
import fs from 'fs'
import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDocs from '@veno-ui/vite-plugin-vue-docs'

const venoUiPackage = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

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
        { find: /^veno-ui$/, replacement: resolve('../veno-ui/src/entry.ts') },
        { find: /^@root\/(.*)/, replacement: resolve('../../$1') },
        { find: /^@\/(.*)/, replacement: resolve('./src/$1') },
      ]
    },
    build: {
      target: 'es2015',
    },
    plugins: [
      vue(),
      vueDocs(),
      vueJsx(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
    ],
    define: {
      __VENO_UI_VERSION__: JSON.stringify(venoUiPackage.version)
    }
  }
})
