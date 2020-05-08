import Vue from "vue";
import api from "./utils/index";

// 样式引入
import "@/assets/css/comment.css";
import "@/assets/bootstrap/scss/customizeBootstrap.scss";

// 按需引入element组件
import { Button, Select, Dialog } from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Dialog);

Vue.use(api);
