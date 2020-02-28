import { axios } from '@/utils/request'

const api = {
    moviePre: 'api/movie',
}

export function getMovieListAPI(params){
    return axios({
        url: `${api.moviePre}/listByTag`,
        method: 'GET',
        params
    })
}

export function getByMovieIdAPI(params){
    return axios({
        url: `${api.moviePre}/getByMovieId`,
        method: 'GET',
        params
    })
}

//获取电影数量
export function getCountOfMoviesAPI(params){
    return axios({
        url: `${api.moviePre}/getCountOfMovies`,
        method: 'GET',
        params
    })
}

//搜索
export function searchByKeywordAPI(params){
    return axios({
        url: `${api.moviePre}/searchByKeyword`,
        method: 'GET',
        params
    })
}
