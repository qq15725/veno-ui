// @ts-nocheck
import { camelize, capitalize } from 'vue'

const modules = import.meta.glob('../../../../veno-ui/src/components/**/docs/index.md')

export default Object.keys(modules).map(path => {
  let name = path.match(/components\/ve-(.+)\/docs\/index\.md/)[1]
  return {
    name: capitalize(camelize(name)),
    path: '/' + name,
    component: modules[path],
  }
})