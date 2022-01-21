:::demo

# 自定义预设图标

```ts
import { createVenoUi } from 'veno-ui'

const venoUi = createVenoUi({
  // 自定义预设图标集合
  icons: {
    aliases: {
      light: 'M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z'
    }
  },
  // ...其他选项
})

export default venoUi
```

使用 `@veno-ui/vite-plugin-svg` 。

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Svg from '@veno-ui/vite-plugin-svg'

export default defineConfig({
  plugins: [
    Svg(),
    Vue()
  ],
})
```

导入 `svg` 成 `vue` 组件

```ts
import { createVenoUi } from 'veno-ui'
import { SvgIcon, ComponentIcon } from 'veno-ui/components'
import Sunny from '@/svgs/sunny.svg'

const venoUi = createVenoUi({
  // 自定义预设图标集合
  icons: {
    sets: {
      aliases: {
        light: 'M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z',
        // 可以自己通过 import.meta.globEager 导入 svg 生成 aliases 
        sunny: Sunny
      }
    }
  },
  // ...其他选项
})

export default venoUi
```

:::