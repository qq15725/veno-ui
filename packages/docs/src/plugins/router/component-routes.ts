// @ts-nocheck
import { camelize, capitalize } from 'vue'

const modules = import.meta.globEager('../../../../veno-ui/src/components/**/docs/index.md')

export default Object.keys(modules).map(path => {
  const name = path.match(/components\/ve-(.+)\/docs\/index\.md/)[1]

  const cameName = capitalize(camelize(name))

  return {
    name: `${ cameName }Component`,
    path: `/component/${ name }`,
    component: modules[path].default,
    meta: {
      name: cameName,
      title: modules[path].title,
    }
  }
})