import axios from 'axios'
// import { baseUrl } from './env'

const headers = {'Content-Type': 'application/x-www-form-urlencoded', 'devType': '4', 'openId': 'test'}
const fetch = axios.create({
  headers: headers,
  timeout: 150000
})

// 请求拦截器
fetch.interceptors.request.use((config) => {
  /* if (window.localStorage.getItem('token')) {
    config.headers.Authorization = `${window.localStorage.getItem('token')}`;
  } */
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
fetch.interceptors.response.use((response) => {
  // 对响应数据做些事
  if (!response.data.status && response.data.code === 1000) {
    // 废弃
  }
  return response
}, (error) => {
  // 请求错误时做些事
  return Promise.reject(error)
})

function json2url (json, isQueryToken) {
// if (!isQueryToken) {
//  const accessToken = window.localStorage.getItem('accessToken')
//  json.accessToken = accessToken// 每次请求都带上accessToken
// }
  let [arr, str] = [[], '']// arr = [], str = ''
  for (let i in json) {
    str = i + '=' + json[i]
    arr.push(str)
  }
  return arr.join('&')
}
const getInfo = (url = '', data = {}, type = 'get', isQueryToken = false, isFile = false) => {
  function dataToData () {
    if (isFile) {
      let data_ = new FormData()
      for (let key in data) {
        if (data.hasownproperty(key)) {
          data.append(key, data[key])
        }
      }
      return data ? data_ : {}
    }
    return data
  }
  if (type === 'get') { // 对象拼接成字符串
    let params = json2url(data, isQueryToken)
    let getUrl = params ? (url + '?' + params) : url// 若传参data为空的话，就不拼接，不为空，则拼接url
    return fetch.get(getUrl).then(function (resp) {
      if (resp.data.data && resp.data.data.accessToken) { // 更新accessToken
        window.localStorage.setItem('accessToken', resp.data.data.accessToken)
      }
      return resp.data
    })
  } else if (type === 'post') { // 对象拼接成字符串
    let postUrl = ''
    postUrl = url
    if (isFile) {
      fetch.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
      fetch.defaults.headers.post['Content-Type'] = 'application/json'
    }
    return fetch({
      method: type,
      url: postUrl,
      data: dataToData()
    }).then(function (resp) {
      if (resp.data.data && resp.data.data.accessToken) { // 更新accessToken
        window.localStorage.setItem('accessToken', resp.data.data.accessToken)
      }
      return resp.data
    })
  }
}
export { getInfo }
