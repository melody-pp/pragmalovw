import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Nav from '../pages/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Nav,
      children: [
        {
          path: '/home',
          component: Home
        },
        {

        }
      ]
    }
  ]
})
