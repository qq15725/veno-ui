<script setup lang="ts">
import { computed, ref } from 'vue'
import prism from 'prismjs'

const props = defineProps<{
  title: string,
  code: string,
}>()

const highlightedCode = computed(() => {
  return prism.highlight(
      decodeURIComponent(props.code),
      prism.languages['markup'],
      'markup'
  )
})

const isActive = ref(false)
</script>

<template>
  <ve-card :title="props.title">
    <template #append>
      <ve-button
          @click="isActive = !isActive"
          size="x-small"
      >
        代码
      </ve-button>
    </template>

    <template #text>
      <slot name="preview" />
    </template>

    <div class="language-html my-0 rounded-0" v-if="isActive">
      <pre><code v-html="highlightedCode" /></pre>
    </div>
  </ve-card>
</template>