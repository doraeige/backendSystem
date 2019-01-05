import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import systemIndex from './components/Home/HomeRightSide/systemIndex.vue'
import step0 from './components/Product/ProductRightSide/addProductComponents/step0.vue'
import step1 from './components/Product/ProductRightSide/addProductComponents/step1.vue'
import step2 from './components/Product/ProductRightSide/addProductComponents/step2.vue'

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
        path: '',
        component: systemIndex
      },
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
        path: '/productList',
        name: 'productList',
        component: () => import('./components/Product/ProductRightSide/productList.vue')
      }, {
        path: '/addProduct',
        name: 'addProduct',
        component: () => import('./components/Product/ProductRightSide/addProduct.vue'),
        children: [
          // 路径为'/addProduct'，使用组件step0
          {
            path: '',
            component: step0
          },
          // 路径为'/addProductComponents/step0'，使用组件step0
          {
            path: 'step0',
            component: step0
          },
          // 路径为'/addProductComponents/step1'，使用组件step1
          {
            path: 'step1',
            component: step1
          }, {
            // 路径为'/addProductComponents/step2'，使用组件step2
            path: 'step2',
            component: step2
          }
        ]
      }, {
        path: '/productRecycle',
        name: 'productRecycle',
        component: () => import('./components/Product/ProductRightSide/productRecycle.vue')
      }, {
        path: '/productComment',
        name: 'productComment',
        component: () => import('./components/Product/ProductRightSide/productComment.vue')
      }, {
        path: '/commentDetail',
        name: 'commentDetail',
        component: () => import('./components/Product/commentDetail.vue')
      }, {
        path: '/productClassification',
        name: 'productClassification',
        component: () => import('./components/Product/ProductRightSide/productClassification.vue')
      }, {
        path: '/addClassification',
        name: 'addClassification',
        component: () => import('./components/Product/ProductRightSide/addClassification.vue')
      }, {
        path: '/secondClassification',
        name: 'secondClassification',
        component: () => import('./components/Product/ProductRightSide/secondClassification.vue')
      }, {
        path: '/productType',
        name: 'productType',
        component: () => import('./components/Product/ProductRightSide/productType.vue')
      }, {
        path: '/brandManagement',
        name: 'brandManagement',
        component: () => import('./components/Product/ProductRightSide/brandManagement.vue')
      }, {
        path: '/libraryManagement',
        name: 'libraryManagement',
        component: () => import('./components/Product/ProductRightSide/libraryManagement.vue')
      }
    ]
  }]
})
