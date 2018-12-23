import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import './assets/icon/iconfont.css'
import './plugins/element.js'
import axios from 'axios'
import echarts from 'echarts'
require('./assets/common.less')

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
