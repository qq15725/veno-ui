<script lang="ts" setup>
  // Utils
  import { storeToRefs } from 'pinia'
  // Stores
  import { useAppStore } from '@/stores/app'
  import { useUserStore } from '@/stores/user'

  const userStore = useUserStore()
  const { toggleMenuActive } = useAppStore()
  const { toggleTheme } = userStore
  const { theme } = storeToRefs(userStore)
</script>

<template>
  <ve-header border>
    <ve-header-nav-icon v-if="$veno.display.mobile" @click="toggleMenuActive" />

    <ve-header-title v-else>Veno UI</ve-header-title>

    <ve-spacer />

    <ve-tooltip text="反转示例颜色">
      <template #activator="{ props }">
        <ve-button
          v-bind="props"
          :icon="theme === 'dark' ? 'fontisto-night-clear' : 'fontisto-day-sunny'"
          class="ml-3"
          @click="toggleTheme"
        />
      </template>
    </ve-tooltip>

    <ve-tooltip text="在 Github 中查看">
      <template #activator="{ props }">
        <ve-button
          v-bind="props"
          href="https://github.com/qq15725/veno-ui"
          target="_blank"
          icon="tabler-brand-github"
          class="ml-3"
        />
      </template>
    </ve-tooltip>

    <ve-button class="ml-3">{{ $veno.version }}</ve-button>
  </ve-header>
</template>
