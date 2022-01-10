<template>
  <ve-app>
    <ve-progress
        v-if="appStore.loading"
        indeterminate
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
        <ve-breadcrumb v-if="$route.meta.category">
          <ve-breadcrumb-item>组件</ve-breadcrumb-item>
          <ve-breadcrumb-item>{{ $route.meta.category }}</ve-breadcrumb-item>
        </ve-breadcrumb>

        <router-view #default="{ Component }">
          <ve-fade-transition hide-on-leave>
            <component :is="Component" />
          </ve-fade-transition>
        </router-view>
      </ve-container>
    </ve-app-main>

    <ve-app-sider v-if="$route.meta.headers" width="180" position="right">
      <ve-list density="compact">
        <ve-list-item
            v-for="header in $route.meta.headers.filter(v => v.level === 3)"
            :subtitle="header.title"
            @click=""
        />
      </ve-list>
    </ve-app-sider>
  </ve-app>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { version } from 'veno-ui'
import { useAppStore } from '@/store/app'
import { routesToMenus } from '@/utils'
import pages from '~pages'

export default defineComponent({
  setup (props) {
    const active = ref()

    return {
      active,
      menus: routesToMenus(pages),
      appStore: useAppStore(),
      version
    }
  }
})
</script>