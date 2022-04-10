<template>
  <div>Hello World!</div>
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

  const {} = toRefs(props);
</script>
