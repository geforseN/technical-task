<template>
  <div class="block">
    <slot name="above" />
    <slot name="heading" />
    <slot />
    <slot name="below" />
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  above?: () => any;
  heading?: () => any;
  default: () => any;
  below?: () => any;
}>();
</script>

<style lang="scss" scoped>
.block {
  display: grid;
  padding: 15px;
}
</style>
