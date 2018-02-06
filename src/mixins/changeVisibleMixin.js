export const changeVisibleMixin = {
  created () {
    this.changeVisible = this.changeVisible.bind(this)
    window.addEventListener('scroll', this.changeVisible)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.changeVisible)
  },
}
