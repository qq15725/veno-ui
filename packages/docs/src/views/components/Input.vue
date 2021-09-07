<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <ve-container>
    <h2 class="mb-5">文本输入 Input</h2>

    <h3 class="mb-5">演示</h3>

    <ve-row>
      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>基础</ve-card-title>
          <ve-card-text>
            <p class="mb-3">文本输入的基础用法。</p>
            <ve-input v-model="value" placeholder="基本的 Input"/>
            {{ value }}
          </ve-card-text>
        </ve-card>
      </ve-col>
    </ve-row>
  </ve-container>
</template>