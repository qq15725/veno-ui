:::demo
# 基本用法

```html
<ve-radio-group
  label="Density"
  label-width="100"
  v-model="density"
  :hide-details="hideDetails"
  :density="density"
>
  <ve-radio label="compact" />
  <ve-radio label="comfortable" />
  <ve-radio label="medium" />
</ve-radio-group>

<ve-switch
  label="HideDetails"
  label-width="100"
  v-model="hideDetails"
  :hide-details="hideDetails"
  :density="density"
/>

<ve-input 
  label="Input" 
  label-width="100" 
  placeholder="请输入"
  :hide-details="hideDetails"
  :density="density"
/>

<ve-select
  label="Select" 
  label-width="100"
  placeholder="请选择"
  :items="[
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 },
    { label: '选项3', value: 3 },
  ]"
  :hide-details="hideDetails"
  :density="density"
/>

<ve-switch 
  label="Switch" 
  label-width="100"
  :hide-details="hideDetails"
  :density="density"
/>

<ve-checkbox 
  label="Checkbox" 
  label-width="100"
  :hide-details="hideDetails"
  :density="density"
>
  Checkbox One
</ve-checkbox>

<ve-radio-group 
  label="Radio" 
  label-width="100"
  :hide-details="hideDetails"
  :density="density"
>
  <ve-radio true-value="1">Radio One</ve-radio>  
  <ve-radio true-value="2">Radio Two</ve-radio>  
</ve-radio-group>

<ve-form-item
  label-width="100"
  :hide-details="hideDetails"
  :density="density"
>
  <ve-button>提交</ve-button>
</ve-form-item>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      hideDetails: ref(false),
      density: ref('medium'),
    }
  }
})
```

:::