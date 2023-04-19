import fs from 'node:fs'
import { globSync } from 'glob'

globSync(['lib/**/*.mjs', 'lib/**/*.d.ts']).forEach(file => {
  const code = fs.readFileSync(file, 'utf-8')

  fs.writeFileSync(
    file,
    code.replace(
      /import ['"].+?\.scss['"];?\n?/,
      file.endsWith('.d.ts')
        ? () => ''
        : v => v.replace('.scss', '.css'),
    ),
    'utf-8',
  )
})
