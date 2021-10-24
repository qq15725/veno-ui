// @ts-nocheck
import { camelize, capitalize } from 'vue'

const modules = import.meta.globEager(
  '../../../../veno-ui/src/composables/**/docs/README.md'
)

export default Object.keys(modules).map(path => {
  const name = path.match(/composables\/(.+)\/docs\/README\.md/)[1]

  const cameName = capitalize(camelize(name))

  return {
    name: `${ cameName }Composable`,
    path: `/composable/${ name }.html`,
    component: modules[path].default,
    meta: {
      name: cameName,
      title: modules[path].__pageData.title.split(' ')[0],
    }
  }
})