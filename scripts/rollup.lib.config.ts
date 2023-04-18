import fs from 'node:fs'
import path from 'node:path'
import { globSync } from 'glob'
import { mkdirpSync } from 'mkdirp'
import sass from 'rollup-plugin-sass'
import esbuild from 'rollup-plugin-esbuild'
import vueJsx from '@vitejs/plugin-vue-jsx'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'postcss'
import type { RollupOptions } from 'rollup'

function fixWindowsPath(path: string) {
  return path.replace(/^[^:]+:\\/, '\\').replaceAll('\\', '/')
}

export function createConfig(
  options: {
    base: string
    output?: string
    banner?: string
    external?: string[]
    define?: Record<string, string>
  },
) {
  const {
    base,
    output = 'index',
    banner = '',
    external,
    define,
  } = options

  const pluginEsbuild = esbuild({
    define,
    pure: ['defineComponent'],
    legalComments: 'inline',
    treeShaking: true,
  })

  const input = Object.fromEntries(
    globSync('src/**/*.ts').map(file => [
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length),
      ),
      path.join(base, file),
    ]),
  )

  return [
    {
      input,
      output: {
        preserveModules: true,
        format: 'es',
        dir: 'lib',
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name].mjs',
        sourcemap: true,
      },
      external,
      plugins: [
        sass({
          output(styles, styleNodes) {
            mkdirpSync(path.join(base, 'dist'))

            Promise.all([
              postcss([autoprefixer]).process(styles, { from: 'src' }),
              postcss([autoprefixer, cssnano({
                preset: 'default',
              })]).process(styles, { from: 'src' }),
            ]).then(result => {
              fs.writeFileSync(path.join(base, `dist/${ output }.css`), banner + result[0].css, 'utf8')
              fs.writeFileSync(path.join(base, `dist/${ output }.min.css`), banner + result[1].css, 'utf8')
            })

            for (const { id, content } of styleNodes) {
              if (!id || !content) continue
              const out = path.parse(fixWindowsPath(id).replace(
                path.join(base, 'src'),
                path.join(base, 'lib'),
              ))
              mkdirpSync(out.dir)
              fs.writeFileSync(path.join(out.dir, `${ out.name }.css`), content, 'utf8')
            }
          },
        }),
        vueJsx(),
        pluginEsbuild,
      ],
    },
  ] as RollupOptions[]
}

