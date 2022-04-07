<script setup lang="ts">
  import { loadAllComponent, componentCreater, useEditorStore } from "@/lib";
  import type { EditorComponent, CachedComponentModule } from "@/lib";
  import { cloneDeep, values } from "lodash";
  import draggable from "vuedraggable";

  let modulesList = shallowRef<CachedComponentModule[]>();
  const activedName = ref("text");
  const editorStore = useEditorStore();

  onMounted(async () => {
    const componentModules = await loadAllComponent();
    modulesList.value = values(componentModules);
  });

  const clone = (component: EditorComponent) => {
    const clonedComponent = componentCreater(cloneDeep(component));
    editorStore.addComponent(clonedComponent);
    return clonedComponent;
  };
</script>

<template>
  <div>
    <el-collapse v-model="activedName" mb-35px overflow="y-hidden">
      <el-collapse-item
        v-for="item in modulesList"
        :key="item.name"
        :title="item.label"
        :name="item.name"
      >
        <template #title>
          <component :is="item.icon" />
          <div pl-8px font-600>{{ item.label }}</div>
        </template>
        <template #default>
          <draggable
            v-model="item.components"
            item-key="label"
            :sort="false"
            :group="{ name: 'components', pull: 'clone', put: false }"
            :clone="clone"
            class="component-list"
          >
            <template #item="{ element: component }">
              <div
                w-110px
                h-25px
                leading-25px
                flex="~ items-center content-center"
                pl-10px
                mt-5px
                hover="rounded-5px bg-[#f0f0f0] cursor-pointer"
              >
                <component :is="component.icon" text="15px" align-top />
                <div
                  w="100%"
                  display-inline-block
                  align-top
                  pl-5px
                  leading-26px
                  h-25px
                >
                  {{ component.label }}
                </div>
              </div>
            </template>
          </draggable>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style>
  .component-list {
    @apply flex justify-start w-240px my-10px mx-0 py-0 px-20px flex-wrap;
  }
</style>
