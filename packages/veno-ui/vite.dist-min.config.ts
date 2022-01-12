import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { version } from './package.json'

export default defineConfig(async ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    css: { preprocessorOptions: { scss: { charset: false } } },
    build: {
      emptyOutDir: false,
      sourcemap: true,
      lib: {
        entry: 'src/entry.ts',
        name: 'VenoUi',
        formats: ['umd'],
        fileName: () => 'veno-ui.min.js'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          assetFileNames: 'veno-ui.min.css',
          globals: { vue: 'Vue' }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({ optimize: true, enableObjectSlots: true }),
    ],
    define: {
      __VENO_UI_VERSION__: JSON.stringify(version)
    }
  }
})