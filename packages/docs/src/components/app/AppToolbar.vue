<script lang="ts" setup>
  // Utils
  import { computed } from 'vue'

  // Stores
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const url = computed(() => `${ import.meta.env.VITE_GITHUB_REPOSITORY }/${ route.meta.relativePath as string }`)
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
        text="编辑此页面"
      >
        <template #append-icon>
          <i-mdi-pencil />
        </template>
      </ve-link>
    </div>
  </ve-layout-item>
</template>
