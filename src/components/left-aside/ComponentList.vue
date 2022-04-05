<script setup lang="ts">
  // import componentModules from "@/packages";
  // import { first } from "lodash";

  // const activedName = ref(first(componentModules)?.name);
  const activedName = ref();
</script>

<template>
  <div>
    <!-- <el-collapse v-model="activedName" mb-35px overflow="y-hidden">
      <el-collapse-item
        v-for="item in componentModules"
        :key="item.name"
        :title="item.label"
        :name="item.name"
      >
        <template #title>
          <component :is="item.icon" />
          <div pl-8px font-600>{{ item.label }}</div>
        </template>
        <template #default> 123 </template>
      </el-collapse-item>
    </el-collapse> -->
  </div>
</template>
