---
meta:
  category: Data 数据展示
---

# 代码 Code

:::warning 

由于尺寸原因，Veno UI 并不把代码高亮插件内置。如果你需要使用该组件的代码高亮，请在创建实例时配置 highlighter 选项。

:::

下面的代码展示了如何设定 `prismjs` 作为代码高亮插件。

```typescript
import { createVenoUi } from 'veno-ui'
import prismjs from 'prismjs'

export default createVenoUi({
  highlighter: {
    prismjs,
    prismjsLoadLanguage: async (language: string) => {
      switch (language) {
        case 'bash':
          // @ts-ignore
          await import('prismjs/components/prism-bash.js')
          break
        // ... 其他语言的 import 
      }
    }
  },
  // ... 其他 veno-ui 选项
})
```

## 演示

:::include

basic.md highlight.md

hide-language.md line-numbers.md

highlighted-line-numbers.md

:::

## API

<<<API code