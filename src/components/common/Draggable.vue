<script setup lang="ts">
  import { useVModel } from "@vueuse/core";

  const props = defineProps({
    modelValue: {
      type: Array,
      default: () => [],
    },
    drag: {
      type: Boolean,
      default: false,
    },
    itemKey: {
      type: String,
      default: "_id",
    },
    group: {
      type: [Object, String],
      default: () => ({ name: "components" }),
    },
  });

  const emits = defineEmits(["update:modelValue", "update:drag"]);
  const list = useVModel(props, "modelValue", emits);
  const isDrag = useVModel(props, "drag", emits);

  const draggableRef = ref<HTMLDivElement | null>();

  onMounted(() => {
    console.log(draggableRef);
  });
</script>

<template>
  <div ref="draggableRef"> </div>
</template>
