// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Buefy from "buefy";
import * as VueGoogleMaps from "vue2-google-maps";
import Vue2Filters from "vue2-filters";
import VueI18n from "vue-i18n";
import "buefy/lib/buefy.css";
import french from "./french.js";
import english from "./english.js";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDuBacGwzcYTG2tpXRlcTc2d6mYk2MZF0c",
    libraries: "places"
  }
});
Vue.use(require("vue-moment"));

Vue.use(Buefy, {
  defaultIconPack: "fa"
});
Vue.use(Vue2Filters);
Vue.use(VueI18n);

Vue.config.productionTip = false;

var messages = {
  en: english,
  fr: french
};

const defaultLang = "en";
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: defaultLang, // set locale
  messages // set locale message
});

const store = new Vuex.Store({
  state: {
    lang: defaultLang
  },
  mutations: {
    changeLang(state, lang) {
      console.log("commit", lang);
      state.lang = lang.lang;
      i18n.locale = lang.lang;
      // router.push({query: {lang: lang.lang}});
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log("from", from.query);
  if (to.query.lang) {
    store.commit("changeLang", { lang: to.query.lang });
    next();
  } else if (from.query.lang) {
    next({ path: to.path, query: { lang: from.query.lang } });
  } else {
    console.log("default");
    next({ path: to.path, query: { lang: defaultLang } });
  }
});

/* eslint-disable no-new */
new Vue({
  i18n,
  el: "#app",
  router,
  store,
  data: {
    user: null
  },
  render: h => h(App)
});
