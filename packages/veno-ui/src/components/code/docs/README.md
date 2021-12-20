---
category: 数据展示
---

# 代码 Code

## 配置代码高亮插件

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