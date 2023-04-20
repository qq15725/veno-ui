import fs from 'node:fs'
import path from 'node:path'
import { mkdirpSync } from 'mkdirp'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pluginEsbuild from 'rollup-plugin-esbuild'
import pluginDts from 'rollup-plugin-dts'
import pluginVueJsx from '@vitejs/plugin-vue-jsx'
import pluginSass from 'rollup-plugin-sass'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'postcss'

import type { OutputOptions, RollupOptions } from 'rollup'

function fixWindowsPath(path: string) {
  return path.replace(/^[^:]+:\\/, '\\').replaceAll('\\', '/')
}

export function createConfig(
  options: {
    cwd?: string
    input?: string
    output?: string
    banner?: string
    external?: string[]
    mjs?: boolean
    cjs?: boolean
    dts?: boolean
    sass?: boolean
    iife?: {
      name: string
      globals?: Record<string, string>
    }
    define?: Record<string, string>
  } = {},
): RollupOptions[] {
  const {
    cwd,
    input = 'src/index.ts',
    output = 'index',
    banner,
    external = [],
    cjs = true,
    mjs = true,
    dts = true,
    sass = false,
    iife,
    define,
  } = options

  return [
    (mjs || cjs || iife) && {
      input,
      output: [
        mjs && {
          file: `dist/${ output }.mjs`,
          format: 'es',
          sourcemap: true,
          banner,
        },
        cjs && {
          file: `dist/${ output }.cjs`,
          format: 'cjs',
          sourcemap: true,
          banner,
        },
        iife && {
          file: `dist/${ output }.iife.js`,
          format: 'iife',
          sourcemap: true,
          banner,
          name: iife.name,
          extend: true,
          globals: iife.globals,
        },
        iife && {
          file: `dist/${ output }.iife.min.js`,
          format: 'iife',
          sourcemap: true,
          banner,
          name: iife.name,
          extend: true,
          globals: iife.globals,
          plugins: [
            {
              name: 'esbuild-minifer',
              renderChunk: pluginEsbuild({ minify: true }).renderChunk,
            },
          ],
        },
      ].filter(Boolean) as OutputOptions[],
      plugins: [
        nodeResolve(),
        pluginVueJsx(),
        pluginEsbuild({
          define,
          pure: ['defineComponent'],
        }),
        sass && pluginSass({
          output: !cwd
            ? false
            : (styles, styleNodes) => {
                styles = styles.replaceAll('@charset "UTF-8";', '')

                mkdirpSync(path.join(cwd, 'dist'))

                Promise.all([
                  postcss([autoprefixer]).process(styles, { from: 'src' }),
                  postcss([autoprefixer, cssnano({
                    preset: 'default',
                  })]).process(styles, { from: 'src' }),
                ]).then(result => {
                  fs.writeFileSync(path.join(cwd, `dist/${ output }.css`), banner + result[0].css, 'utf8')
                  fs.writeFileSync(path.join(cwd, `dist/${ output }.min.css`), banner + result[1].css, 'utf8')
                })

                for (const { id, content } of styleNodes) {
                  if (!id || !content) continue
                  const out = path.parse(fixWindowsPath(id).replace(
                    path.join(cwd, 'src'),
                    path.join(cwd, 'lib'),
                  ))
                  mkdirpSync(out.dir)
                  fs.writeFileSync(
                    path.join(out.dir, `${ out.name }.css`),
                    content.replaceAll('@charset "UTF-8";', ''),
                    'utf8',
                  )
                }
              },
        }),
      ],
      external,
    },
    dts && {
      input,
      output: {
        file: `dist/${ output }.d.ts`,
        format: 'es',
      },
      plugins: [
        nodeResolve(),
        sass && {
          name: 'rollup-plugin-skip-sass',
          transform(code: string, id: string) {
            if (!/\.(scss)|(sass)$/.test(id)) return
            return 'export default ""'
          },
        },
        pluginDts(),
      ],
      external,
    },
  ].filter(Boolean) as RollupOptions[]
}
