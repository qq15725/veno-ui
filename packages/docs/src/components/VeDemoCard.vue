<script setup lang="ts">
import { computed, ref } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', xml)

const props = defineProps<{
  title: string,
  code: string,
}>()

const highlightedCode = computed(() => hljs.highlight(
    decodeURIComponent(props.code),
    { language: 'html' }
).value)

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
      <slot />
    </template>

    <code v-if="isActive" class="hljs">
      <pre v-html="highlightedCode" />
    </code>
  </ve-card>
</template>

<style>
.hljs {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  font-size: 14px;
  font-family: v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace;
  color: #C9D1D9;
  background: #0D1117;
}

.hljs-doctag, .hljs-keyword, .hljs-meta .hljs-keyword, .hljs-template-tag, .hljs-template-variable, .hljs-type, .hljs-variable.language_ {
  color: #FF7B72;
}

.hljs-title, .hljs-title.class_, .hljs-title.class_.inherited__, .hljs-title.function_ {
  color: #D2A8FF
}

.hljs-attr, .hljs-attribute, .hljs-literal, .hljs-meta, .hljs-number, .hljs-operator, .hljs-selector-attr, .hljs-selector-class, .hljs-selector-id, .hljs-variable {
  color: #79C0FF;
}

.hljs-meta .hljs-string, .hljs-regexp, .hljs-string {
  color: #A5D6FF;
}

.hljs-built_in, .hljs-symbol {
  color: #FFA657;
}

.hljs-code, .hljs-comment, .hljs-formula {
  color: #8B949E;
}

.hljs-name, .hljs-quote, .hljs-selector-pseudo, .hljs-selector-tag {
  color: #7EE787;
}

.hljs-subst {
  color: #C9D1D9;
}

.hljs-section {
  color: #1F6FEB;
  font-weight: 700;
}

.hljs-bullet {
  color: #F2CC60;
}

.hljs-emphasis {
  color: #C9D1D9;
  font-style: italic;
}

.hljs-strong {
  color: #C9D1D9;
  font-weight: 700;
}

.hljs-addition {
  color: #AFF5B4;
  background-color: #033A16;
}

.hljs-deletion {
  color: #FFDCD7;
  background-color: #67060C;
}
</style>