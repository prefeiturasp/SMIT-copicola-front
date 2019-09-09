import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const axiosBase = axios.create({
  baseURL: 'http://localhost/wp-json/wp/v2/'
})

const axiosACF = axios.create({
  baseURL: 'http://localhost/wp-json/acf/v3/'
})

axiosBase.interceptors.response.use( (response) => {
  return response
}, (error) => {
  if (error.response.status == 404) {
    this.$router.push("/*")
  }
})

Vue.prototype.$http = {
  'wp' : axiosBase,
  'acf' : axiosACF
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
