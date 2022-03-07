:::demo

# 图标和头像

`prepend-icon` - 前置图标、`prepend-avatar` - 前置头像、`append-icon` - 后置图标、`append-avatar` - 后置头像。

```html
<ve-list width="200" elevation="8">
  <ve-list-item prepend-icon="mdi-email-outline" title="邮件" value="邮件" link />
  <ve-list-item prepend-icon="mdi-email-open-outline" title="草稿" value="草稿" link />
  <ve-divider class="my-2" />
  <ve-list-item prepend-avatar="https://avatars.githubusercontent.com/u/19576382" append-icon="mdi-email-plus-outline" title="艺术家" link />
</ve-list>
```

:::