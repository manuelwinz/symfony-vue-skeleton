import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "./css/custom.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  components: { App },
  template: "<App/>",
  router
}).$mount("#app");

