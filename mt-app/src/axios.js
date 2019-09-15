import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
// var instance = axios.create({

//   baseURL: 'http://api.duyiedu.com/api'
// })

axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: '653614490_1567664642043'
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
