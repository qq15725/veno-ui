<script lang="ts" setup>
  // Utils
  import { watch, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  // Stores
  import { useAppStore } from '@/stores/app'

  const { pageLoading } = storeToRefs(useAppStore())

  const active = ref(true)
  const progress = ref()
  watch(pageLoading, loading => {
    if (loading) {
      active.value = true
      progress.value?.start()
    } else {
      progress.value?.finish().then(() => active.value = false)
    }
  })
</script>

<template>
  <ve-progress
      ref="progress"
      :active="active"
      stroke-width="2"
      :underlay="false"
      style="border-radius: 0; position: fixed; top: 0; z-index: 2000;"
  />
</template>