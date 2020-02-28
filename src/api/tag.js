import { axios } from '@/utils/request'
const api = {
    tagPre: 'api/tag',
}
export function getTagsMapAPI() {
    return axios({
        url: `${api.tagPre}/getTagsMap`,
        method: 'GET'
    })
}