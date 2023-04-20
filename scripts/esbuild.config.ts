import path from 'node:path'
import fs from 'node:fs'
import { globSync } from 'glob'
import { transform } from '@babel/core'
import vue3Jsx from '@vue/babel-plugin-jsx'
// @ts-expect-error type
import TS from '@babel/plugin-syntax-typescript'
// @ts-expect-error type
import convert from 'convert-source-map'

import type { BuildOptions } from 'esbuild'

export function createConfig(
  options: {
    tsconfig?: string
    define?: Record<string, string>
  },
): BuildOptions {
  const {
    tsconfig,
    define,
  } = options

  return {
    entryPoints: Object.fromEntries(
      globSync(['src/**/*.ts', 'src/**/*.tsx'])
        .filter(file => !file.endsWith('.d.ts'))
        .map(file => [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length),
          ),
          file,
        ]),
    ),
    target: 'esnext',
    outdir: 'lib',
    outExtension: {
      '.js': '.mjs',
    },
    format: 'esm',
    treeShaking: false,
    sourcemap: true,
    tsconfig,
    logLevel: 'debug',
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx',
    },
    plugins: [
      {
        name: 'vue-jsx',
        setup(build) {
          build.onLoad({ filter: /\.[jt]sx$/ }, ({ path }) => {
            const code = fs.readFileSync(path, 'utf-8')

            const result = transform(code, {
              babelrc: false,
              configFile: false,
              plugins: [
                [vue3Jsx],
                [TS, { isTSX: true }],
              ],
              sourceMaps: true,
              sourceFileName: path,
            })

            if (!result) return

            return {
              contents: result.code + convert.fromObject(result.map).toComment(),
              loader: 'ts',
            }
          })
        },
      },
    ],
    define,
  }
}
