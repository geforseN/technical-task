<template>
  <main class="unload-container">
    <UnloadInfoBlock class="info" />
    <div v-if="cardsResponse.data" class="cards">
      <UnloadCard v-for="card of cardsResponse.data" v-bind="card" :key="card.id" @click="selectedCard = card" />
    </div>
    <UnloadHelpBlock v-if="!selectedCard" class="right" />
    <UnloadSelectedCard v-else class="right" :card-response="cardResponse" @close="selectedCard = null" />
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
  font-size: 14px;
  line-height: 1.2;

  display: grid;
  gap: 15px;

  grid-template-areas:
    "info"
    "right"
    "cards";

  @include start-at("xslg") {
    grid-template-columns: 35% 1fr;
    grid-template-areas:
      "info right"
      "cards right";
  }
}

.info {
  grid-area: info;
}

.cards {
  grid-area: cards;
  display: grid;
  gap: 10px;
}

.right {
  grid-area: right;
  display: block;
  position: sticky;
  top: 10px;
  height: max-content;
}
</style>
