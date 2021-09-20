<script setup>
import { ref } from 'vue'

const items1 = ref([1, 2, 3, 4])
const items2 = ref([5, 6, 7])

const position = ref({})
</script>

<template>
  <ve-container>
    <h2 class="mb-5">拖拽排序 Drag</h2>

    <h3 class="mb-5">演示</h3>

    <ve-row>
      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>拖拽移动</ve-card-title>

          <ve-card-text>
            <ve-drag moveable>
              <ve-btn width="100%" height="100%">拖动</ve-btn>
            </ve-drag>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>拖拽移动和调整大小</ve-card-title>

          <ve-card-text>
            <ve-drag
                moveable
                resizable
                resize-handle-point
            >
              <ve-btn width="100%" height="100%">拖动</ve-btn>
            </ve-drag>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>拖拽排序组</ve-card-title>

          <ve-list>
            <ve-drag-sort
                v-model="items1"
                group="group"
            >
              <template #item="{ item, on }">
                <ve-list-item v-on="on" @click="">{{ item }}</ve-list-item>
              </template>
            </ve-drag-sort>
          </ve-list>

          <ve-card-actions>
            {{ items1 }}
          </ve-card-actions>
        </ve-card>
      </ve-col>

      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>拖拽排序组</ve-card-title>

          <ve-list>
            <ve-drag-sort
                v-model="items2"
                group="group"
            >
              <template #item="{ item, on }">
                <ve-list-item v-on="on">{{ item }}</ve-list-item>
              </template>
            </ve-drag-sort>
          </ve-list>

          <ve-card-actions>
            {{ items2 }}
          </ve-card-actions>
        </ve-card>
      </ve-col>
    </ve-row>
  </ve-container>
</template>