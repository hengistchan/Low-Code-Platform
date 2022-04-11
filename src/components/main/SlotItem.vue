<script setup lang="ts">
  import draggable from "vuedraggable";
  import { useVModel } from "@vueuse/core";
  import ComponentWrapper from "./ComponentWrapper";
  import type { PropType } from "vue";
  import type { Component } from "@/lib";

  const props = defineProps({
    slotKey: {
      type: String,
      default: "default",
    },
    children: {
      type: Array as PropType<Component[]>,
      default: () => [],
    },
  });

  const emits = defineEmits(["update:children"]);

  const slotChidren = useVModel(props, "children", emits);
</script>

<template>
  <draggable
    v-model="slotChidren"
    class="inner-draggable-area"
    item-key="_id"
    :group="{ name: 'components' }"
    data-slot="1"
  >
    <template #item="{ element: innerElement }">
      <ComponentWrapper :element="innerElement" />
    </template>
  </draggable>
</template>
