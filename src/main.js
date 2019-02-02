import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.component('drag', VueDraggableResizable)

// icons
import { FontAwesome } from '@/plugins/fa'
Vue.component('fa', FontAwesome)

// my styles
import '@/assets/css/github-markdown.css'
import '@/assets/sass/global.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
