<script lang="ts" setup>
  // Utils
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { genAppMetaInfo } from '@/utils'
  // Data
  import metadata from '@/data/metadata.json'
  // Stores
  import { useUserStore } from '@/stores/user'
  // Composables

  const route = useRoute()
  const user = useUserStore()
  const meta = computed(() => genAppMetaInfo({
    site: metadata.site,
    title: `${ route.meta.title } - ${ metadata.site }`,
    description: String(route.meta.description || metadata.description),
    keywords: String(route.meta.keywords || metadata.keywords),
  }))
</script>

<template>
  <ve-app :theme="user.theme">
    <router-view />
  </ve-app>
</template>
