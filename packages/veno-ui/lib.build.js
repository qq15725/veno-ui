const esbuild = require('esbuild')
const packageJson = require('./package.json')

require('esbuild-register')

esbuild.build(
  require('../../scripts/esbuild.config.ts').createConfig({
    tsconfig: './lib.tsconfig.json',
    inject: [
      './lib.shim.js',
    ],
    define: {
      __VENOUI_VERSION__: JSON.stringify(packageJson.version),
      __VENOUI_NAME__: JSON.stringify(packageJson.name),
    },
  }),
).then(() => {
  require('./lib.fix.ts')
}).catch((error) => {
  console.error(error)
  process.exit(1)
})

