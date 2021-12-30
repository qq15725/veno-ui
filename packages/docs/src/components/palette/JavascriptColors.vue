<template>
  <ve-container>
    <ve-row>
      <ve-col
          v-for="(item, index) in [
            { title: 'Primary / 主题色', color: 'primary' },
            { title: 'Secondary / 副色', color: 'secondary' },
            { title: 'Success / 成功', color: 'success' },
            { title: 'Warning / 警告', color: 'warning' },
            { title: 'Error / 错误', color: 'error' },
            { title: 'Info / 信息', color: 'info' },
          ]"
          :key="index"
          cols="4"
      >
        <ve-list style="overflow: initial;">
          <ve-list-subheader class="justify-center text-h4">{{ item.title }}</ve-list-subheader>
          <ve-list-item
              v-for="i in 4" :key="i"
              :class="`bg-${item.color}-n${5 - i}`"
              :title="`${item.color}-n${5 - i}`"
          />
          <ve-list-item
              :class="`bg-${item.color}`"
              :title="`${item.color}`"
              style="transform: scale(1.05);"
              #append
          >
            {{ colors[item.color] }}
          </ve-list-item>
          <ve-list-item
              v-for="i in 4" :key="i"
              :class="`bg-${item.color}-${i}`"
              :title="`${item.color}-${i}`"
          />
        </ve-list>
      </ve-col>
    </ve-row>
  </ve-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PaletteJavascriptColors',

  computed: {
    colors () {
      return this.$venoUi.theme.themes[this.$venoUi.theme.current].colors
    }
  }
})
</script>