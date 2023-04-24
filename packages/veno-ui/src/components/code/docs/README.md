---
meta:
  category: Data 数据展示
---

# 代码 Code

:::warning

由于尺寸原因，Veno UI 并不把语法高亮插件内置。请在创建实例时配置 highlighter 选项。

:::

## 注册语法高亮器

### 使用 shiki 的示例

```typescript
import { createVeno } from 'veno-ui'
import { getHighlighter, setCDN } from 'shiki'

setCDN('https://cdn.jsdelivr.net/npm/shiki')
// setCDN('https://unpkg.com/shiki')

export default createVeno({
  highlighter: {
    type: 'shiki',
    shiki: getHighlighter({
      theme: 'material-palenight',
      langs: ['html', 'vue', 'vue-html', 'ts', 'js', 'json', 'shell'],
    }),
  }
})
```

### 使用 prismjs 的示例

```typescript
import { createVeno } from 'veno-ui'
import prismjs from 'prismjs'
// import 'prismjs/components/prism-typescript.js'
// ...

export default createVeno({
  highlighter: {
    type: 'prismjs',
    prismjs,
  },
})
```

## 演示

:::include

basic.md

inline.md

color.md

show-language.md

show-line-numbers.md

highlighted-line-numbers.md

:::

## API

<<<API code
