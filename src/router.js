import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/editor.vue')
    },
    {
      path: '*',
      component: () => import('@/views/home.vue')
    }
  ]
})
