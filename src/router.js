import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import step0 from './components/Shop/ShopRightSide/addShopComponents/step0.vue'
import step1 from './components/Shop/ShopRightSide/addShopComponents/step1.vue'
import step2 from './components/Shop/ShopRightSide/addShopComponents/step2.vue'

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
    children: [
      {
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
        component: () => import('./components/Shop/ShopRightSide/addShop.vue'),
        children: [
          // 路径为'/addShop'，使用组件step0
          {
            path: '',
            component: step0
          },
          // 路径为'/addShopComponents/step0'，使用组件step0
          {
            path: 'step0',
            component: step0
          },
          // 路径为'/addShopComponents/step1'，使用组件step1
          {
            path: 'step1',
            component: step1
          }, {
            // 路径为'/addShopComponents/step2'，使用组件step2
            path: 'step2',
            component: step2
          }
        ]
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
