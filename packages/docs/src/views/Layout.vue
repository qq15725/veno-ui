<script setup lang="ts">
import { ref } from 'vue'
import { version } from 'veno-ui'

const props = defineProps<{
  menus?: any[]
}>()

const theme = ref()

const active = ref()
</script>

<template>
  <ve-app :theme="theme">
    <ve-app-bar border>
      <ve-app-bar-nav-icon
          @click="active = !active"
          class="hidden-sm-and-up"
          text-color="primary"
      />

      <ve-app-bar-title
          class="hidden-sm-and-down"
          style="font-weight: 700;"
      >
        Veno UI
      </ve-app-bar-title>

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
          :items="props.menus"
          :opened="props.menus.map(item => item.value)"
      >
        <template #header="{ title }">
          <ve-list-subheader>{{ title }}</ve-list-subheader>
        </template>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <ve-container class="px-md-10 py-md-8">
        <router-view />
      </ve-container>
    </ve-app-main>
  </ve-app>
</template>