'use strict'

import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  // Do something before request is sent
  config.withCredentials = true // 指示是否跨站点访问控制请求
  if (config.type === 'form') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

export default axios
