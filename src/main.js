import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const axiosBase = axios.create({
  baseURL: 'http://localhost/wp-json/wp/v2/'
})

Vue.prototype.$http = axiosBase

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
