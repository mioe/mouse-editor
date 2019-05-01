import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/main.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    },
    {
      path: '*',
      component: () => import('@/views/main.vue')
    }
  ]
})
