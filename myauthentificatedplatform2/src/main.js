import Vue from 'vue' 
import App from './App.vue'
// import Vuex from 'vuex'
import store from './components/store'
// import SignUpForm from './components/SignUpForm.vue' 
// import SignInForm from './components/SignInForm.vue' 
// import HelloWorld from './components/HelloWorld.vue' 
// import Dashboard from './views/Dashboard.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import axios from 'axios'
import VueAxios from 'vue-axios' 
import router from './router'  

 
// import 'es6-promise/auto'

 


 
Vue.use(VueAxios, axios) 
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false  



new Vue({ 
  router, 
   store, 
   
  render: h => h(App),
}).$mount('#app')
