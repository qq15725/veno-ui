require('esbuild-register')

module.exports = require('../../scripts/rollup.config.ts').createConfig({
  iife: {
    name: 'VUtils',
    globals: {
      vue: 'Vue',
    },
  },
  external: [
    'vue',
  ],
})
