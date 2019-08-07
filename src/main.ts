import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import initState from "./store/state";
import { mutations } from "./store/mutations";
import { actions } from "./store/actions";

Vue.config.productionTip = false;

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: initState(),
  mutations,
  actions
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
