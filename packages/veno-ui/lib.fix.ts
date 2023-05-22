import path from 'node:path'
import fs from 'node:fs'
import { globSync } from 'glob'
import { mkdirpSync } from 'mkdirp'

globSync(['lib/**/*.js', 'lib/**/*.d.ts']).forEach(file => {
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

globSync(['src/**/*.scss']).forEach(file => {
  const dist = file.replace('src/', 'lib/')
  mkdirpSync(path.dirname(dist))
  fs.copyFileSync(file, dist)
})
