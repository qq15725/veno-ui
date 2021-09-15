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

      <ve-app-bar-items style="margin-left: 140px;" >
        <ve-btn :to="{ name: 'Guide' }">首页</ve-btn>
        <ve-btn :to="{ name: 'Decorate' }">排练场</ve-btn>
      </ve-app-bar-items>
    </ve-app-bar>

    <ve-app-sider>
      <ve-list>
        <ve-list-item
            v-for="item in items"
            :to="{ name: `Components${item.name}` }"
        >
          <span style="font-size: 14px;" class="mr-2">{{ item.label }}</span>
          <span style="font-size: 13px; color: rgb(158, 164, 170);">{{ item.name }}</span>
        </ve-list-item>
      </ve-list>
    </ve-app-sider>

    <ve-app-main>
      <router-view />
    </ve-app-main>
  </ve-app>
</template>