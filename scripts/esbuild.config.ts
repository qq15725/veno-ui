import path from 'node:path'
import { globSync } from 'glob'

import type { BuildOptions } from 'esbuild'

export function createConfig(
  options: {
    tsconfig?: string
    inject?: string[]
    define?: Record<string, string>
  },
): BuildOptions {
  const {
    tsconfig,
    inject,
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
    inject,
    define,
  }
}
