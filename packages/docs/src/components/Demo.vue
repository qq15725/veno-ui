<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string,
  filename: string,
}>()

const isActive = ref(false)
const btn = ref()
const theme = ref()
const github = ref('https://github.com/qq15725/veno-ui/blob/master')
const focusBtn = () => {
  setTimeout(() => {
    btn.value?.$el?.focus?.()
  }, 0)
}
</script>

<template>
  <ve-card-title v-if="$slots.title().length" class="px-0 pt-0">
    <slot name="title" />
  </ve-card-title>

  <slot name="prepend" />

  <ve-card :theme="theme">
    <ve-button
        ref="btn"
        absolute
        border="0"
        icon
        rounded
        tabindex="-1"
        aria-label="此容器仅用于测试组件键盘导航功能。"
        color="transparent"
        style="pointer-events: none;"
    />

    <ve-card-text class="p-6">
      <slot />
    </ve-card-text>
  </ve-card>

  <slot name="append" />

  <div class="mt-3">
    <ve-grid dense justify="end">
      <ve-tooltip
          #activator="{ props }"
          :text="isActive ? '隐藏源代码' : '查看源代码'"
          :open-delay="300"
          anchor="top"
      >
        <ve-button
            v-bind="props"
            @click="isActive = !isActive"
            :color="isActive ? 'primary' : undefined"
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
            tabindex="-1"
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
            tabindex="-1"
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
            tabindex="-1"
        />
      </ve-tooltip>
    </ve-grid>
  </div>

  <ve-expand-transition>
    <ve-code
        v-if="isActive"
        :value="props.code"
        language="vue"
        :show-language="false"
        class="mt-3"
    />
  </ve-expand-transition>
</template>