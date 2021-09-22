# 大小

```html
<ve-btn
  v-for="(size, index) in ['x-small', 'small', 'default', 'large', 'x-large']"
  :key="index"
  :size="size"
  style="margin-right: 10px;"
>
  {{ size }}
</ve-btn>
```