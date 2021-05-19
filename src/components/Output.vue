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
      var date = this.$store.getters.getEnteredDate;
      if (date === null) return;
      console.log(date, " new data");
      for (const item of date) {
        formattedList.push(new Date(item).toLocaleDateString("pl-PL"));
        formattedList.push(new Date(item).toLocaleDateString("hu-HU"));
      }
      console.log(formattedList);
      return formattedList;
    }
  }
};
</script>
