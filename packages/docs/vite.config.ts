// Utils
import path from 'path'
import fs from 'fs'
import { defineConfig, loadEnv } from 'vite'
import { getCompleteApi } from '@veno-ui/api-generator'
import { createMarkdown } from '@veno-ui/markdown'
import { toPascalCase } from '@veno-ui/utils'

// Plugins
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import Markdown from '@veno-ui/vite-plugin-markdown'
import Icons from '@veno-ui/vite-plugin-icons'
// @ts-ignore
import { VitePWA } from 'vite-plugin-pwa'
import pkg from 'veno-ui/package.json'
import { VenoUiResolver } from 'veno-ui'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  Object.assign(process.env, loadEnv(mode, root))
  const md = createMarkdown()
  const completedApi = getCompleteApi({
    fileGlobs: resolve('../veno-ui/src/**/*{.ts,.tsx}')
  })

  return {
    resolve: {
      alias: [
        { find: '@root', replacement: resolve('../..') },
        { find: '@', replacement: resolve('./src') },
      ].concat(
        mode === 'development'
          ? [
            { find: 'veno-ui/lib/iconsets/mdi', replacement: resolve('../veno-ui/lib/iconsets/mdi.mjs') },
            { find: 'veno-ui/components', replacement: resolve('../veno-ui/src/components') },
            { find: 'veno-ui/directives', replacement: resolve('../veno-ui/src/directives') },
            { find: 'veno-ui/providers', replacement: resolve('../veno-ui/src/providers') },
            { find: 'veno-ui/styles', replacement: resolve('../veno-ui/src/styles/main.scss') },
            { find: 'veno-ui', replacement: resolve('../veno-ui/src/framework.ts') },
          ]
          : [
            { find: 'veno-ui/lib/iconsets/mdi', replacement: resolve('../veno-ui/lib/iconsets/mdi.mjs') },
            { find: 'veno-ui/components', replacement: resolve('../veno-ui/lib/components/index.mjs') },
            { find: 'veno-ui/directives', replacement: resolve('../veno-ui/lib/directives/index.mjs') },
            { find: 'veno-ui/providers', replacement: resolve('../veno-ui/lib/providers/index.mjs') },
            { find: 'veno-ui/styles', replacement: resolve('../veno-ui/lib/styles/main.scss') },
            { find: 'veno-ui', replacement: resolve('../veno-ui/lib/framework.mjs') },
          ]
      )
    },
    css: { preprocessorOptions: { scss: { charset: false } } },
    plugins: [
      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-markdown
      Markdown({
        transforms: {
          before: (code) => {
            return code
              .replace(/<<<API (.+)/g, (_, name) => {
                const component = completedApi.find(v => v.name === name)
                if (!component) return ''
                name = toPascalCase(name.trim())
                let str = ''
                if (component.props.length) {
                  const props = component.props.map((prop: any) => {
                    return {
                      name: prop.name,
                      source: prop.source,
                      type: typeof prop.type === 'object'
                        ? prop.type.join(' | ')
                        : prop.type,
                      default: JSON.stringify(prop.default, null, 2),
                      description: prop.descriptions.find((v: any) => v.language === 'zh')?.description
                    }
                  })
                  const headersProp = JSON.stringify([
                    { text: '属性名', value: 'name', minWidth: '120', },
                    { text: '类型', value: 'type', minWidth: '120', },
                    { text: '默认值', value: 'default', minWidth: '200', },
                    { text: '描述', value: 'description', minWidth: '120', },
                    { text: '来源', value: 'source', minWidth: '120', }
                  ])
                  const itemsProp = JSON.stringify(props).replace(/'/g, '')
                  str += `### ${ name } Props\n<ve-table :pagination="{ perPage: 999 }" hide-pagination :headers='${ headersProp }' :items='${ itemsProp }'/>\n`
                }
                if (component.events.length) {
                  const headersProp = JSON.stringify([
                    { text: '事件名', value: 'name' },
                  ])
                  const itemsProp = JSON.stringify(component.events)
                  str += `### ${ name } Events\n<ve-table :pagination="{ perPage: 999 }" hide-pagination :headers='${ headersProp }' :items='${ itemsProp }'/>\n`
                }
                return str
              })
          }
        }
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDir: 'src/layouts',
        defaultLayout: 'default'
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue', 'md'],
        pagesDir: [
          { dir: 'src/pages', baseRoute: '' },
          { dir: '../veno-ui/src', baseRoute: 'api' },
        ],
        exclude: ['**/docs/!(README).md'],
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
            const [, apiType, apiName] = routePath.match(/\/([\w-]+)\/([\w-]+)\/docs\/([\w-]+)/)
            routePath = ['', apiType, apiName].join('/')
            routeMeta.isNav = true
            routeMeta.apiType = apiType
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

      Vue({
        include: [/\.vue$/, /\.md$/],
      }),
      VueJsx(),

      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-icons
      Icons({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          VenoUiResolver(),
        ],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt'],
        manifest: {
          name: 'Veno UI',
          short_name: 'Veno UI',
          description: 'A Vue 3 UI Library. Uses Composable. Uses TypeScript.',
          theme_color: '#FFF',
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
    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      crittersOptions: false,
    },
    server: {
      port: +(process.env.PORT ?? 8080),
    },
    define: {
      __UI_NAME__: JSON.stringify(pkg.name),
      __UI_VERSION__: JSON.stringify(pkg.version),
    }
  }
})
