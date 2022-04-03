<script setup lang="ts"></script>

<template>
  <el-container w="100%" h="[calc(100vh)]">
    <el-header
      h="[var(--toolbar-height)]"
      border="solid b-2px [#e4e7ed]"
    ></el-header>
    <el-main p-0 h="[calc(100vh-var(--header-height)-var(--footer-height))]">
      <simulator-editor />
    </el-main>
    <el-footer
      h="[var(--footer-height)]"
      text="gray-600 center"
      border="t-1px solid gray-300"
    >
      made by HJ
    </el-footer>
  </el-container>
</template>
