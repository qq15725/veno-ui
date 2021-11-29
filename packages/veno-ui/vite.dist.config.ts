import { defineConfig, loadEnv } from 'vite'
import { terser } from 'rollup-plugin-terser'
import { promises } from 'fs'

export default defineConfig(async ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))
  const venoUiPackage = JSON.parse(await promises.readFile('./package.json', 'utf-8'))

  return {
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: false,
      minify: false,
      brotliSize: false,
      sourcemap: true,
      lib: {
        entry: 'src/entry.ts',
        name: 'VenoUi',
      },
      rollupOptions: {
        external: [
          'vue',
        ],
        output: [
          {
            format: 'es',
            entryFileNames: 'veno-ui.esm.js',
          },
          {
            format: 'umd',
            entryFileNames: 'veno-ui.js',
            globals: {
              vue: 'Vue',
            },
          },
          {
            format: 'umd',
            entryFileNames: 'veno-ui.min.js',
            globals: {
              vue: 'Vue',
            },
            plugins: [terser()],
          },
        ],
      },
    },
    define: {
      __VENO_UI_VERSION__: JSON.stringify(venoUiPackage.version)
    }
  }
})