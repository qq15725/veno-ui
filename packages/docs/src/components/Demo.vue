<script lang="ts" setup>
  import { ref, toRef, watch } from 'vue'
  import { useUserStore } from '@/stores/user'

  const props = defineProps({
    title: String,
    slug: String,
    file: String,
    code: String,
  })

  const isActive = ref(false)
  const btn = ref()
  const user = useUserStore()
  const theme = ref(user.theme)

  watch(toRef(user, 'theme'), userTheme => {
    theme.value = userTheme
  })

  function focusBtn() {
    setTimeout(() => btn.value?.$el?.focus?.(), 0)
  }

  const url = `${ import.meta.env.VITE_GITHUB_REPOSITORY }/${ props.file }`
</script>

<template>
  <div :id="slug">
    <ve-card-title v-if="title" class="px-0 pt-0">{{ title }}</ve-card-title>

    <slot name="prepend" />

    <ve-card border :theme="theme">
      <ve-button
        ref="btn"
        absolute
        border="0"
        icon
        variant="text"
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

    <div class="mt-2">
      <ve-spacer gutter="md" justify="end">
        <ve-tooltip
          :text="isActive ? '隐藏源代码' : '查看源代码'"
          :open-delay="300"
          anchor="top"
        >
          <template #activator="{ props }">
            <ve-button
              v-bind="props"
              :color="isActive ? 'primary' : undefined"
              variant="text"
              size="small"
              @click="isActive = !isActive"
            >
              <template #icon>
                <i-mdi-code-tags />
              </template>
            </ve-button>
          </template>
        </ve-tooltip>

        <ve-tooltip
          text="重置焦点以测试键盘导航"
          :open-delay="300"
          anchor="top"
        >
          <template #activator="{ props }">
            <ve-button
              v-bind="props"
              variant="text"
              tabindex="-1"
              size="small"
              @click="focusBtn"
            >
              <template #icon>
                <i-mdi-image-filter-center-focus-strong-outline />
              </template>
            </ve-button>
          </template>
        </ve-tooltip>

        <ve-tooltip
          text="反转示例颜色"
          :open-delay="300"
          anchor="top"
        >
          <template #activator="{ props }">
            <ve-button
              v-bind="props"
              variant="text"
              tabindex="-1"
              size="small"
              @click="theme = theme === 'dark' ? 'light' : 'dark'"
            >
              <template #icon>
                <i-mdi-weather-night v-if="theme === 'dark'" />
                <i-mdi-weather-sunny v-else />
              </template>
            </ve-button>
          </template>
        </ve-tooltip>

        <ve-tooltip
          text="在 GitHub 中查看源代码"
          :open-delay="300"
          anchor="top"
        >
          <template #activator="{ props: tooltipProps }">
            <ve-button
              v-bind="tooltipProps"
              :href="url"
              target="_blank"
              variant="text"
              tabindex="-1"
              size="small"
            >
              <template #icon>
                <i-mdi-github />
              </template>
            </ve-button>
          </template>
        </ve-tooltip>
      </ve-spacer>
    </div>

    <ve-expand-transition>
      <ve-code
        v-show="isActive"
        theme="dark"
        class="mt-2 py-3 px-6"
        shape="rounded-sm"
        :code="code"
        language="vue"
        show-language
      />
    </ve-expand-transition>
  </div>
</template>
