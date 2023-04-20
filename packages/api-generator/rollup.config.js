require('esbuild-register')

module.exports = require('../../scripts/rollup.config.ts').createConfig({
  external: [
    'ts-morph',
    'vue',
    '@veno-ui/utils',
    'veno-ui',
  ],
})
