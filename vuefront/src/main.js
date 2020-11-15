import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import UserList from "./components/UserList";

const routes = [
  { path: "/userlist", component: UserList }
];

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({ routes });
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
