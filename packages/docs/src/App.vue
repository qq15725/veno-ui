<script lang="ts" setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { genAppMetaInfo } from '@/utils'
import metadata from '@/data/metadata.json'

const route = useRoute()

const meta = computed(() => genAppMetaInfo({
  site: metadata.site,
  title: `${ route.meta.title } — ${ metadata.site }`,
  description: route.meta.description || metadata.description,
  keywords: route.meta.keywords || metadata.keywords,
}))

useHead({
  title: computed(() => meta.value.title),
  meta: computed(() => meta.value.meta),
  link: computed(() => meta.value.link),
})
</script>

<template>
  <router-view />
</template>