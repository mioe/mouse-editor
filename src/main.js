import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// icons
import { FontAwesome } from '@/plugins/fa'
Vue.component('fa', FontAwesome)

// my style
import '@/assets/sass/global.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
