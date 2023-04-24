// Utils
import path from 'node:path'
import fs from 'node:fs'
import { defineConfig, loadEnv } from 'vite'
import { getCompleteApi } from '@veno-ui/api-generator'
import { createMarkdown } from '@veno-ui/markdown'
import { toPascalCase } from '@veno-ui/utils'
import { VenoUiResolver } from 'veno-ui'
import pkg from 'veno-ui/package.json'

// Plugins
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Legacy from '@vitejs/plugin-legacy'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import Markdown from '@veno-ui/vite-plugin-markdown'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePWA } from 'vite-plugin-pwa'
import generateSitemap from 'vite-ssg-sitemap'

const root = __dirname
const resolve = (...args: string[]) => path.resolve(root, ...args)

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, root))

  const md = createMarkdown()
  const completedApi = getCompleteApi({
    fileGlobs: resolve('../veno-ui/src/**/*{.ts,.tsx}'),
  })

  return {
    resolve: {
      alias: [
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
              { find: 'veno-ui/styles', replacement: resolve('../veno-ui/lib/styles/main.css') },
              { find: 'veno-ui', replacement: resolve('../veno-ui/lib/framework.mjs') },
            ],
      ),
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name]-[hash].mjs',
          chunkFileNames: 'assets/js/[name]-[hash].mjs',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
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
                  str += `### ${ name } Props\n`
                  str += `<ve-table :pagination="{ perPage: 999 }" hide-pagination :headers='${ JSON.stringify([
                    { text: '属性名', value: 'name', minWidth: '120' },
                    { text: '类型', value: 'type', minWidth: '120' },
                    { text: '默认值', value: 'default', minWidth: '200' },
                    { text: '描述', value: 'description', minWidth: '120' },
                    { text: '来源', value: 'source', minWidth: '120' },
                  ]) }' :items='${ JSON.stringify(component.props.map((prop: any) => {
                    return {
                      ...prop,
                      type: typeof prop.type === 'object'
                        ? prop.type.join(' | ')
                        : prop.type,
                      description: prop.descriptions.find((v: any) => v.language === 'zh')?.description,
                    }
                  })).replace(/'/g, '!') }'><template #item.type="{ item }"><ve-code color="secondary" inline class="p-1">{{ item.type }}</ve-code></template><template #item.default="{ item }"><ve-code color="secondary" inline class="p-1">{{ typeof item.default === 'string' ? item.default.replace(/!/g, "'") : JSON.stringify(item.default, null, 2) }}</ve-code></template></ve-table>\n`
                }
                if (component.events.length) {
                  str += `### ${ name } Events\n`
                  str += `<ve-table :pagination="{ perPage: 999 }" hide-pagination :headers='${ JSON.stringify([
                    { text: '事件名', value: 'name' },
                  ]) }' :items='${ JSON.stringify(component.events) }'/>\n`
                }
                return str
              })
          },
        },
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue', 'md'],
        pagesDir: [
          { dir: 'src/pages', baseRoute: '' },
          { dir: '../veno-ui/src', baseRoute: 'api' },
        ],
        exclude: ['**/docs/!(README).md'],
        extendRoute(route) {
          let file = route.component
          if (file.indexOf('/src/pages') === 0) file = path.join(root, file)
          md.render(fs.readFileSync(file, { encoding: 'utf-8' }), { root, file })
          const { frontmatter, ...restData } = md._context
          const { meta, ...restFrontmatter } = frontmatter || {}
          let routePath = route.path
          const routeMeta = {
            ...restData,
            ...restFrontmatter,
            ...Object(meta),
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
            meta: routeMeta,
          }
        },
      }),

      Vue({
        include: [/\.vue$/, /\.md$/],
      }),
      VueJsx(),
      Legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        compiler: 'vue3',
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          VenoUiResolver(),
          IconsResolver(),
        ],
        dts: 'components.d.ts',
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
            },
          ],
        },
      }),
    ],
    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      crittersOptions: false,
      onFinished() {
        generateSitemap({
          hostname: pkg.homepage,
        })
      },
    },
    define: {
      __VENOUI_NAME__: JSON.stringify(pkg.name),
      __VENOUI_VERSION__: JSON.stringify(pkg.version),
    },
  }
})
