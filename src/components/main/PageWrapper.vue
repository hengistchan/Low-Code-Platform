<script setup lang="ts">
  import { useEditorStore } from "@/lib";
  const editorStore = useEditorStore();
</script>

<template>
  <div :style="editorStore.page?.props">
    <slot></slot>
  </div>
</template>
