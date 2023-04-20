require('esbuild-register')

module.exports = require('../../scripts/rollup.config.ts').createConfig({
  external: [
    'vite',
    '@veno-ui/utils',
    'veno-ui',
  ],
})
