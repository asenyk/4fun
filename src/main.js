import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false
Vue.use(VueFirestore)

Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://localhost:8000/api/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
