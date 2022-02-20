<script lang="ts" setup>
  // Utils
  import { computed } from 'vue'
  import { genAppMetaInfo } from '@/utils'
  // Data
  import metadata from '@/data/metadata.json'
  // Stores
  import { useUserStore } from '@/stores/user'
  // Composables
  import { useHead } from '@vueuse/head'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const user = useUserStore()
  const meta = computed(() => genAppMetaInfo({
    site: metadata.site,
    title: `${ route.meta.title } - ${ metadata.site }`,
    description: String(route.meta.description || metadata.description),
    keywords: String(route.meta.keywords || metadata.keywords)
  }))

  useHead({
    title: computed(() => meta.value.title),
    meta: computed(() => meta.value.meta),
    link: computed(() => meta.value.link),
  })
</script>

<template>
  <ve-app style="min-height: 100vh;" :theme="user.theme">
    <router-view />
  </ve-app>
</template>