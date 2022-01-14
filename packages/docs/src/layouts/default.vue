<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { version } from 'veno-ui'
import { useAppStore } from '@/store/app'
import { routesToMenus } from '@/utils'
import { useRoute } from 'vue-router'
// @ts-ignore
import pages from '~pages'

export default defineComponent({
  setup () {
    const app = useAppStore()
    const route = useRoute()

    return {
      active: ref(),
      menus: routesToMenus(pages),
      app,
      version,
      url: computed(() => {
        const { relativePath } = route.meta
        if (relativePath.includes('../')) {
          return `${ app.repository }/${ relativePath.replace('../', 'packages/') }`
        }
        return `${ app.repository }/packages/docs/${ relativePath }`
      })
    }
  }
})
</script>

<template>
  <ve-app>
    <ve-progress
        stroke-width="2"
        :indeterminate="app.loading"
        style="position: fixed; top: 0; z-index: 20;"
    />

    <ve-app-bar border>
      <ve-app-bar-nav-icon
          @click="active = !active"
          class="hidden-sm-and-up"
      />

      <ve-app-bar-title class="hidden-sm-and-down">Veno UI</ve-app-bar-title>

      <ve-spacer />

      <ve-app-bar-items>
        <ve-tooltip
            #activator="{ props }"
            text="反转示例颜色"
        >
          <ve-button
              v-bind="props"
              @click="$venoUi.theme.current = $venoUi.theme.current === 'dark' ? 'light' : 'dark'"
              :icon="'$' + $venoUi.theme.current"
              variant="text"
          />
        </ve-tooltip>

        <ve-tooltip
            #activator="{ props }"
            text="在 Github 中查看"
        >
          <ve-button
              v-bind="props"
              href="https://github.com/qq15725/veno-ui"
              target="_blank"
              icon="$github"
              variant="text"
              class="ml-3"
          />
        </ve-tooltip>

        <ve-button variant="text" class="ml-3">{{ version }}</ve-button>
      </ve-app-bar-items>
    </ve-app-bar>

    <ve-app-sider v-model="active">
      <ve-list
          nav
          density="compact"
          :items="menus"
          :opened="menus.map(item => item.value)"
      >
        <template #header="{ title }">
          <ve-list-subheader>{{ title }}</ve-list-subheader>
        </template>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <ve-container class="px-md-10 py-8">
        <div class="d-flex">
          <ve-breadcrumb v-if="$route.meta.category">
            <ve-breadcrumb-item
                v-for="name in ['组件', $route.meta.category]"
                :key="name"
            >
              {{ name }}
            </ve-breadcrumb-item>
          </ve-breadcrumb>
          <ve-spacer />
          <ve-button
              class="text-caption"
              variant="link"
              target="_blank"
              :href="url"
              append-icon="$edit"
          >
            编辑此页面
          </ve-button>
        </div>

        <router-view #default="{ Component }">
          <ve-fade-transition hide-on-leave>
            <component :is="Component" />
          </ve-fade-transition>
        </router-view>
      </ve-container>
    </ve-app-main>

    <ve-app-sider
        v-if="!!$route.meta?.headers?.filter(v => v.level === 3)?.length"
        width="180"
        position="right"
    >
      <ve-anchor offset="64" density="compact">
        <ve-anchor-item
            v-for="header in $route.meta.headers.filter(v => v.level === 3)"
            :key="header.slug"
            :subtitle="header.title"
            :name="header.slug"
        />
      </ve-anchor>
    </ve-app-sider>
  </ve-app>
</template>