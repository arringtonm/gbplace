import Vue from "vue";
// import VueUi from "@vue/ui";
import App from "./App.vue";
// import router from "./router";
// import "@vue/ui/dist/vue-ui.css";

Vue.config.productionTip = false;
// Vue.use(VueUi);

new Vue({
  // router,
  render: h => h(App)
}).$mount("#app");
