<script setup lang="ts">
import { ref } from 'vue'
import { version } from 'veno-ui/package.json'

const props = defineProps<{
  items?: any[]
}>()

const theme = ref()

const active = ref()
</script>

<template>
  <ve-app :theme="theme">
    <ve-app-bar border>
      <ve-app-bar-nav-icon @click="active = !active" class="hidden-sm-and-up" />

      <ve-app-bar-title>Veno UI</ve-app-bar-title>

      <div class="hidden-sm-and-down" style="margin-left: 140px;"></div>

      <ve-spacer class="hidden-sm-and-up" />

      <ve-app-bar-items>
        <ve-button :width="60" :to="{ name: 'Guide' }">文档</ve-button>
        <ve-button :width="60" :to="{ name: 'ButtonComponent' }">组件</ve-button>
      </ve-app-bar-items>

      <ve-spacer class="hidden-sm-and-down" />

      <ve-app-bar-items class="hidden-sm-and-down">
        <ve-button
            :width="60"
            @click="theme = theme === 'dark' ? 'light' : 'dark'"
        >
          {{ theme === 'dark' ? '浅色' : '深色' }}
        </ve-button>
        <ve-button :width="60" href="https://github.com/qq15725/veno-ui" target="_blank">GitHub</ve-button>
        <ve-button :width="60">{{ version }}</ve-button>
      </ve-app-bar-items>
    </ve-app-bar>

    <ve-app-sider v-model="active">
      <ve-list>
        <ve-list-item
            v-for="item in props.items"
            :to="{ name: item.name }"
            class="pl-10"
            active-color="primary"
        >
          <span style="font-size: 14px;" class="mr-2">{{ item.meta.title }}</span>

          <span style="font-size: 13px; color: rgb(158, 164, 170);">{{ item.meta.name }}</span>
        </ve-list-item>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <ve-container class="px-md-10 py-md-8">
        <router-view />
      </ve-container>
    </ve-app-main>
  </ve-app>
</template>