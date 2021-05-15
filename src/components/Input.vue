<template>
  <div class="container">
    <div class="row">
      <h2 for="title">Input the date:</h2>
      <input
        v-model="inputDate"
        type="text"
        id="date"
        name="date"
        placeholder="Enter the date in ISO format"
      />
    </div>
    <Output :formattedDate="formattedDate" />
  </div>
</template>

<script>
import Output from "@/components/Output.vue";

export default {
   components: {
    Output,
  },
  data: function () {
    return {
      inputDate: "1991-10-12",
    };
  },
  watch: {
    inputDate(val) {
      console.log("teest");
    },
  },
  computed: {
    formattedDate() {
      let formattedList = [];
      console.log(this.inputDate);
      console.log(this.inputDate);
      formattedList.push(
        new Date(this.inputDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
      formattedList.push(
        new Date(this.inputDate).toLocaleDateString("en-NP", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
      formattedList.push(
        new Date(this.inputDate).toLocaleDateString("en-NP", {
          day: "numeric",
          month: "2-digit",
          year: "2-digit",
        })
      );
      formattedList.push(new Date(this.inputDate).toLocaleDateString("pl-PL"));
      formattedList.push(new Date(this.inputDate).toLocaleDateString("hu-HU"));
      formattedList.push(
        new Date(this.inputDate).toLocaleDateString("en-NP", {
          timeZone: "America/New_York",
        })
      );
      return formattedList;
    },
  },
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

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
