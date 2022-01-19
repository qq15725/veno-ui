// Utils
import path from 'path'
import fs from 'fs'
import { defineConfig, loadEnv } from 'vite'
import { getCompleteApi } from '@veno-ui/api-generator'
import { createMarkdown } from '@veno-ui/markdown'

// Plugins
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Legacy from '@vitejs/plugin-legacy'
import Pages from 'vite-plugin-pages'
import Markdown from '@veno-ui/vite-plugin-markdown'
import Components from 'unplugin-vue-components/vite'
// @ts-ignore
import { VitePWA } from 'vite-plugin-pwa'

// Types
import type { ComponentResolver } from 'unplugin-vue-components'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

function toPascalCase (string: string): string {
  return (
    string.trim()
      .replace(/^[a-z]/, (match: string) => match.toLocaleUpperCase())
      .replace(/-(\w)/g, (match: string, part1: string) => part1.toLocaleUpperCase())
  )
}

function VenoUiResolver (): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (!name.match(/^Ve[A-Z]/)) return
      return {
        importName: name.replace('Ve', ''),
        path: 'veno-ui/components'
      }
    }
  }
}

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  Object.assign(process.env, loadEnv(mode, root))
  const md = createMarkdown()
  const completedApi = getCompleteApi()

  return {
    base: './',
    server: {
      host: '0.0.0.0',
    },
    resolve: {
      alias: [
        { find: /^@root\/(.*)/, replacement: resolve('../../$1') },
        { find: /^@\/(.*)/, replacement: resolve('./src/$1') },
        ...(
          mode === 'development'
            ? [
              { find: /^veno-ui$/, replacement: resolve('../veno-ui/src/framework.ts') },
              { find: /^veno-ui\/styles$/, replacement: resolve('../veno-ui/src/styles/main.scss') },
              { find: /^veno-ui\/components$/, replacement: resolve('../veno-ui/src/components') },
            ]
            : []
        ),
      ]
    },
    build: {
      target: 'es2015',
    },
    css: { preprocessorOptions: { scss: { charset: false } } },
    plugins: [
      Vue(),
      VueJsx(),
      Legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
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

      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-markdown
      Markdown({
        transforms: {
          before: (code) => {
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
                      source: prop.source,
                      type: typeof prop.type === 'object'
                        ? prop.type.join(' | ')
                        : prop.type,
                      default: JSON.stringify(prop.default)
                    }
                  })
                  const headersProp = JSON.stringify([
                    { text: '属性名', value: 'name', minWidth: '120', },
                    { text: '类型', value: 'type', minWidth: '120', },
                    { text: '默认值', value: 'default', minWidth: '200', },
                    { text: '组合', value: 'source', minWidth: '120', }
                  ])
                  const itemsProp = JSON.stringify(props).replace(/'/g, '')
                  str += `### ${ name } Props\n<ve-table per-page="999" :pagination="false" :headers='${ headersProp }' :items='${ itemsProp }'/>\n`
                }
                if (component.events.length) {
                  const headersProp = JSON.stringify([
                    { text: '事件名', value: 'name' },
                  ])
                  const itemsProp = JSON.stringify(component.events)
                  str += `### ${ name } Events\n<ve-table per-page="999" :pagination="false" :headers='${ headersProp }' :items='${ itemsProp }'/>\n`
                }
                return str
              })
          }
        }
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          VenoUiResolver(),
        ]
      }),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        includeAssets: ['favicon.ico', 'robots.txt'],
        manifest: {
          name: 'Veno UI',
          short_name: 'Veno UI',
          description: 'A Vue 3 UI Library. Uses Composable. Uses TypeScript.',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            }
          ]
        }
      }),
    ],
    define: {
      __VENO_UI_VERSION__: JSON.stringify(
        JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version
      )
    }
  }
})
