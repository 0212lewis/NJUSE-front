import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/user/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
  },
  {
    path: '/home',
    name: 'layout',
    component: ()=> import('@/views/layout')
  }
  // {
  //   path: '/movie',
  //   name: 'layout',
  //   redirect: '/movie/list',
  //   component: () => import('@/views/layout'),
  //   children: [
  //     {
  //       path: '/movie/list',
  //       name: 'list',
  //       component: ()=> import('@/views/movie/movieList')
  //     },
  //     {
  //       path: '/movie/movieDetail/:movieId',
  //       name: 'movieDetail',
  //       component: () => import('@/views/movie/movieDetail')
  //     },
  //     {
  //       path: '/movie/search',
  //       name: 'search',
  //       component: () => import('@/views/movie/searchMovie')
  //     },
  //     {
  //       path: '/user/info/:userId',
  //       name: 'info',
  //       component: () => import('@/views/user/info')
  //     }
  //   ]
  // }

]
const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
