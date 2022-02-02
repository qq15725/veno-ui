<script lang="ts" setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { genAppMetaInfo } from '@/utils'
import metadata from '@/data/metadata.json'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const user = useUserStore()
const meta = computed(() => genAppMetaInfo({
  site: metadata.site,
  title: `${ route.meta.title } — ${ metadata.site }`,
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
  <ve-theme-provider :theme="user.theme">
    <ve-message-provider>
      <router-view />
    </ve-message-provider>
  </ve-theme-provider>
</template>