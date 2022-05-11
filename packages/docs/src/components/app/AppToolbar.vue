<script lang="ts" setup>
  // Utils
  import { computed } from 'vue'
  // Stores
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'
  // Composables

  const route = useRoute()
  const appStore = useAppStore()
  const url = computed(() => {
    const path = route.meta.relativePath as string
    if (path.includes('../')) {
      return `${ appStore.repositoryBaseURL }/${ path.replace('../', 'packages/') }`
    }
    return `${ appStore.repositoryBaseURL }/packages/docs/${ path }`
  })
</script>

<template>
  <ve-layout-item anchor="top" size="45" priority="-1" class="d-flex align-center">
    <div class="m-auto d-flex flex-fill px-3 px-md-10" style="max-width: 900px;">
      <ve-breadcrumb v-if="$route.meta.category">
        <ve-breadcrumb-item
          v-for="name in ['组件', $route.meta.category]"
          :key="name"
          :text="name"
          :value="name"
        />
      </ve-breadcrumb>

      <ve-spacer />

      <ve-link
        class="text-caption"
        target="_blank"
        :href="url"
        append-icon="mdi-pencil"
        text="编辑此页面"
      />
    </div>
  </ve-layout-item>
</template>
