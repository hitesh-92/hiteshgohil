import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition){
    return savedPosition || {x:0, y:0}  
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
