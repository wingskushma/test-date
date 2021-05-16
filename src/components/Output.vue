<template>
  <div class="row">
    <ul v-for="item in formattedDate" :key="item.id">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["givenInput"],
  computed: {
    formattedDate() {
      let formattedList = [];
      console.log(this.givenInput);
      console.log(this.givenInput);
      formattedList.push(
        new Date(this.givenInput).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
      formattedList.push(
        new Date(this.givenInput).toLocaleDateString("en-NP", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
      formattedList.push(
        new Date(this.givenInput).toLocaleDateString("en-NP", {
          day: "numeric",
          month: "2-digit",
          year: "2-digit",
        })
      );
      formattedList.push(new Date(this.givenInput).toLocaleDateString("pl-PL"));
      formattedList.push(new Date(this.givenInput).toLocaleDateString("hu-HU"));
      formattedList.push(
        new Date(this.givenInput).toLocaleDateString("en-NP", {
          timeZone: "America/New_York",
        })
      );
      return formattedList;
    },
  },
};
</script>
