import { axios } from '@/utils/request'

const api = {
    userPre: 'api/user'
}
export function loginAPI(data){
    return axios({
        url:`${api.userPre}/login`,
        method: 'POST',
        data
    })
}
export function registerAPI(data){
    return axios({
        url: `${api.userPre}/register`,
        method: 'POST',
        data
    })
}
export function getUserInfoAPI(){
    return axios({
        url: `${api.userPre}/getUserInfo`,
        method: 'GET'
    })
}
export function updateUserInfoByIdAPI(data) {
    return axios({
        url: `${api.userPre}/updateUserInfoById`,
        method: 'POST',
        data
    })
}