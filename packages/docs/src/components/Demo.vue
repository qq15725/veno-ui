<script lang="ts">
  import { defineComponent, ref, toRef, watch } from 'vue'
  import { useAppStore } from '@/stores/app'
  import { useUserStore } from '@/stores/user'

  export default defineComponent({
    name: 'Demo',

    props: {
      title: String,
      slug: String,
      file: String,
      code: String,
    },

    setup (props) {
      const btn = ref()
      const { repositoryBaseURL } = useAppStore()
      const user = useUserStore()
      const theme = ref(user.theme)

      watch(toRef(user, 'theme'), userTheme => {
        theme.value = userTheme
      })

      return {
        ...props,
        repositoryBaseURL,
        theme,
        isActive: ref(false),
        btn,
        focusBtn: () => {
          setTimeout(() => btn.value?.$el?.focus?.(), 0)
        }
      }
    }
  })
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
            #activator="{ props }"
            :text="isActive ? '隐藏源代码' : '查看源代码'"
            :open-delay="300"
            anchor="top"
        >
          <ve-button
              v-bind="props"
              @click="isActive = !isActive"
              :color="isActive ? 'primary' : undefined"
              icon="mdi-code-tags"
              variant="text"
              size="small"
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
              icon="mdi-image-filter-center-focus-strong-outline"
              variant="text"
              tabindex="-1"
              size="small"
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
              :icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
              variant="text"
              tabindex="-1"
              size="small"
          />
        </ve-tooltip>

        <ve-tooltip
            #activator="{ props: tooltipProps }"
            text="在 GitHub 中查看源代码"
            :open-delay="300"
            anchor="top"
        >
          <ve-button
              v-bind="tooltipProps"
              :href="`${ repositoryBaseURL }${ file }`"
              target="_blank"
              icon="mdi-github"
              variant="text"
              tabindex="-1"
              size="small"
          />
        </ve-tooltip>
      </ve-spacer>
    </div>

    <ve-expand-transition>
      <ve-code
          v-if="isActive"
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