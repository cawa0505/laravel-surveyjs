require("./base");

window.Vue = require("vue");

import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App";
import router from "./router";
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component("survey-show", "./components/SurveyShow.vue");

const opts = {
    icons: {
        iconfont: 'md', // default - only for display purposes
    },
};

new Vue({
  router,
  data() {
    return {
      snackbar: false,
      snackbarMsg: ""
    };
  },
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount("#survey-manager");
