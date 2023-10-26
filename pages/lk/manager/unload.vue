<template>
  <main class="unload-container">
    <div class="left">
      <UnloadInfoBlock />
      <template v-if="cardsResponse.data">
        <UnloadCard v-for="card of cardsResponse.data" v-bind="card" :key="card.id" @click="selectedCard = card" />
      </template>
    </div>
    <div class="right">
      <UnloadHelpBlock v-if="!selectedCard" />
      <UnloadSelectedCard v-else :card-response="cardResponse" @close="selectedCard = null" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Card } from "#imports";

const cardResponse = ref();
const selectedCard = ref<Card | null>(null);

watch(selectedCard, async selectedCard => {
  if (selectedCard === null) {
    return;
  }
  cardResponse.value = await useApiCard(selectedCard);
});

const cardsResponse = ref(await useApiCards());
</script>

<style lang="scss" scoped>
.unload-container {
  display: flex;
  position: sticky;
  top: 10px;
  left: 0;
  gap: 15px;
  font-size: 14px;
  line-height: 1.2;
}

.left {
  width: 35%;
  display: grid;
  gap: 10px;
}

.right {
  width: 65%;
}
</style>
