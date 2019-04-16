import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  render: h2 => h2(App)
}).$mount("#app");
