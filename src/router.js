import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('./views/Home.vue'),
    children: [{
      path: '/systemIndex',
      name: 'systemIndex',
      component: () => import('./components/Home/HomeRightSide/systemIndex.vue')
    }, {
      path: '/accountSetting',
      name: 'accountSetting',
      component: () => import('./components/Home/HomeRightSide/accountSetting.vue')
    }, {
      path: '/systemInfo',
      name: 'systemInfo',
      component: () => import('./components/Home/HomeRightSide/systemInfo.vue')
    }, {
      path: '/loginLog',
      name: 'loginLog',
      component: () => import('./components/Home/HomeRightSide/loginLog.vue')
    }]
  }]
})
