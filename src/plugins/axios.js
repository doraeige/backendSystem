'use strict'

import axios from 'axios'
// import qs from 'qs'

// easy-mock 假数据
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c1f35b095d59f6b419e0013/ht'

// yapi.api.chutao.im 假数据
axios.defaults.baseURL = 'https://yapi.chutao.im/mock/23/api'

/**
 * 登录按钮点击事件
 * @param {number} loginName
 * @param {number} loginPassword
 * qs模块进行转换
 */
// axios.interceptors.request.use(config => {
//   // Do something before request is sent
//   config.withCredentials = true // 指示是否跨站点访问控制请求
//   if (config.type === 'form') {
//     config.data = qs.stringify(config.data)
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   }
//   return config
// }, (error) => {
//   // Do something with request error
//   return Promise.reject(error)
// })

export default axios
