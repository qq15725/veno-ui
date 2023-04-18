import pkg from '../package.json'

export default {
  assumptions: {
    noDocumentAll: true,
  },
  ignore: [/\.d\.ts$/],
  presets: [
    ['@babel/preset-env', {
      modules: false,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@vue/babel-plugin-jsx', { optimize: false, enableObjectSlots: false }],
    ['transform-define', {
      __UI_NAME__: JSON.stringify(pkg.name),
      __UI_VERSION__: JSON.stringify(pkg.version),
    }],
    ['babel-plugin-add-import-extension', { extension: 'mjs' }],
    ['./build/babel-plugin-replace-import-extension', {
      extMapping: {
        '.sass': '.css',
        '.scss': '.css',
      },
    }],
  ],
}
