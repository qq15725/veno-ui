require('esbuild-register')

const packageJson = require('./package.json')

module.exports = require('../../scripts/rollup.config.ts').createConfig({
  cwd: process.cwd(),
  output: packageJson.name,
  banner: `/*!
* ${ packageJson.name } • v${ packageJson.version }
* MIT License
* ${ packageJson.homepage }
*/\n`,
  external: [
    'vue',
  ],
  iife: {
    name: 'VenoUi',
    globals: {
      vue: 'Vue',
    },
  },
  sass: true,
  define: {
    __VENOUI_VERSION__: JSON.stringify(packageJson.version),
    __VENOUI_NAME__: JSON.stringify(packageJson.name),
  },
})
