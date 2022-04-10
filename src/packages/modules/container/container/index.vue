<template>
  <div style="height: 100px; background: red">
    <slot />
  </div>
</template>

<script setup lang="ts">
  const slots = useSlots();
  console.log(slots);
</script>
