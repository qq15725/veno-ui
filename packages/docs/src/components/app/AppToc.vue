<template>
  <ve-drawer
      v-if="!!$route.meta?.headers?.filter(v => v.level === 3)?.length"
      width="180"
      anchor="right"
      border="0"
  >
    <ve-anchor
        offset="70"
        class="mt-10"
        :items="$route.meta.headers.filter(v => v.level === 3)
        .map(({ slug, title }) => ({ text: title, value: slug }))"
    >
      <ve-list-subheader tag="li">目录</ve-list-subheader>
    </ve-anchor>
  </ve-drawer>
</template>