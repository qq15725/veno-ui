// @ts-nocheck
import { camelize, capitalize } from 'vue'

const modules = import.meta.globEager(
  '../../../../veno-ui/src/components/**/docs/README.md'
)

export default Object.keys(modules).map(path => {
  const name = path.match(/components\/ve-(.+)\/docs\/README\.md/)[1]
  const cameName = capitalize(camelize(name))
  const pageData = modules[path].__pageData
  return {
    name: `${ cameName }Component`,
    path: `/component/${ name }.html`,
    component: modules[path].default,
    meta: {
      name: cameName,
      title: pageData.title.split(' ')[0],
      category: pageData.category,
    }
  }
})