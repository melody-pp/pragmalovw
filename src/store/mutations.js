import { cacheDom } from '../util'

export default {
  moveTo (state, pageIndex) {
    state.pageIndex = pageIndex
  },

  showNav (state) {
    state.navVisible = true
    setTimeout(() => {
      cacheDom('.nav-box').classList.add('navVisible')
    }, 50)
  },

  hideNav (state) {
    state.navVisible = false
    setTimeout(() => {
      cacheDom('.nav-box').classList.remove('navVisible')
    }, 50)
  },

  enableRefresh (state) {
    state.refreshable = true
  },

  disableRefresh (state) {
    state.refreshable = false
  },

}
