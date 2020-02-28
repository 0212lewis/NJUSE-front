import { axios } from '@/utils/request'
const api = {
    ratePre: '/api/rate'
}

export function insertOrUpdateRateAPI(data){
    return axios({
        url: `${api.ratePre}/insertOrUpdateRate`,
        method: 'POST',
        data
    })
}