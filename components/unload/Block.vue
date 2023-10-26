<template>
  <div class="block">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default: () => any;
}>();
</script>

<style scoped>
.block {
  display: grid;
  padding: 15px;
}
</style>
