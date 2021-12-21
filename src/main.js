import Vue from 'vue';
import { router } from "./routes";
import App from './App.vue';
import { Simplert } from 'vue2-simplert-plugin'
import 'vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css'

Vue.use(Simplert)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
