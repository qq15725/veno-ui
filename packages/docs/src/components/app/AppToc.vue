<template>
  <ve-drawer
      v-if="!!$route.meta?.headers?.filter(v => v.level === 3)?.length"
      width="180"
      anchor="right"
      border="0"
  >
    <ve-anchor offset="64" class="mt-10">
      <ve-list-subheader tag="li">目录</ve-list-subheader>
      <ve-anchor-item
          v-for="header in $route.meta.headers.filter(v => v.level === 3)"
          :key="header.slug"
          :name="header.slug"
      >
        {{ header.title }}
      </ve-anchor-item>
    </ve-anchor>
  </ve-drawer>
</template>