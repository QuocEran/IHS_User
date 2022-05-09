import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default createStore({
  state: {
    NavState: "Home",
    userInfo: null,
    deviceInfo: null,
  },
  getters: {
    getNavState: (state) => {
      return state.NavState;
    },
    getUserInfo: (state) => {
      return state.userInfo;
    },
    getDeviceInfo: (state) => {
      return state.deviceInfo;
    },
  },
  mutations: {
    setNavState(state, res) {
      state.NavState = res;
    },
    saveUserInfo(state, res) {
      state.userInfo = res;
    },
    saveDeviceInfo(state, res) {
      state.deviceInfo = res;
    },
  },
  actions: {
    changeNavState({ commit }, { stateName }) {
      commit("setNavState", stateName);
    },
    saveUserInfo({ commit }, { userInfo }) {
      commit("saveUserInfo", userInfo);
    },
    saveDeviceInfo({ commit }, { deviceInfo }) {
      commit("saveDeviceInfo", deviceInfo);
    },
  },
  plugins: [vuexLocal.plugin],
});
