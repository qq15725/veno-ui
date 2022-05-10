<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'PaletteJavascriptColors',

    computed: {
      colors () {
        return this.$veno.theme.themes[this.$veno.theme.current].colors
      }
    }
  })
</script>

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
          <template
              v-for="hue in [
                null,
                '50', '100', '200', '300', '400',
                '500', '600', '700', '800', '900',
              ]"
          >
            <ve-hover #default="{ props, hover }">
              <ve-list-item
                  v-bind="props"
                  @click=""
                  :class="hue ? `bg-${item.color}-${hue}` : `bg-${item.color}`"
                  :title="hue ? `${item.color}-${hue}` : item.color"
                  :style="hover ? 'transform: scale(1.05); z-index: 100;' : undefined"
                  #append
              >
                <div class="text-caption">{{ colors[hue ? `${ item.color }-${ hue }` : item.color] }}</div>
              </ve-list-item>
            </ve-hover>
          </template>
        </ve-list>
      </ve-col>
    </ve-row>
  </ve-container>
</template>