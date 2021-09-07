<script>
export default { name: 'LayoutsDocs' }
</script>

<script setup>
const items = [
  {
    name: 'Button',
    label: '按钮'
  },
  {
    name: 'Card',
    label: '卡片'
  },
  {
    name: 'Divider',
    label: '分割线'
  },
  {
    name: 'Grid',
    label: '栅格'
  },
  {
    name: 'Drag',
    label: '拖拽排序'
  },
  {
    name: 'Input',
    label: '文本输入'
  },
  {
    name: 'List',
    label: '列表'
  },
]
</script>

<template>
  <ve-app>
    <ve-app-bar border>
      <ve-app-bar-title>Veno UI</ve-app-bar-title>
      <ve-btn style="margin-left: 140px;" :to="{ name: 'Guide' }" variant="text">首页</ve-btn>
      <ve-btn :to="{ name: 'Decorate' }" variant="text">排练场</ve-btn>
    </ve-app-bar>

    <ve-app-sider>
      <ve-list>
        <ve-btn
            v-for="item in items"
            block
            variant="text"
            tile
            :to="{ name: `Components${item.name}` }"
        >
          {{ item.label }} {{ item.name }}
        </ve-btn>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <router-view />
    </ve-app-main>
  </ve-app>
</template>