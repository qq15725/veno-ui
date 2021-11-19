<script setup lang="ts">
import { computed, ref } from 'vue'
import prism from 'prismjs'

const props = defineProps<{
  title: string,
  code: string,
  filename: string,
}>()

const highlightedCode = computed(() => {
  return prism.highlight(
      decodeURIComponent(props.code),
      prism.languages['markup'],
      'markup'
  )
})

const isActive = ref(false)
const theme = ref()
const github = ref('https://github.com/qq15725/veno-ui/blob/master')
</script>

<template>
  <ve-card :title="props.title" divider>
    <template #append>
      <ve-grid dense>
        <ve-tooltip
            #activator="{ props }"
            text="反转示例颜色"
            :open-delay="300"
            anchor="top"
        >
          <ve-button
              v-bind="props"
              @click="theme = theme === 'dark' ? 'light' : 'dark'"
              rounded
              style="opacity: .8;"
              :icon="`$${theme || 'light'}`"
          />
        </ve-tooltip>

        <ve-tooltip
            #activator="{ props: tooltipProps }"
            text="在 GitHub 中编辑"
            :open-delay="300"
            anchor="top"
        >
          <ve-button
              v-bind="tooltipProps"
              :href="`${ github }${ props.filename }`"
              target="_blank"
              rounded
              style="opacity: .8;"
              icon="$github"
          />
        </ve-tooltip>

        <ve-tooltip
            #activator="{ props }"
            text="查看源代码"
            :open-delay="300"
            anchor="top"
        >
          <ve-button
              v-bind="props"
              @click="isActive = !isActive"
              rounded
              style="opacity: .8;"
              icon="$code"
          />
        </ve-tooltip>
      </ve-grid>
    </template>

    <ve-expand-transition>
      <div class="language-html my-0 rounded-0" v-if="isActive">
        <pre><code v-html="highlightedCode" /></pre>
      </div>
    </ve-expand-transition>

    <ve-lazy>
      <ve-material tile :theme="theme" border="0">
        <ve-card-text>
          <slot />
        </ve-card-text>
      </ve-material>
    </ve-lazy>
  </ve-card>
</template>