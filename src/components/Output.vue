<template>
  <div class="row">
    <ul v-for="item in $store.getters.formattedDateList" :key="item.id">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>
