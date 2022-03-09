import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { version } from './package.json'

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    css: { preprocessorOptions: { scss: { charset: false } } },
    build: {
      emptyOutDir: false,
      minify: false,
      sourcemap: true,
      lib: {
        entry: 'src/entry.ts',
        name: 'VenoUi',
      },
      rollupOptions: {
        external: ['vue'],
        output: [
          {
            assetFileNames: 'veno-ui.css',
          },
          {
            format: 'es',
            entryFileNames: 'veno-ui.es.js',
          },
          {
            format: 'umd',
            entryFileNames: 'veno-ui.js',
            globals: { vue: 'Vue' },
          },
        ],
      },
    },
    plugins: [
      vue(),
      vueJsx({ optimize: false, enableObjectSlots: true }),
    ],
    define: {
      __VENO_UI_VERSION__: JSON.stringify(version)
    }
  }
})