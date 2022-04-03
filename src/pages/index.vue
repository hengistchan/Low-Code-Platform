<script setup lang="ts">
  import LeftAside from "@/components/left-aside/index.vue";
  import RightAside from "@/components/right-aside/index.vue";
  import EditorMain from "@/components/main/index.vue";
</script>

<template>
  <el-container w="100vw" h="100vh" bg-gray-50 flex-col overflow="hidden">
    <!-- <el-header h="[var(--header-height)]" p-0 bg-gray-500>header</el-header> -->
    <el-container>
      <el-aside w="280px" h="[calc(100vh)]" bg-white-900>
        <left-aside />
      </el-aside>
      <el-main p-0>
        <editor-main />
      </el-main>
      <el-aside w="410px" h="[calc(100vh)]" bg-white-900>
        <right-aside />
      </el-aside>
    </el-container>
  </el-container>
</template>
