import path from 'path'
import fs from 'fs'
import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import markdown from '@veno-ui/vite-plugin-markdown'
import pages from 'vite-plugin-pages'
import { getCompleteApi } from '@veno-ui/api-generator'
import { createMarkdown } from '@veno-ui/markdown'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

function toPascalCase (string: string): string {
  return (
    string.trim()
      .replace(/^[a-z]/, (match: string) => match.toLocaleUpperCase())
      .replace(/-(\w)/g, (match: string, part1: string) => part1.toLocaleUpperCase())
  )
}

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  Object.assign(process.env, loadEnv(mode, root))
  const md = createMarkdown()
  const completedApi = getCompleteApi()

  return {
    base: './',
    server: {
      // open: true,
      host: '0.0.0.0',
    },
    resolve: {
      alias: [
        { find: /^veno-ui$/, replacement: resolve('../veno-ui/src/framework.ts') },
        { find: /^veno-ui\/styles$/, replacement: resolve('../veno-ui/src/styles/main.scss') },
        { find: /^veno-ui\/components$/, replacement: resolve('../veno-ui/src/components') },
        { find: /^@root\/(.*)/, replacement: resolve('../../$1') },
        { find: /^@\/(.*)/, replacement: resolve('./src/$1') },
      ]
    },
    build: {
      target: 'es2015',
    },
    css: { preprocessorOptions: { scss: { charset: false } } },
    plugins: [
      // https://github.com/hannoeru/vite-plugin-pages
      pages({
        extensions: ['vue', 'md'],
        pagesDir: [
          { dir: 'src/pages', baseRoute: '' },
          { dir: '../veno-ui/src', baseRoute: 'api' },
        ],
        extendRoute (route) {
          let file = route.component
          if (file.indexOf('/src/pages') === 0) file = path.join(root, file)
          md.render(fs.readFileSync(file, { encoding: 'utf-8' }), { root, file })
          const { frontmatter, ...restData } = md._context
          const { meta, ...restFrontmatter } = frontmatter || {}
          let routePath = route.path
          let routeMeta = {
            ...restData,
            ...restFrontmatter,
            ...Object(meta)
          }
          if (routePath.startsWith('/api')) {
            const matched = routePath.match(/\/(\w+)\/(\w+)\/docs\/(\w+)/)
            if (matched[3] === 'readme') {
              routePath = ['', matched[1], matched[2]].join('/')
              routeMeta.isNav = true
            } else {
              routePath = ['', matched[1], matched[2], matched[3]].join('/')
            }
          } else {
            routeMeta.isNav = true
          }
          return {
            ...route,
            name: routePath.substring(1).replace(/\//g, '-'),
            path: routePath,
            meta: routeMeta
          }
        }
      }),
      vue(),
      markdown({
        transforms: {
          before: (code, id) => {
            return code
              .replace(/<<<API (.+)/g, (_, name) => {
                const component = completedApi.find(v => v.name === name)
                if (!component) return ''
                name = toPascalCase(name)
                let str = ''
                if (component.props.length) {
                  const props = component.props.map((prop: any) => {
                    return {
                      name: prop.name,
                      type: typeof prop.type === 'object'
                        ? prop.type.join(' | ')
                        : prop.type,
                      default: JSON.stringify(prop.default)
                    }
                  })
                  const headersProp = JSON.stringify([
                    { text: '名称', value: 'name' },
                    { text: '类型', value: 'type' },
                    { text: '默认值', value: 'default' }
                  ])
                  const itemsProp = JSON.stringify(props).replace(/'/g, '')
                  str += `### ${ name } Props\n<ve-table :headers='${ headersProp }' :items='${ itemsProp }'/>\n`
                }
                if (component.events.length) {
                  const headersProp = JSON.stringify([
                    { text: '名称', value: 'name' },
                  ])
                  const itemsProp = JSON.stringify(component.events)
                  str += `### ${ name } Events\n<ve-table :headers='${ headersProp }' :items='${ itemsProp }'/>\n`
                }
                return str
              })
          }
        }
      }),
      vueJsx({ optimize: true, enableObjectSlots: true }),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
    ],
    define: {
      __VENO_UI_VERSION__: JSON.stringify(
        JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version
      )
    }
  }
})
