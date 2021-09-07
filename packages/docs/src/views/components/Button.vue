<script lang="ts">
export default { name: 'Playground' }
</script>

<script lang="ts" setup>
import { predefinedSizes, allowedVariants } from 'veno-ui'
</script>

<template>
  <ve-container>
    <h2 class="mb-5">按钮 Button</h2>

    <h3 class="mb-5">演示</h3>

    <ve-row>
      <ve-col cols="auto">
        <ve-card :width="400">
          <ve-card-title>按钮种类</ve-card-title>
          <ve-card-text>
            <ve-btn
                v-for="(variant, index) in allowedVariants"
                :key="index"
                :variant="variant"
                color="primary"
                class="mr-3"
            >
              {{ variant }}
            </ve-btn>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col cols="auto">
        <ve-card :width="400">
          <ve-card-title>圆形</ve-card-title>
          <ve-card-text>
            <ve-btn
                v-for="(variant, index) in allowedVariants"
                :key="index"
                :variant="variant"
                color="error"
                rounded
                class="mr-3"
            >
              {{ variant }}
            </ve-btn>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col cols="auto">
        <ve-card :width="400">
          <ve-card-title>不可用状态</ve-card-title>
          <ve-card-text>
            <ve-btn
                v-for="(variant, index) in allowedVariants"
                :key="index"
                :variant="variant"
                disabled
                color="error"
                style="margin-right: 10px;"
            >
              {{ variant }}
            </ve-btn>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col cols="auto">
        <ve-card :width="400">
          <ve-card-title>加载中</ve-card-title>
          <ve-card-text>
            <ve-btn
                v-for="(variant, index) in allowedVariants"
                :key="index"
                :variant="variant"
                loading
                style="margin-right: 10px;"
            >
              {{ variant }}
            </ve-btn>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col cols="auto">
        <ve-card :width="400">
          <ve-card-title>尺寸</ve-card-title>
          <ve-card-text>
            <ve-btn
                v-for="(size, index) in predefinedSizes"
                :key="index"
                :size="size"
                style="margin-right: 10px;"
            >
              {{ size }}
            </ve-btn>
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col cols="auto">
        <ve-card :width="400">
          <ve-card-title>Block</ve-card-title>
          <ve-card-text>
            <ve-btn
                v-for="(variant, index) in allowedVariants"
                :key="index"
                :variant="variant"
                block
                style="margin-bottom: 10px;"
            >
              {{ variant }}
            </ve-btn>
          </ve-card-text>
        </ve-card>
      </ve-col>
    </ve-row>
  </ve-container>
</template>