<template>
  <div class="row">
    <ul v-for="item in formattedDateList" :key="item.id">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    formattedDateList() {
      let formattedList = [];
      const enteredDate = this.$store.getters.getEnteredDate;
      formattedList.push(new Date(enteredDate).toLocaleDateString("pl-PL"));
      formattedList.push(new Date(enteredDate).toLocaleDateString("hu-HU"));
      console.log(formattedList);
      return formattedList;
    },
  },
};
</script>
