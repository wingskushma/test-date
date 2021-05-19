import { createStore } from "vuex";

export default createStore({
  state: {
    dateStore: {
      enteredDates: []
    }
  },
  getters: {
    getEnteredDate: state => {
      return state.dateStore.enteredDates;
    }
  },
  mutations: {
    updateDate(state, dates) {
      state.dateStore.enteredDates = dates;
    }
  },
  actions: {
    addDate(ctx, date) {
      let storedDates = JSON.parse(localStorage.getItem("dates")) || [];
      storedDates.push(date);
      localStorage.setItem("dates", JSON.stringify(storedDates));
      ctx.commit("updateDate", storedDates);
    },
    syncLocalstorageToState(ctx) {
      const storedDates = JSON.parse(localStorage.getItem("dates")) || [];
      localStorage.setItem("dates", JSON.stringify(storedDates));
      ctx.commit("updateDate", storedDates);
    }
  },
  modules: {}
});
