<script setup lang="ts">
  const activedTab = ref("attribute");
</script>

<template>
  <div class="editor-right-aside" pos="relative">
    <el-tabs v-model="activedTab" class="tabs">
      <el-tab-pane label="属性和样式" name="attribute"> </el-tab-pane>
      <el-tab-pane label="事件" name="event"> </el-tab-pane>
      <el-tab-pane label="页面" name="page"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
