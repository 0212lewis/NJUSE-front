import { axios } from '@/utils/request'
const api = {
    chartPre: 'api/chart'
}
export function getCommentCountBarChartAPI(params) {
    return axios({
        url: `${api.chartPre}/getCommentCountBarChart`,
        method: 'GET',
        params
    })
}