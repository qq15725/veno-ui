:::demo

# 槽

列间距 gutter 分为 `xs`、`sm`、`md`、`lg`、`xl`（默认）、`xxl` 6种预设值，也可以填写自定义数值。

```html
<ve-row gutter="xs">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>

<ve-row gutter="sm">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>

<ve-row gutter="md">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>

<ve-row gutter="lg">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>

<ve-row gutter="xl">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>

<ve-row gutter="xxl">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>

<ve-row gutter="40">
  <ve-col v-for="k in 3" :key="k">
    <ve-paper width="100%" height="30" color="grey-300" />
  </ve-col>
</ve-row>
```

:::