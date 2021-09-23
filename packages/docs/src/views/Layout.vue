<script setup lang="ts">
const props = defineProps<{
  items?: any[]
}>()
</script>

<template>
  <ve-app>
    <ve-app-bar border>
      <ve-app-bar-title>Veno UI</ve-app-bar-title>

      <ve-app-bar-items style="margin-left: 140px;">
        <ve-button :width="60" :to="{ name: 'Guide' }">首页</ve-button>
        <ve-button :width="60">文档</ve-button>
        <ve-button :width="60" :to="{ name: 'ButtonComponent' }">组件</ve-button>
        <ve-button :width="60" :to="{ name: 'Playground' }">排练场</ve-button>
      </ve-app-bar-items>

      <ve-spacer />

      <ve-app-bar-items>
        <ve-button :width="60">深色</ve-button>
        <ve-button :width="60">GitHub</ve-button>
      </ve-app-bar-items>
    </ve-app-bar>

    <ve-app-sider>
      <ve-list>
        <ve-list-item
            v-for="item in props.items"
            :to="{ name: item.name }"
        >
          <span style="font-size: 14px;" class="mr-2">{{ item.meta.title }}</span>
          <span style="font-size: 13px; color: rgb(158, 164, 170);">{{ item.meta.name }}</span>
        </ve-list-item>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <ve-container class="px-10 py-8">
        <router-view />
      </ve-container>
    </ve-app-main>
  </ve-app>
</template>