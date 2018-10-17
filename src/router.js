import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Projects from "./views/Projects.vue";
// import Team from "./views/Team.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    }
  ]
});
