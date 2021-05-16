<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <Input @pass-input-date="passInputDate($event)" />
      </div>
      <div class="row">
        <Output :givenInput="givenInput"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input.vue";
import Output from "@/components/Output.vue";

export default {
  data: function () {
    return {
      givenInput: "1991-10-12",
    };
  },
  name: "Home",
  components: {
    Input,
    Output,
  },
  methods: {
    passInputDate(val) {
      this.givenInput = val;
      console.log(val);
      console.log("test "+ this.givenInput);
    },
  },
};
</script>

<style>
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
