<script lang="ts" setup>
  // Utils
  import { storeToRefs } from 'pinia'
  import { routesToMenus } from '@/utils'
  import { useAppStore } from '@/stores/app'
  // @ts-ignore
  import pages from '~pages'

  const menus = routesToMenus(pages)
  const { menuActive } = storeToRefs(useAppStore())
</script>

<template>
  <ve-drawer v-model="menuActive">
    <ve-list
        nav
        density="ultra-high"
        :items="menus"
        :opened="menus.map(item => item.value)"
    >
      <template #header="{ title }">
        <ve-list-subheader>{{ title }}</ve-list-subheader>
      </template>
    </ve-list>
  </ve-drawer>
</template>