import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// icons
import { FontAwesome } from '@/helpers/fa'
Vue.component('fa', FontAwesome)

import './assets/sass/global.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
