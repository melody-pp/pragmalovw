import { cacheDom } from '../util'

export default {
  moveTo (state, pageIndex) {
    state.pageIndex = pageIndex
  },

  showNav (state) {
    state.navVisible = true
    setTimeout(() => {
      cacheDom('.nav-box').classList.add('navVisible')
    }, 120)
  },

  hideNav (state) {
    state.navVisible = false
    setTimeout(() => {
      cacheDom('.nav-box').classList.remove('navVisible')
    }, 80)
  },

  showLeaveInfo (state) {
    state.leaveInfoVisible = true
  },

  hideLeaveInfo (state) {
    state.leaveInfoVisible = false
  },
}
