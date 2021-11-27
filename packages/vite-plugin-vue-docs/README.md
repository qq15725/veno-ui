# @veno-ui/vite-plugin-vue-docs

Markdown 生成由 VenoUI 组件渲染的文档

## 使用

```tsx
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDocs from '@veno-ui/vite-plugin-vue-docs'

export default defineConfig({
  plugins: [
    vueDocs(), 
    vue()
  ],
})
```

## Roadmap

- [x] 解析 .md 文件，生成 Usage 用法。
- [ ] 解析 .tsx 文件，生成 Props 参数。
- [ ] 运行 Puppeteer 调用 Chrome 截图 .md 用例，生成 Preview 预览。

## 参考

- [Vite + React 组件开发实践](https://mp.weixin.qq.com/s/owJX7VwN9T9hEcp7TPseUA)
- [一个好的组件应该是什么样的？](https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&mid=2247495519&idx=1&sn=810ad0e6bde08e795bd7f933d8c6b53b&chksm=e92ad250de5d5b463ff175a616dee00daa9f28cca972ffbcb5f013940c6c13391c2a1e20cfd1&scene=21#wechat_redirect)