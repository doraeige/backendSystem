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
    }, {
      path: '/shopList',
      name: 'shopList',
      component: () => import('./components/Shop/ShopRightSide/shopList.vue')
    }, {
      path: '/addShop',
      name: 'addShop',
      component: () => import('./components/Shop/ShopRightSide/addShop.vue')
    }, {
      path: '/shopRecycle',
      name: 'shopRecycle',
      component: () => import('./components/Shop/ShopRightSide/shopRecycle.vue')
    }, {
      path: '/shopComment',
      name: 'shopComment',
      component: () => import('./components/Shop/ShopRightSide/shopComment.vue')
    }, {
      path: '/shopClassification',
      name: 'shopClassification',
      component: () => import('./components/Shop/ShopRightSide/shopClassification.vue')
    }, {
      path: '/shopType',
      name: 'shopType',
      component: () => import('./components/Shop/ShopRightSide/shopType.vue')
    }, {
      path: '/brandManagement',
      name: 'brandManagement',
      component: () => import('./components/Shop/ShopRightSide/brandManagement.vue')
    }, {
      path: '/libraryManagement',
      name: 'libraryManagement',
      component: () => import('./components/Shop/ShopRightSide/libraryManagement.vue')
    }]
  }]
})
