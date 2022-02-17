---
meta:
  category: 开发指南
  title: 暗色模式
---

# 暗色模式

所有组合了 `paper` 或者 `theme` 的组件都有 `theme` 属性，可以设置为 `dark` 或者 `light` (默认)。

---

## 切换模式

可以通过最上层的 `ve-app` 的 `theme` 属性切换下面所有组件的暗色模式。

```vue
<ve-app theme="dark">
  <router-view />
</ve-app>
```


