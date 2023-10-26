<template>
  <div v-if="cardResponse?.data && cardResponse.status === 'success'" class="selected-card">
    <div class="header base-border-radius">
      <span class="id text-bold">{{ cardResponse.data.id }}</span>
      <span class="event" v-html="cardResponse.data.event" />
      <button class="close-selected-card-btn" @click="emit('close')"><div class="fas fa-xmark" /></button>
    </div>
    <UnloadBlock data-color="light-purple">
      <div class="info base-border-radius">
        <div class="fas fa-lightbulb-on" />
        Если после клика на ссылку загрузка не пошла, проверьте не блокирует ли браузер скачивание архива.
      </div>
      <div>
        <h2 class="download-link-label text-bold">Ссылка для скачивания архива Выгрузки (.zip):</h2>
        <div class="download-link-container">
          <a class="link" :href="cardResponse.data.downloadLink">
            {{ cardResponse.data.downloadLink }}
          </a>
          <button class="copy-download-link-btn" @click="handleClipboardCopy(cardResponse.data.downloadLink)">
            <span class="span-link">Скопировать ссылку</span>
          </button>
        </div>
      </div>
    </UnloadBlock>
  </div>
</template>

<script lang="ts" setup>
import type { UnwrapRef } from "nuxt/dist/app/compat/capi";
import type { useApiCard } from "#imports";

const props = defineProps<{ cardResponse: UnwrapRef<Awaited<ReturnType<typeof useApiCard>>> }>();
const { cardResponse } = toRefs(props);

const emit = defineEmits<{ close: [] }>();

function handleClipboardCopy(value: string) {
  navigator.clipboard.writeText(value);
}
</script>

<style lang="scss" scoped>
.download-link-label {
  font-size: 16px;
}

.selected-card {
  position: sticky;
  top: 20px;
}

.fa-lightbulb-on {
  color: var(--color_blue);
}
.id {
  display: flex;
  padding: 10px;
  align-items: center;
  color: white;
  background-color: var(--color_primary);
}

.download-link-container {
  display: flex;
  gap: 10px;
}

.header {
  display: flex;
  height: 40px;
}
.info {
  padding: 10px;
  background-color: var(--color_very_light_blue);
}

.event {
  display: flex;
  align-items: center;
  background-color: #f5f5f9;
  padding: 10px;
  flex-grow: 1;
}

.close-selected-card-btn {
  background-color: var(--color_danger);
  border: 0;
  padding: 10px;
  color: white;
}

.block {
  gap: 10px;
}

.copy-download-link-btn {
  background-color: white;
  border: 0;
}
</style>
