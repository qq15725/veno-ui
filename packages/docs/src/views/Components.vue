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
        <ve-btn :to="{ name: 'Guide' }">首页</ve-btn>
        <ve-btn :to="{ name: 'Playground' }">排练场</ve-btn>
      </ve-app-bar-items>
    </ve-app-bar>

    <ve-app-sider>
      <ve-list>
        <ve-list-item
            v-for="item in props.items"
            :to="{ name: item.name }"
        >
          <span style="font-size: 14px;" class="mr-2">{{ item.name }}</span>
          <span style="font-size: 13px; color: rgb(158, 164, 170);">{{ item.name }}</span>
        </ve-list-item>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <ve-container>
        <router-view />
      </ve-container>
    </ve-app-main>
  </ve-app>
</template>