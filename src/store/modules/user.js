import Vue from 'vue'
import router from '@/router'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { message } from 'ant-design-vue'
import {
    loginAPI,
} from '@/api/user'

const getDefaultState = () => {
    return {
        token: getToken(),
        name: '',
        userId: '',
        userInfo: {

        },
    }
}

const user = {
    state : getDefaultState(),

    mutations: {
        reset_state: function(state) {
            state.token = '',
            state.userId = '',
            state.userInfo = {
                
            }
        },
        set_token: function(state, token){
            state.token = token
        },
        set_userId: (state, data) => {
            state.userId = data
        },
        set_userInfo: (state, data) => {
            state.userInfo = {
                ...state.userInfo,
                ...data
            }
        },
    },

    actions: {
        login: async ({ commit }, userData) => {
            const res = await loginAPI(userData)
            if(res){
                setToken(res)
                // Vue.ls.set('ACCESS_TOKEN', res, 7 * 24 * 60 * 60 * 1000)
                commit('set_token', res)
            }
        },
        // getUserInfo({ commit }) {
        //     return new Promise((resolve, reject) => {
        //       getUserInfoAPI().then(response => {
        //         const data = response
        //         if (!data) {
        //           reject('登录已过期，请重新登录')
        //         }
        //         commit('set_userInfo', data)
        //         commit('set_userId', data.userId)
        //         resolve(data)
        //       }).catch(error => {
        //         reject(error)
        //       })
        //     })
        // },
        logout: async({ commit }) => {
            removeToken()
            resetRouter()
            commit('reset_state')
        },
          // remove token
        resetToken({ commit }) {
            return new Promise(resolve => {
                removeToken() // must remove  token  first
                commit('reset_state')
                resolve()
            })
        },
    }
}

export default user