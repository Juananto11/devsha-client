'use strict'

import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'

import 'bootstrap/scss/bootstrap.scss'

import router from './router/'
import store from './store/'

Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
