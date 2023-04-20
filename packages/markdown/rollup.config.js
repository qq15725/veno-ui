require('esbuild-register')

module.exports = require('../../scripts/rollup.config.ts').createConfig({
  external: [
    '@veno-ui/utils',
    'markdown-it',
    'gray-matter',
    'markdown-it-anchor',
    'markdown-it-emoji/lib/data/full.json',
    'diacritics',
    'markdown-it/lib/common/html_blocks',
    'markdown-it/lib/common/html_re',
    'markdown-it/lib/token',
    'markdown-it-container',
  ],
})
