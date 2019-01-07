import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import step0 from './components/Product/ProductRightSide/addProductComponents/step0.vue'
import step1 from './components/Product/ProductRightSide/addProductComponents/step1.vue'
import step2 from './components/Product/ProductRightSide/addProductComponents/step2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: '主页',
      component: () => import('./views/Home.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: '首页',
          component: () => import('./components/Home/HomeSideBar.vue'),
          redirect: '/index/systemIndex',
          children: [
            {
              path: '/index/systemIndex',
              name: '系统首页',
              component: () => import('./components/Home/HomeRightSide/systemIndex.vue')
            }, {
              path: '/index/accountSetting',
              name: '账户设置',
              component: () => import('./components/Home/HomeRightSide/accountSetting.vue')
            }, {
              path: '/index/systemInfo',
              name: '系统信息',
              component: () => import('./components/Home/HomeRightSide/systemInfo.vue')
            }, {
              path: '/index/loginLog',
              name: '登录日志',
              component: () => import('./components/Home/HomeRightSide/loginLog.vue')
            }
          ]
        },
        { // 评价详情
          path: '/commentDetail',
          name: 'commentDetail',
          component: () => import('./components/Product/commentDetail.vue')
        },
        {
          path: '/goods',
          name: '商品',
          component: () => import('./components/Product/ProductSideBar.vue'),
          redirect: '/goods/productList',
          children: [
            {
              path: '/goods/productList',
              name: '商品列表',
              component: () => import('./components/Product/ProductRightSide/productList.vue')
            }, { // 添加商品
              path: '/goods/addProduct',
              component: () => import('./components/Product/ProductRightSide/addProduct.vue'),
              children: [
                // 路径为'/goods/addProduct'，使用组件step0
                {
                  path: '',
                  component: step0
                },
                // 路径为'/goods/addProduct/step0'，使用组件step0
                {
                  path: '/goods/addProduct/step0',
                  component: step0
                },
                // 路径为'/goods/addProduct/step1'，使用组件step1
                {
                  path: '/goods/addProduct/step1',
                  component: step1
                }, {
                  // 路径为'/goods/addProduct/step2'，使用组件step2
                  path: '/goods/addProduct/step2',
                  component: step2
                }
              ]
            }, {
              path: '/goods/productRecycle',
              name: '商品回收站',
              component: () => import('./components/Product/ProductRightSide/productRecycle.vue')
            }, { // 商品评价
              path: '/goods/productComment',
              name: 'productComment',
              component: () => import('./components/Product/ProductRightSide/productComment.vue')
            }, {
              path: '/goods/productClassification',
              name: '商品分类',
              component: () => import('./components/Product/ProductRightSide/productClassification.vue')
            }, { // 添加分类
              path: '/goods/productClassification/addClassification',
              name: 'addClassification',
              component: () => import('./components/Product/ProductRightSide/classificationComponents/addClassification.vue')
            }, { // 二级分类
              path: '/goods/productClassification/secondClassification',
              name: 'secondClassification',
              component: () => import('./components/Product/ProductRightSide/classificationComponents/secondClassification.vue')
            }, {
              path: '/goods/productType',
              name: '商品类型',
              component: () => import('./components/Product/ProductRightSide/productType.vue')
            }, { // 添加属性
              path: '/goods/productType/addAttributes',
              name: 'addAttributes',
              component: () => import('./components/Product/ProductRightSide/productTypeComponents/addAttributes.vue')
            }, { // 添加参数
              path: '/goods/productType/addParameter',
              name: 'addParameter',
              component: () => import('./components/Product/ProductRightSide/productTypeComponents/addParameter.vue')
            }, { // 属性列表
              path: '/goods/productType/attributesList',
              name: 'attributesList',
              component: () => import('./components/Product/ProductRightSide/productTypeComponents/attributesList.vue')
            }, { // 参数列表
              path: '/goods/productType/parameterList',
              name: 'parameterList',
              component: () => import('./components/Product/ProductRightSide/productTypeComponents/parameterList.vue')
            }, {
              path: '/goods/brandManagement',
              name: '品牌管理',
              component: () => import('./components/Product/ProductRightSide/brandManagement.vue')
            }, { // 新增品牌
              path: '/goods/brandManagement/addNewBrand',
              name: 'addNewBrand',
              component: () => import('./components/Product/ProductRightSide/addNewBrand.vue')
            }, {
              path: '/goods/libraryManagement',
              name: '图片库管理',
              component: () => import('./components/Product/ProductRightSide/libraryManagement.vue')
            }, { // 新建相册
              path: '/goods/libraryManagement/newAlbum',
              name: 'newAlbum',
              component: () => import('./components/Product/ProductRightSide/newAlbum.vue')
            }
          ]
        },
        {
          path: '/order',
          name: '订单',
          component: () => import('./components/Order/OrderSideBar.vue'),
          redirect: '/order/orderList',
          children: [
            {
              path: '/order/orderList',
              name: '订单列表',
              component: () => import('./components/Order/OrderRightSide/orderList.vue')
            }, {
              path: '/order/confirmGoods',
              name: '确认收货',
              component: () => import('./components/Order/OrderRightSide/confirmGoods.vue')
            }, {
              path: '/order/arrivalReminder',
              name: '到货提醒',
              component: () => import('./components/Order/OrderRightSide/arrivalReminder.vue')
            }, {
              path: '/order/orderSetting',
              name: '订单设置',
              component: () => import('./components/Order/OrderRightSide/orderSetting.vue')
            }, {
              path: '/order/returnApplicationProcessing',
              name: '退货申请处理',
              component: () => import('./components/Order/OrderRightSide/returnApplicationProcessing.vue')
            }, {
              path: '/order/refundRequestProcessing',
              name: '退款申请处理',
              component: () => import('./components/Order/OrderRightSide/refundRequestProcessing.vue')
            }, {
              path: '/order/returnReasonManagement',
              name: '退货原因管理',
              component: () => import('./components/Order/OrderRightSide/returnReasonManagement.vue')
            }
          ]
        }
      ]
    }
  ]
})
