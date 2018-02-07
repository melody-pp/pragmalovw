import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import MainView from '../pages/MainView'
import WebsiteIntro from '../pages/websiteIntro/WebsiteIntro'
import WonderfulMoment from '../pages/wonderfulMoment/WonderfulMoment'
import Service from '../pages/service/Service'
import Details from '../pages/details/Details'
import Error from '../pages/Error'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/websiteIntro', component: WebsiteIntro},
        {path: '/wonderfulMoment', component: WonderfulMoment},
        {path: '/service', component: Service},
        {path: '/details/:id', component: Details},
      ]
    },
    {path: '*', component: Error}
  ],
})

router.beforeEach((to, from, next) => {
  store.commit('hideNav')
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    window.scrollTo(0, 1)
  })
})

export default router
