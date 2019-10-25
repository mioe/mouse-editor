import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// icons
import { FontAwesome } from '@/helpers/fa'
Vue.component('fa', FontAwesome)

// styles
import '@/assets/sass/global.sass'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
