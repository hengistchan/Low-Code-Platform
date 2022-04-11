<script setup lang="ts">
  import draggable from "vuedraggable";
  import { useEditorStore } from "@/lib";
  import ComponentWrapper from "./ComponentWrapper";
  import SlotItem from "./SlotItem.vue";

  const editorStore = useEditorStore();
  const page = computed(() => editorStore.page);

  const isDrag = ref(false);

  const onDrag = (e: any) => {
    console.log(e);
  };
</script>

<template>
  <div
    class="simulator-container"
    w="100%"
    h="[100%] min-669px"
    bg="[#ebedf1]"
    overflow="y-auto x-hidden"
    p="t-20px b-20px"
  >
    <div
      class="simulator-editor"
      w-377px
      h-669px
      m-x-auto
      bg="[#fff]"
      shadow
      overflow="x-hidden y-auto"
    >
      <page-wrapper>
        <draggable
          v-if="page && page.components"
          v-model="page!.components"
          item-key="_id"
          :group="{ name: 'components' }"
          class="main-editor darggable-area"
        >
          <template #item="{ element: outElement }">
            <component-wrapper :element="outElement">
              <template
                v-for="(value, slotKey) in outElement.props?.slots"
                :key="slotKey"
                #[slotKey]
              >
                <slot-item
                  v-model:children="outElement.children[slotKey]"
                  :slot-key="slotKey.toString()"
                ></slot-item>
              </template>
            </component-wrapper>
          </template>
        </draggable>
      </page-wrapper>
    </div>
  </div>
</template>

<style lang="scss">
  .main-editor {
    height: 100%;
  }
</style>
