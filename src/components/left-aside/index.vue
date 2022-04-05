<script setup lang="ts">
  const activedTab = ref("component-list");
</script>

<template>
  <div class="editor-left-aside" pos="relative">
    <el-tabs v-model="activedTab" class="tabs">
      <el-tab-pane label="组件列表" name="component-list">
        <component-list />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
