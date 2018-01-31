import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import MainView from '../pages/MainView'
import WebsiteIntro from '../pages/websiteIntro/WebsiteIntro'
import WonderfulMoment from '../pages/wonderfulMoment/WonderfulMoment'
import Service from '../pages/service/Service'
import Details from '../pages/details/Details'
import Error from '../pages/Error'

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
        {path: '/details', component: Details},
      ]
    },
    {path: '*', component: Error}
  ],
})

export default router
