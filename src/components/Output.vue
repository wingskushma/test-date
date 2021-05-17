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
      //localStorage.clear();
      const enteredDate = this.$store.getters.getEnteredDate;
      var old = localStorage.getItem("dataEnteredList");
      console.log(old, " old data");
      if (old === null) {
        localStorage.setItem("dataEnteredList", enteredDate);
      } else {
        localStorage.setItem("dataEnteredList", old + "," + enteredDate);
      }
      var updatedData = localStorage.getItem("dataEnteredList").split(",");
      console.log(updatedData, " new data");
      for (const item of updatedData) {
        formattedList.push(new Date(item).toLocaleDateString("pl-PL"));
        formattedList.push(new Date(item).toLocaleDateString("hu-HU"));
      }
      console.log(formattedList);
      return formattedList;
    },
  },
};
</script>
