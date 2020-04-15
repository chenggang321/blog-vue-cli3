import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import api from './utils/index'

// 引入jquery
import $ from 'jquery'

// 样式引入
import 'normalize.css'
import '@/assets/css/comment.css'

// 引入bootstrap
import '@/assets/bootstrap/js/bootstrap.min.js'
import '@/assets/bootstrap/css/bootstrap.css'


// 将工具方法挂载到Vue上
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
