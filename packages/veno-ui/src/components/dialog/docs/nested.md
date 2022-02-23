:::demo

# 嵌套

嵌套的可滚动内容在子对话框弹出的时候会禁用滚动。  

```html
<ve-dialog scrollable>
  <template #activator="{ props }">
    <ve-button v-bind="props">Dialog</ve-button>
  </template>

  <ve-card #text>
    <ve-dialog scrollable>
      <template #activator="{ props }">
        <ve-button v-bind="props" color="primary">Dialog</ve-button>

        <template v-for="i in 100">占位专用文字</template>
      </template>
      
      <ve-card height="200" #text>
        <template v-for="i in 100">占位专用文字</template>
      </ve-card>
    </ve-dialog>
  </ve-card>
</ve-dialog>
```

:::