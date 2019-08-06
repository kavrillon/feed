import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import { appModule } from "./store/app";
import { RootState } from "./store/types";

Vue.config.productionTip = false;

Vue.use(Vuex);

const rootState: RootState = {
  isProd: process.env.NODE_ENV === "production"
};

export const store = new Vuex.Store({
  state: rootState,
  modules: {
    app: appModule
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
