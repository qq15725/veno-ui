:::demo

# 个人名片

```html
<ve-card
  subtitle="微信号：xxxxxx"
  append-avatar="https://thirdwx.qlogo.cn/mmopen/vi_32/YugUUXsBpKgAeq2uANt0hg6F2pygbGnc61HW7WYRKdu2pXQVXm3U62HPjOPia9HCOMoia6goFZyRAjR7ZJOxibLibw/132"
>
  <template #title>
    <span>艺术家</span>
    <ve-icon
      right
      color="info"
      size="xs"
      icon="svg:M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
    />
  </template>

  <ve-divider />

  <VeCardText>
    <span class="text-grey mr-3">地 区</span>
    <span>湖南 长沙</span>
  </VeCardText>

  <template #actions>
    <ve-spacer />
    <ve-button
      class="mr-3"
      variant="text"
      icon="svg:M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"
    />
    <ve-button
      variant="text"
      icon="svg:M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z"
    />
  </template>
</ve-card>
```

:::