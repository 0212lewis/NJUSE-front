import Vue from 'vue'
import axios from 'axios'
import { VueAxios } from './axios'
import {notification, message} from 'ant-design-vue'
import store from '@/store'
import { getToken } from './auth'
import router from '../router'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://localhost:45032/MovieTubeServer',
  withCredentials: true
})

 const err = (error) => { 
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get('ACCESS_TOKEN')
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
 }


//request incerceptor
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['Authorization'] = getToken()
  }
  const requestConfig = {
    ...config,
    url: `${config.url}`,
    withCredentials: true
  }
  return requestConfig
}, err)

service.interceptors.response.use((response) => {
  switch (response.status) {
    case 200:
      switch (response.data.returnCode) {
        case 200:
          return response.data.data
        default:
          if(response.data.message){
            message.error(response.data.message)
          }
      }
      break
    case 404:
      return false
    default:
      if(response.data.message){
        message.error(response.data.message)
      }
  }
})

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
