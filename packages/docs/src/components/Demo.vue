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
const btn = ref()
const theme = ref()
const github = ref('https://github.com/qq15725/veno-ui/blob/master')
const focusBtn = () => {
  setTimeout(() => {
    btn.value?.$el?.focus()
  }, 0)
}
</script>

<template>
  <ve-card :title="props.title" divider>
    <template #append>
      <ve-grid dense>
        <ve-tooltip
            #activator="{ props }"
            :text="isActive ? '隐藏源代码' : '查看源代码'"
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

        <ve-tooltip
            #activator="{ props }"
            text="重置焦点以测试键盘导航"
            :open-delay="300"
            anchor="top"
        >
          <ve-button
              v-bind="props"
              @click="focusBtn"
              rounded
              style="opacity: .8;"
              icon="$focus"
          />
        </ve-tooltip>

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
      </ve-grid>
    </template>

    <ve-expand-transition>
      <div class="language-html my-0 rounded-0" v-if="isActive">
        <pre><code v-html="highlightedCode" /></pre>
      </div>
    </ve-expand-transition>

    <ve-material tile :theme="theme" border="0">
      <ve-button
          ref="btn"
          class="test-kb-nav"
          absolute
          border="0"
          icon
          rounded
          tabindex="-1"
          aria-label="此容器仅用于测试组件键盘导航功能。"
          color="transparent"
          style="pointer-events: none;"
      />
      <ve-card-text>
        <slot />
      </ve-card-text>
    </ve-material>
  </ve-card>
</template>

<style>
.test-kb-nav {

}
</style>