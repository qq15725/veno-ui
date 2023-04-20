<script lang="ts" setup>
  import { computed } from 'vue'
  import { useDisplay } from 'veno-ui'
  import { useRoute } from 'vue-router'

  const display = useDisplay()
  const route = useRoute()
  const toc = computed(() => {
    const headers = (route.meta?.headers || []) as any[]
    return headers
      .filter(({ title, level }) => level === 3 || title === 'API')
      .map(({ slug, title }) => ({ text: title, value: slug }))
  })
</script>

<template>
  <ve-drawer
    :model-value="!display.platform.ssr && !display.mobile && toc.length > 0"
    width="180"
    anchor="right"
    border="0"
  >
    <ve-anchor
      offset="70"
      class="mt-10"
      :items="toc"
    >
      <ve-list-subheader tag="li">目录</ve-list-subheader>
    </ve-anchor>
  </ve-drawer>
</template>
