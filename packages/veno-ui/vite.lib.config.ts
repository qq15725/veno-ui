import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { promises } from 'fs'
import path from 'path'
// @ts-ignore
import mkdirp from 'mkdirp'
import dts from 'vite-plugin-dts'
import { version } from './package.json'

export default defineConfig(async ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    build: {
      outDir: 'lib',
      minify: false,
      sourcemap: true,
      lib: {
        entry: 'src/entry.ts',
        name: 'VenoUi',
      },
      rollupOptions: {
        external: ['vue', /\.scss$/],
        output: [
          {
            format: 'es',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: 'src',
          }
        ]
      }
    },
    plugins: [
      vue(),
      vueJsx({ optimize: true, enableObjectSlots: true }),
      dts({
        include: 'src',
        staticImport: true,
        logDiagnostics: true,
        beforeWriteFile: (filePath: string, content: string) => {
          return {
            filePath: filePath.replace('lib/src', 'lib'),
            content
          }
        }
      }),
      {
        name: 'vite:scss-extract',
        apply: 'build',
        async buildEnd () {
          async function matchScss (dir: string, fn: (filename: string) => void) {
            const files = await promises.readdir(dir)
            files.forEach(filename => {
              filename = path.join(dir, filename)
              promises.stat(filename).then(stat => {
                if (stat.isDirectory()) {
                  matchScss(filename, fn)
                } else if (/\.scss$/.test(filename)) {
                  fn && fn(filename)
                }
              })
            })
          }

          matchScss('src', async filename => {
            const out = path.parse(filename.replace('src', 'lib'))
            mkdirp.sync(out.dir)
            promises.writeFile(
              path.join(out.dir, out.name + out.ext),
              await promises.readFile(filename, 'utf8'),
              'utf8'
            )
          })
        }
      },
    ],
    define: {
      __VENO_UI_VERSION__: JSON.stringify(version)
    }
  }
})