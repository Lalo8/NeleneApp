// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Buefy from "buefy";
import * as VueGoogleMaps from "vue2-google-maps";
import Vue2Filters from "vue2-filters";

import "buefy/lib/buefy.css";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDuBacGwzcYTG2tpXRlcTc2d6mYk2MZF0c",
    libraries: "places"
  }
});

Vue.use(Buefy, {
  defaultIconPack: "fa"
});
Vue.use(Vue2Filters);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  data: {
    user: null
  },
  render: h => h(App)
});
