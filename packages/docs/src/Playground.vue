<script setup>
import { ref } from 'vue'

let items = ref([
  {
    is: 'VeBtn',
    label: '按钮'
  },
  {
    is: 'VeCard',
    label: '卡片'
  },
  {
    is: 'VeDivider',
    label: '分隔符'
  },
  {
    is: 'VeInput',
    label: '文本输入'
  },
])

const items1 = ref([
  {
    is: 'VeBtn',
    label: '按钮'
  },
])
</script>

<template>
  <ve-app>
    <ve-app-bar border>
      <ve-spacer />

      <ve-app-bar-items>
        <ve-btn>保存</ve-btn>
        <ve-btn>退出</ve-btn>
      </ve-app-bar-items>
    </ve-app-bar>

    <ve-app-sider class="p-3">
      <ve-row>
        <ve-drag-sort
            group="components"
            v-model="items"
            :put="false"
        >
          <template #item="{ item, on }">
            <ve-col :cols="6">
              <ve-card
                  v-on="on"
                  class="p-3"
                  style="cursor: move;"
              >
                {{ item.label }}
              </ve-card>
            </ve-col>
          </template>
        </ve-drag-sort>
      </ve-row>
    </ve-app-sider>

    <ve-app-sider position="right" class="p-3">
      <ve-input />
    </ve-app-sider>

    <ve-app-main
        color="#e5e5e5"
    >
      <ve-container>
        <ve-device
            model="iphone8"
            class="m-auto"
            auto-height
        >
          <ve-drag-sort v-model="items1" group="components">
            <template #item="{ item, on }">
              <component
                  v-on="on"
                  :is="item.is"
              >
                {{ item.label }}
              </component>
            </template>
          </ve-drag-sort>
        </ve-device>
      </ve-container>
    </ve-app-main>
  </ve-app>
</template>