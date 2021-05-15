<template>
  <div class="row">
    <ul v-for="item in formattedDate" :key="item.id">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Output",
  props: ["formattedDate"],
};
</script>
