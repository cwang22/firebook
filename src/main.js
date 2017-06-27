// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import firebase from './services/firebase'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
window.authenticated = false
window.user = null
firebase(firebaseStatus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})

function firebaseStatus (signedIn, user) {
  window.authenticated = signedIn
  if (user) window.user = user
  else window.user = null
}
