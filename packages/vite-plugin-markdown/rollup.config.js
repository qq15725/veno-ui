require('esbuild-register')

module.exports = require('../../scripts/rollup.config.ts').createConfig({
  external: [
    'vite',
    '@veno-ui/markdown',
    '@veno-ui/utils',
    'local-pkg',
  ],
})
