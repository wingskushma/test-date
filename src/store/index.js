import { createStore } from "vuex";

export default createStore({
  state: {
    dateStore: {
      enteredDate: "1991-12-15",
    },
  },
  getters: {
    formattedDateList: (state) => {
      let formattedList = [];
      formattedList.push(
        new Date(state.dateStore.enteredDate).toLocaleDateString("pl-PL")
      );
      formattedList.push(
        new Date(state.dateStore.enteredDate).toLocaleDateString("hu-HU")
      );
      return formattedList;
    },
  },
  mutations: {
    changeDate(state, payload){
      state.dateStore.enteredDate = payload;
    },
  },
  actions: {},
  modules: {},
});
