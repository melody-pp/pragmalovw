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
}