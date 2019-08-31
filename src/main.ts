import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import initState from "./store/state";
import { mutations } from "./store/mutations";
import { actions } from "./store/actions";
import { RootState } from "./store/types";

import "@/assets/scss/global.scss";

Vue.config.productionTip = false;

Vue.use(Vuex);
const vuexLocalStorage = new VuexPersist({
  key: "feed",
  storage: window.localStorage,
  // Whitelisting
  reducer: (state: RootState) => ({
    darkMode: state.darkMode
  })
});

export const store = new Vuex.Store({
  state: initState(),
  mutations,
  actions,
  plugins: [vuexLocalStorage.plugin]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
