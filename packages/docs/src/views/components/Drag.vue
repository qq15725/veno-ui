<script setup>
import { ref, reactive } from 'vue'

const items1 = reactive([1, 2, 3, 4])
const items2 = reactive([5, 6, 7])

const position = ref({

})
</script>

<template>
  <ve-container>
    <h2 class="mb-5">拖拽排序 Drag</h2>

    <h3 class="mb-5">演示</h3>

    <ve-row>
      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>拖拽</ve-card-title>

          <ve-card-text>
            <ve-drag
                v-model="position"
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
          <ve-card-title>基础</ve-card-title>

          <ve-drag-sort v-model="items1">
            <template #item="{ item, on }">
              <ve-btn
                  v-on="on"
                  :border="0"
                  block
              >
                {{ item }}
              </ve-btn>
            </template>
          </ve-drag-sort>
        </ve-card>
      </ve-col>

      <ve-col :cols="6">
        <ve-card>
          <ve-drag-sort v-model="items2">
            <template #item="{ item, on }">
              <ve-btn
                  v-on="on"
                  :border="0"
                  block
              >
                {{ item }}
              </ve-btn>
            </template>
          </ve-drag-sort>
        </ve-card>
      </ve-col>
    </ve-row>

    {{ items1 }}
    {{ items2 }}
  </ve-container>
</template>