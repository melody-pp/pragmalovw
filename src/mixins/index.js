const pageMoveMixin = {
  props: ['moveIn'],
  watch: {
    moveIn (newVal) {
      newVal
        ? this.animate()
        : this.pageMoveOut()
    }
  }
}

export {
  pageMoveMixin
}
