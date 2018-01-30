import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import MainView from '../pages/MainView'
import Error from '../pages/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
      ]
    },
    {path: '*', component: Error}
  ],
})
