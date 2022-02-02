<script lang="ts" setup>
import { ref, computed } from 'vue'
import { version } from 'veno-ui'
import { useAppStore } from '@/stores/app'
import { routesToMenus } from '@/utils'
import { useRoute } from 'vue-router'
// @ts-ignore
import pages from '~pages'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const app = useAppStore()
const route = useRoute()
const active = ref()
const menus = routesToMenus(pages)
const url = computed(() => {
  const { relativePath } = route.meta
  if (relativePath.includes('../')) {
    return `${ app.repository }/${ relativePath.replace('../', 'packages/') }`
  }
  return `${ app.repository }/packages/docs/${ relativePath }`
})

function toggle () {
  user.theme = user.theme === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ve-app>
    <ve-progress
        stroke-width="2"
        :indeterminate="app.loading"
        style="position: fixed; top: 0; z-index: 800;"
    />

    <ve-header border>
      <ve-header-nav-icon v-if="$veno.display.mobile" @click="active = !active" />
      <ve-header-title v-else>Veno UI</ve-header-title>
      <ve-spacer />
      <ve-header-items>
        <ve-tooltip text="反转示例颜色" #activator="{ props }">
          <ve-button
              v-bind="props"
              @click="toggle"
              :icon="user.theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
              variant="text"
          />
        </ve-tooltip>
        <ve-tooltip text="在 Github 中查看" #activator="{ props }">
          <ve-button
              v-bind="props"
              href="https://github.com/qq15725/veno-ui"
              target="_blank"
              icon="mdi-github"
              variant="text"
              class="ml-3"
          />
        </ve-tooltip>
        <ve-button variant="text" class="ml-3">{{ version }}</ve-button>
      </ve-header-items>
    </ve-header>

    <ve-drawer v-model="active">
      <ve-list
          nav
          density="ultra-high"
          :items="menus"
          :opened="menus.map(item => item.value)"
      >
        <template #header="{ title }">
          <ve-list-subheader>{{ title }}</ve-list-subheader>
        </template>
      </ve-list>
    </ve-drawer>

    <ve-drawer
        v-if="!!$route.meta?.headers?.filter(v => v.level === 3)?.length"
        width="180"
        anchor="right"
        border="0"
    >
      <ve-anchor offset="64" class="mt-10">
        <ve-list-subheader tag="li">目录</ve-list-subheader>
        <ve-anchor-item
            v-for="header in $route.meta.headers.filter(v => v.level === 3)"
            :key="header.slug"
            :name="header.slug"
        >
          {{ header.title }}
        </ve-anchor-item>
      </ve-anchor>
    </ve-drawer>

    <ve-layout-item anchor="top" size="45" priority="-1" class="d-flex align-center px-3 px-md-10">
      <ve-breadcrumb v-if="$route.meta.category">
        <ve-breadcrumb-item
            v-for="name in ['组件', $route.meta.category]"
            :key="name"
        >
          {{ name }}
        </ve-breadcrumb-item>
      </ve-breadcrumb>
      <ve-spacer />
      <ve-link
          class="text-caption"
          target="_blank"
          :href="url"
          append-icon="mdi-pencil"
      >
        编辑此页面
      </ve-link>
    </ve-layout-item>

    <ve-main>
      <ve-container class="px-md-10">
        <router-view #default="{ Component }">
          <ve-fade-transition hide-on-leave>
            <component :is="Component" />
          </ve-fade-transition>
        </router-view>
      </ve-container>
    </ve-main>
  </ve-app>
</template>