import {axios} from '@/utils/request'

const api = {
    commentPre: 'api/comment'
}
//根据电影ID删除评论
export function deleteByCommentIdAPI(params){
    return axios({
        url: `${api.commentPre}/deleteByCommentId`,
        method: 'GET',
        params
    })
}
//根据评论ID删除评论
export function deleteByMovieIdAPI(params){
    return axios({
        url: `${api.commentPre}/deleteByMovieId`,
        method: 'GET',
        params
    })
}
//用户添加新的电影评论
export function insertCommentAPI(data){
    return axios({
        url: `${api.commentPre}/insertComment`,
        method: 'POST',
        data
    })
}
//根据电影及父评论，查找子评论回复
export function listReplyCommentOfRootCommentAPI(params){
    return axios({
        url: `${api.commentPre}/listReplyCommentOfRootComment`,
        method: 'GET',
        params
    })
}
//获取电影的主评论列表
export function listRootCommentByMovieIdAPI(params){
    return axios({
        url: `${api.commentPre}/listRootCommentByMovieId`,
        method: 'GET',
        params
    })
}
//获取用户发出的评论    
export function listUserPostCommentsAPI(params){
    return axios({
        url: `${api.commentPre}/listUserPostComments`,
        method: 'GET',
        params
    })
}
//获取用户收到的评论
export function listUserReceiveCommentsAPI(params){
    return axios({
        url: `${api.commentPre}/listUserReceiveComments`,
        method: 'GET',
        params
    })
}