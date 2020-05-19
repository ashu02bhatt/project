import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from './views/dashboard.vue'
import work from './views/work.vue'
import people from './views/ppeople.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/work',
    name: 'work',
    component: work

  },
  {
    path: '/people',
    name: 'people',
    component: people

  }

]

const router = new VueRouter({
  routes
})

export default router