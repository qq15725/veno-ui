import esbuild from 'rollup-plugin-esbuild'
import pluginDts from 'rollup-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { OutputOptions, RollupOptions } from 'rollup'

export function createConfig(
  options: {
    input?: string
    output?: string
    banner?: string
    external?: string[]
    mjs?: boolean
    cjs?: boolean
    dts?: boolean
    iife?: {
      name: string
      globals?: Record<string, string>
    }
    define?: Record<string, string>
  } = {},
): RollupOptions[] {
  const {
    input = 'src/index.ts',
    output = 'index',
    banner,
    external = [],
    cjs = true,
    mjs = true,
    dts = true,
    iife,
    define,
  } = options

  const pluginEsbuild = esbuild({
    define,
    pure: ['defineComponent'],
  })

  return [
    (mjs || cjs || iife) && {
      input,
      output: [
        mjs && {
          file: `dist/${ output }.mjs`,
          format: 'es',
          banner,
        },
        cjs && {
          file: `dist/${ output }.cjs`,
          format: 'cjs',
          banner,
        },
        iife && {
          file: `dist/${ output }.iife.js`,
          format: 'iife',
          banner,
          name: iife.name,
          extend: true,
          globals: iife.globals,
        },
        iife && {
          file: `dist/${ output }.iife.min.js`,
          format: 'iife',
          banner,
          name: iife.name,
          extend: true,
          globals: iife.globals,
          plugins: [
            {
              name: 'esbuild-minifer',
              renderChunk: esbuild({ minify: true }).renderChunk,
            },
          ],
        },
      ].filter(Boolean) as OutputOptions[],
      plugins: [
        vueJsx(),
        pluginEsbuild,
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
        pluginDts(),
      ],
      external,
    },
  ].filter(Boolean) as RollupOptions[]
}
