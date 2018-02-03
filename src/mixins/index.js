import { TweenLite } from 'gsap'

const pageMoveMixin = {
  props: ['moveIn'],
  methods: {
    pageMoveIn () {
      TweenLite.to(this.$refs.page, .7, {scale: 1, autoAlpha: 1})
    },
    pageMoveOut () {
      TweenLite.to(this.$refs.page, .7, {scale: 0.6, autoAlpha: .4})
    }
  },
  watch: {
    moveIn (newVal) {
      newVal
        ? (this.pageMoveIn(), this.animate())
        : this.pageMoveOut()
    }
  }
}

export {
  pageMoveMixin
}
