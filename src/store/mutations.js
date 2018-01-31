export default {
  moveTo (state, pageIndex) {
    state.pageIndex = pageIndex
  },
  showNav (state) {
    state.navVisible = true
  },
  hideNav (state) {
    state.navVisible = false
  },

  enableRefresh (state) {
    state.refreshable = true
  },

  disableRefresh (state) {
    state.refreshable = false
  },

}