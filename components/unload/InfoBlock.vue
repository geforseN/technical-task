<template>
  <UnloadBlock>
    <template #heading><h2 class="text-bold">Выгрузка</h2></template>
    <h5 class="text-bold">Выполняет работу:</h5>
    <ul>
      <li>Собирает фотографии из заказов пользователей.</li>
      <li>Выгружает по папкам.</li>
    </ul>
  </UnloadBlock>
</template>

<style lang="scss" scoped>
h2.text-bold {
  font-size: 18px;

  @include start-at("xslg") {
    font-size: 20px;
  }
}

h5 {
  margin: 2px 1px;
  padding: 0;
}

ul {
  margin: 0 1px;
  padding-left: 0;
  list-style-type: "-";
  list-style-position: inside;
}
</style>
