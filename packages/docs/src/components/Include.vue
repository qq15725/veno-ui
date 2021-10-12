<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

defineProps<{ items: any[] }>()

const getIs = (name: string) => {
  return defineAsyncComponent(() => import(/* @vite-ignore */name))
}
</script>

<template>
  <ve-row>
    <ve-col cols="6" v-for="i in 2" :key="i">
      <ve-row>
        <ve-col
            v-for="(cols, ix) in items"
            :key="ix"
            cols="12"
        >
          <component
              v-if="cols[i - 1]"
              :is="getIs(cols[i - 1])"
          />
        </ve-col>
      </ve-row>
    </ve-col>
  </ve-row>
</template>