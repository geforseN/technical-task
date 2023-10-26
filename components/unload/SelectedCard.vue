<template>
  <div v-if="cardResponse?.data && cardResponse.status === 'success'" class="selected-card">
    <div class="header base-border-radius">
      <span class="id text-bold">{{ cardResponse.data.id }}</span>
      <span class="event" v-html="cardResponse.data.event" />
      <button class="top-btn-close" @click="emit('close')"><div class="fas fa-xmark" /></button>
    </div>
    <UnloadBlock>
      <template #above>
        <div class="info base-border-radius">
          <div class="fas fa-lightbulb-on" />
          Если после клика на ссылку загрузка не пошла, проверьте, не блокирует ли браузер скачивание архива.
        </div>
      </template>
      <h2 class="heading text-bold">Ссылка для скачивания архива Выгрузки (.zip):</h2>
      <div class="link-container">
        <a class="link" :href="cardResponse.data.downloadLink">
          {{ cardResponse.data.downloadLink }}
        </a>
        <button class="btn-copy-link" @click="handleClipboardCopy(cardResponse.data.downloadLink)">
          <span class="span-link">Скопировать ссылку</span>
        </button>
      </div>
      <template #below>
        <button class="button bottom-btn-close" @click="emit('close')">Закрыть</button>
      </template>
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
.header {
  display: flex;
  height: 40px;

  .id {
    display: flex;
    padding: 10px;
    align-items: center;
    color: white;
    background-color: var(--color_primary);
  }

  .event {
    display: flex;
    align-items: center;
    background-color: #f5f5f9;
    padding: 10px;
    flex-grow: 1;
  }

  .top-btn-close {
    display: none;

    @include start-at("xslg") {
      display: block;
      background-color: var(--color_danger);
      border: 0;
      padding: 10px;
      color: white;
    }
  }
}

.link-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;

  .btn-copy-link {
    background-color: white;
    border: 0;
    padding: 0;
  }
}

.info {
  padding: 10px;
  background-color: var(--color_very_light_blue);

  .fa-lightbulb-on {
    color: var(--color_blue);
  }
}

.heading {
  font-size: 16px;
}

.info ~ .heading {
  margin-top: 5px;
}

.button.bottom-btn-close {
  display: block;
  background-color: var(--color_danger);
  padding: 10px 30px;
  color: white;
  margin-left: auto;
  margin-top: 20px;

  @include start-at("xslg") {
    display: none;
  }
}
</style>
