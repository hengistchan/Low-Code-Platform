<template>
  <div>Hello World! --- {{ component._id }}</div>
</template>

<script setup lang="ts">
  import type { Component } from "@/lib";
  import { PropType } from "vue";

  const props = defineProps({
    component: {
      type: Object as PropType<Component>,
      required: true,
    },
  });

  const { component } = toRefs(props);
</script>
