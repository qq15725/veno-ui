require('esbuild-register')

const packageJson = require('./package.json')

module.exports = require('../../scripts/rollup.lib.config.ts').createConfig({
  base: process.cwd(),
  output: packageJson.name,
  banner: `/*!
* veno-ui • v${ packageJson.version }
* MIT License
* ${ packageJson.homepage }
*/\n`,
  external: [
    // 'vue',
    // '@veno-ui/utils',
    // 'vue-router',
  ],
  define: {
    __VENOUI_VERSION__: JSON.stringify(packageJson.version),
    __VENOUI_NAME__: JSON.stringify(packageJson.name),
  },
})
