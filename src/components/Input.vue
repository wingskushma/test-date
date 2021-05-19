<template>
  <h2 for="title">Input the date:</h2>
  <input
    v-model="inputDate"
    type="text"
    id="date"
    name="date"
    placeholder="Enter the date in ISO format"
  />
</template>

<script>
export default {
  data() {
    return {
      inputDate: null
    };
  },
  mounted() {
    this.$store.dispatch("syncLocalstorageToState");
  },
  methods: {
    isValidDate(str) {
      return /\d{4}-\d{2}-\d{2}/.test(str);
    }
  },
  watch: {
    inputDate() {
      if (this.isValidDate(this.inputDate))
        this.$store.dispatch("addDate", this.inputDate);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Style inputs, select elements and textareas */
input[type="text"] {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
h2 {
  color: rgb(10, 63, 109);
}
</style>
