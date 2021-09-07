<script setup>

</script>

<template>
  <ve-container>
    <h2 class="mb-5">分割线 Divider</h2>

    <h3 class="mb-5">演示</h3>

    <ve-row>
      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>基础</ve-card-title>
          <ve-card-text>
            分割线分割线分割线
            <ve-divider></ve-divider>
            分割线分割线分割线
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>文本</ve-card-title>
          <ve-card-text>
            分割线分割线分割线
            <ve-divider>中间</ve-divider>
            分割线分割线分割线
          </ve-card-text>
        </ve-card>
      </ve-col>

      <ve-col :cols="6">
        <ve-card>
          <ve-card-title>虚线</ve-card-title>
          <ve-card-text>
            <ve-divider dashed>中间</ve-divider>
          </ve-card-text>
        </ve-card>
      </ve-col>
    </ve-row>
  </ve-container>
</template>