import { TweenLite } from 'gsap'

const pageMoveMixin = {
  props: ['moveIn'],
  methods: {
    pageMoveOut () {
      TweenLite.to(this.$refs.page, .7, {scale: 0.6, autoAlpha: .4})
    }
  },
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
