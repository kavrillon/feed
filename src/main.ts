import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import "./registerServiceWorker";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:lang",
      name: "home",
      component: Home
    }
  ]
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  loadLanguageAsync(lang).then(() => next());
});

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "en"
});

const loadedLanguages: string[] = [];

function setI18nLanguage(lang: string) {
  i18n.locale = lang;
  axios.defaults.headers.common["Accept-Language"] = lang;
  if (document !== null && document.querySelector("html") !== null) {
    document.querySelector("html").setAttribute("lang", lang);
  }
  return lang;
}

function loadLanguageAsync(lang: string) {
  if (loadedLanguages.includes(lang)) {
    if (i18n.locale !== lang) setI18nLanguage(lang);
    return Promise.resolve();
  }
  return axios
    .get(`https://mock.avrillon.me/api/translations/${lang}.json`)
    .then(response => {
      let msgs = response.data;
      loadedLanguages.push(lang);
      i18n.setLocaleMessage(lang, msgs);
      setI18nLanguage(lang);
    });
}

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
