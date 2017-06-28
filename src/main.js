// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebaseService from './services/firebase'

firebaseService.init()

window.app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
