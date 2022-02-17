<script lang="ts" setup>
  // Utils
  import { storeToRefs } from 'pinia'
  // Stores
  import { useAppStore } from '@/stores/app'

  const { pageLoading } = storeToRefs(useAppStore())
</script>

<template>
  <ve-progress
      stroke-width="2"
      :indeterminate="pageLoading"
      style="position: fixed; top: 0; z-index: 2000;"
  />
</template>