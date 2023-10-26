<template>
  <unload-block>
    <p v-html="props.taskDate" />
    <p>
      Статус задачи: <span class="text-bold">{{ props.statusText }}</span>
    </p>
    <p>
      ID выгрузки: <span class="text-bold">{{ props.id }}</span>
    </p>
    <p v-html="props.event" />
    <p>
      Размер выгрузки: <span class="text-bold">{{ props.size }}</span>
    </p>
  </unload-block>
</template>

<script lang="ts" setup>
import type { Card } from "#imports";

const props = defineProps<Card>();

const statusColor = computed(() => (props.status === "green" ? "var(--color_success)" : "var(--color_danger)"));
</script>

<style lang="scss" scoped>
.block {
  border-left: 10px solid v-bind(statusColor);
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  font-size: 14px;
}
</style>
