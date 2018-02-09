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
    state.weixinVisible = false
    setTimeout(() => {
      cacheDom('.nav-box').classList.remove('navVisible')
    }, 80)
  },

  showLeaveInfo (state) {
    for (const el of cacheDom('#app>div').children) {
      el.classList.contains('modal') || el.classList.add('glass')
    }
    state.weixinVisible = false
    state.leaveInfoVisible = true
  },

  hideLeaveInfo (state) {
    for (const el of cacheDom('#app>div').children) {
      el.classList.remove('glass')
    }
    state.leaveInfoVisible = false
  },

  setPageTextList (state, pageTextList) {
    state.pageTextList = pageTextList
  },

  setContactInfo (state, contactInfo) {
    state.contactInfo = contactInfo
  },

  setUnite (state, unite) {
    state.unite = unite
  },

  setGoodtime (state, goodtime) {
    state.goodtime = goodtime
  },

  setLoadingStatus (state, isLoading) {
    state.isLoading = isLoading
  },

  setLang (state, lang) {
    state.lang = lang
  },

  toggleWeixin (state) {
    state.weixinVisible = !state.weixinVisible
  },

  hideWeixin (state) {
    state.weixinVisible = false
  },
}
