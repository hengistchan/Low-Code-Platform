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
          >
            <template #item="{ element: component }">
              <div>
                <component :is="component.icon" />
                <div>
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
