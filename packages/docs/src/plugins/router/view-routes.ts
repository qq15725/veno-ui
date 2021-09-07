// @ts-nocheck
import { camelize, capitalize } from 'vue'

const modules = import.meta.glob('../../views/**/*.vue')

const routes: any[] = []

for (const filepath in modules) {
  const component = modules[filepath]

  let path = filepath.match(/views\/(.+)\.vue/)[1]

  if (!path) {
    continue
  }

  routes.push({
    name: capitalize(camelize(path.replace('/', ''))),
    path: '/' + path
      .replace(/([a-z])([A-Z])/g, (_, a, b) => `${ a }_${ b.toLowerCase() }`)
      .toLowerCase(),
    component,
  })
}

export default routes