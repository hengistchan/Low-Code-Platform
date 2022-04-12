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

  const slotChildren = useVModel(props, "children", emits);
</script>

<template>
  <draggable
    v-model="slotChildren"
    class="inner-draggable-area"
    item-key="_id"
    :group="{ name: 'components' }"
    data-slot="`拖拽组件到此处`"
    :class="{ slot: !slotChildren.length }"
  >
    <template #item="{ element: innerElement }">
      <ComponentWrapper :element="innerElement">
        <template
          v-for="(value, slotKey) in innerElement.props?.slots"
          :key="slotKey"
          #[slotKey]
        >
          <slot-item
            v-model:children="innerElement.children[slotKey]"
            :slot-key="slotKey.toString()"
          ></slot-item>
        </template>
      </ComponentWrapper>
    </template>
  </draggable>
</template>

<style lang="scss">
  .inner-draggable-area {
    @apply relative min-h-40px;

    &.slot::after {
      @apply absolute top-0 right-0 flex h-auto min-h-40px text-12px text-[#8591a2] text-center bg-[#f6f7f980] content-["拖拽组件到此处"] flex-col justify-center w-[100%];
      outline: 1px dashed #dedede;
      outline-offset: -1px;
    }
  }
</style>
