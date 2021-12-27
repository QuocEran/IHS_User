import { createStore } from "vuex";

export default createStore({
  state: {
    NavState: "Home",
  },
  getters: {
    getNavState: (state) => {
      return state.NavState;
    },
  },
  mutations: {
    setNavState(state, res) {
      state.NavState = res;
    },
  },
  actions: {
    changeNavState({ commit }, { stateName }) {
      commit("setNavState", stateName);
    },
  },
});
