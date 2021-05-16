import { createStore } from "vuex";

export default createStore({
  state: {
    dateStore: {
      enteredDate: "1991-12-15",
    },
  },
  getters: {
    getEnteredDate: (state) => {
      return state.dateStore.enteredDate;
    },
  },
  _mutations: {
    changeDate(state, payload) {
      state.dateStore.enteredDate = payload;
    },
  },
  get mutations() {
    return this._mutations;
  },
  set mutations(value) {
    this._mutations = value;
  },
  actions: {},
  modules: {},
});
