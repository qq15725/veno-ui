<template>
  <ve-app :theme="theme">
    <ve-progress
        v-if="appStore.loading"
        indeterminate
        style="position: fixed; top: 0; z-index: 20;"
    />

    <ve-app-bar border>
      <ve-app-bar-nav-icon
          @click="active = !active"
          class="hidden-sm-and-up"
          text-color="primary"
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
              class="mr-3"
              @click="theme = theme === 'dark' ? 'light' : 'dark'"
              :icon="`$${theme || 'light'}`"
              size="xl"
              text-color="primary"
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
              size="xl"
              text-color="primary"
          />
        </ve-tooltip>
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
      <router-view #default="{ Component }">
        <ve-fade-transition hide-on-leave>
          <component :is="Component" />
        </ve-fade-transition>
      </router-view>
    </ve-app-main>
  </ve-app>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useAppStore } from '@/store/app'

export default defineComponent({
  props: {
    menus: Array,
  },

  setup (props) {
    const theme = ref()
    const active = ref()

    return {
      theme,
      active,
      menus: props.menus,
      appStore: useAppStore()
    }
  }
})
</script>