import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import BootstrapVue from 'bootstrap-vue'
import jQuery from 'jquery'
import App from './App.vue'
// import {jQuery as $} from './jquery';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '../public/assets/libs/chartist/dist/chartist.min.css'
import '../public/dist/css/style.min.css'
import '../public/dist/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
